/**
 * Build Error Detector
 * 
 * This module provides functionality to detect and report Next.js build errors
 * in the client environment. It works in conjunction with the GlobalErrorHandler
 * to provide a unified error reporting experience.
 */

import ErrorStackParser from "error-stack-parser";

// Add TypeScript declarations for Next.js error overlay properties
declare global {
  interface Window {
    __NEXT_ERROR_OVERLAY__?: {
      onBuildError?: (error: any) => void;
    };
    __NEXT_BUILD_ERROR_LISTENER__?: (errorData: any) => void;
  }
}

// Interface for stack frame information
interface StackFrame {
  fileName: string;
  lineNumber: number;
  columnNumber: number;
  functionName: string;
}

// Function to parse detailed build error information
function parseDetailedBuildError(error: Error | any): Record<string, any> {
  // Debug the incoming error
  console.log("[DEBUG] Parsing error:", {
    errorType: error instanceof Error ? 'Error object' : typeof error,
    message: error?.message ? error.message.substring(0, 200) + '...' : 'No message',
    hasStack: !!error?.stack,
    stack: error?.stack ? error.stack.substring(0, 200) + '...' : 'No stack'
  });

  const details: Record<string, any> = {
    source: "webpack-build",
    line: 0,
    column: 0,
    file: null,
    parsedMessage: null,
    improvedStack: [],
  };
  
  if (!error) return details;
  
  const errorMessage = error.message || (typeof error === 'string' ? error : '');

  // Log the exact error message for debugging
  console.log("[DEBUG] Raw error message:", errorMessage);
  
  // Next.js-specific error pattern with file, line, and column in brackets
  // Matches formats like "╭─[/path/to/file.tsx:65:1]"
  const nextjsErrorPattern = /╭─\[(.+?):(\d+):(\d+)\]/;
  const nextjsMatch = errorMessage.match(nextjsErrorPattern);
  
  if (nextjsMatch) {
    console.log("[DEBUG] Found Next.js error pattern match");
    details.file = nextjsMatch[1];
    details.line = parseInt(nextjsMatch[2], 10);
    details.column = parseInt(nextjsMatch[3], 10);
    details.source = details.file;
  }

  // Standard file:line:column pattern
  // Matches formats like "[/path/to/file.tsx:65:1]" or "at /path/to/file.tsx:65:1"
  if (!details.file) {
    const fileLineColPattern = /(?:\[|\s|^)([^()[\]]+?):(\d+):(\d+)(?:\]|\s|$)/;
    const fileLineColMatch = errorMessage.match(fileLineColPattern);
    
    if (fileLineColMatch) {
      console.log("[DEBUG] Found standard file:line:column pattern match");
      details.file = fileLineColMatch[1];
      details.line = parseInt(fileLineColMatch[2], 10);
      details.column = parseInt(fileLineColMatch[3], 10);
      details.source = details.file;
    }
  }
  
  // Path shown in "File: path/to/file.js" format
  if (!details.file) {
    const filePattern = /File:\s+(.+?\.[a-zA-Z0-9]+)/;
    const fileMatch = errorMessage.match(filePattern);
    
    if (fileMatch) {
      console.log("[DEBUG] Found File: pattern match");
      details.file = fileMatch[1];
      details.source = details.file;
    }
  }
  
  // Extract the actual error message without the file info
  // Next.js specific error format (with ×)
  const nextjsErrorDescriptionPattern = /Error:\s+×\s+(.+?)(?:\n|$)/;
  const nextjsErrorMatch = errorMessage.match(nextjsErrorDescriptionPattern);
  
  if (nextjsErrorMatch) {
    console.log("[DEBUG] Found Next.js error description match");
    details.parsedMessage = nextjsErrorMatch[1].trim();
  } else {
    // Standard error message format
    const errorPattern = /Error:\s+(.+?)(?:\n|$)/;
    const errorMatch = errorMessage.match(errorPattern);
    
    if (errorMatch) {
      console.log("[DEBUG] Found standard error description match");
      details.parsedMessage = errorMatch[1].trim();
    }
  }
  
  // Try to detect module build errors from SWC/Babel/etc
  const moduleBuildErrorPattern = /Module build failed.*?:\s*([\s\S]+?)(?:\n\n|\n(?=at)|$)/;
  const moduleBuildMatch = errorMessage.match(moduleBuildErrorPattern);
  
  if (moduleBuildMatch) {
    console.log("[DEBUG] Found module build error match");
    const moduleBuildError = moduleBuildMatch[1].trim();
    
    // Try to extract file info from the module build error
    const moduleFileMatch = moduleBuildError.match(nextjsErrorPattern);
    if (moduleFileMatch && !details.file) {
      console.log("[DEBUG] Found file info in module build error");
      details.file = moduleFileMatch[1];
      details.line = parseInt(moduleFileMatch[2], 10);
      details.column = parseInt(moduleFileMatch[3], 10);
      details.source = details.file;
    }
    
    // If we haven't found an error message yet, use the module build error
    if (!details.parsedMessage) {
      const moduleErrorMatch = moduleBuildError.match(nextjsErrorDescriptionPattern) || 
                              moduleBuildError.match(/Error:\s+(.+?)(?:\n|$)/);
      
      details.parsedMessage = moduleErrorMatch
        ? moduleErrorMatch[1].trim()
        : moduleBuildError;
    }
  }
  
  // If we still don't have a reasonable error message, use the first line
  // or truncate the full message
  if (!details.parsedMessage && errorMessage) {
    const firstLine = errorMessage.split('\n')[0].trim();
    details.parsedMessage = firstLine || errorMessage.substring(0, 100);
  }
  
  // Handle raw data from the error-overlay component
  if (error.rawError && error.rawError.loc) {
    console.log("[DEBUG] Found raw error data with location info");
    if (!details.file && error.rawError.moduleId) {
      console.log("[DEBUG] Using moduleId from raw error");
      details.file = error.rawError.moduleId;
      details.source = details.file;
    }
    
    // Next.js error-overlay often has precise location info
    if (error.rawError.loc) {
      console.log("[DEBUG] Using loc from raw error");
      details.line = error.rawError.loc.line || details.line;
      details.column = error.rawError.loc.column || details.column;
    }
  }
  
  // Extract information from the raw event if available
  if (error.rawEvent) {
    console.log("[DEBUG] Found raw event data");
    if (!details.file && error.rawEvent.filename) {
      console.log("[DEBUG] Using filename from raw event");
      details.file = error.rawEvent.filename;
      details.source = details.file;
    }
    
    if (error.rawEvent.lineno && !details.line) {
      console.log("[DEBUG] Using lineno from raw event");
      details.line = error.rawEvent.lineno;
    }
    
    if (error.rawEvent.colno && !details.column) {
      console.log("[DEBUG] Using colno from raw event");
      details.column = error.rawEvent.colno;
    }
  }
  
  // Use ErrorStackParser as a last resort if we don't have location info
  let stackParsed = false;
  try {
    if (error instanceof Error || (error && error.stack)) {
      console.log("[DEBUG] Parsing error stack with ErrorStackParser");
      const stackFrames = ErrorStackParser.parse(error);
	  console.log("[DEBUG] Stack frames:", stackFrames);
	  
      // Create improved stack with cleaner file paths
      const improvedStack = stackFrames.map(frame => ({
        fileName: frame.fileName 
          ? frame.fileName.replace("webpack-internal:///app-pages-browser/.", "")
          : "",
        lineNumber: frame.lineNumber || 0,
        columnNumber: frame.columnNumber || 0,
        functionName: frame.functionName || "",
      }));
      
      console.log("[DEBUG] Extracted stack frames:", 
        improvedStack.length > 0 
          ? `${improvedStack.length} frames, first: ${JSON.stringify(improvedStack[0])}` 
          : "none");
      
      // Filter out frames from node_modules and internal webpack files
      const relevantFrames = improvedStack.filter(frame => {
        const fileName = frame.fileName || '';
        return fileName && 
              !fileName.includes('node_modules') && 
              !fileName.includes('webpack-internal:') &&
              !fileName.includes('webpack/bootstrap') &&
              !fileName.includes('error-detector');
      });
      
      console.log("[DEBUG] Relevant frames after filtering:", 
        relevantFrames.length > 0 
          ? `${relevantFrames.length} frames, first: ${JSON.stringify(relevantFrames[0])}` 
          : "none");
      
      // Only use stack info if we don't have better file info already
      if (relevantFrames.length > 0 && !details.file) {
        stackParsed = true;
        const firstFrame = relevantFrames[0];
        console.log("[DEBUG] Using info from first relevant stack frame");
        details.file = firstFrame.fileName;
        details.source = firstFrame.fileName;
        details.line = firstFrame.lineNumber;
        details.column = firstFrame.columnNumber;
        details.functionName = firstFrame.functionName;
      }
      
      details.improvedStack = relevantFrames.length > 0 ? relevantFrames : improvedStack;
    }
  } catch (stackError) {
    console.error("[DEBUG] Failed to parse error stack:", stackError);
  }
  
  // Prioritize user code over system files if we have stack data
  if (details.source && (
      details.source.includes('node_modules') || 
      details.source.includes('webpack') ||
      details.source.includes('next/dist')
  ) && details.improvedStack && details.improvedStack.length > 0) {
    console.log("[DEBUG] Trying to find better source in stack frames");
    // Look for a better source in the improved stack
    for (const frame of details.improvedStack) {
      if (frame.fileName && 
          !frame.fileName.includes('node_modules') && 
          !frame.fileName.includes('webpack') &&
          !frame.fileName.includes('next/dist')) {
        console.log("[DEBUG] Found better source in stack:", frame.fileName);
        details.source = frame.fileName;
        details.file = frame.fileName;
        details.line = frame.lineNumber;
        details.column = frame.columnNumber;
        details.functionName = frame.functionName;
        break;
      }
    }
  }
  
  // Try to identify the most logical buildErrorType
  if (!details.buildErrorType) {
    if (errorMessage.includes('Module build failed')) {
      details.buildErrorType = 'module-build';
    } else if (errorMessage.includes('Failed to compile')) {
      details.buildErrorType = 'compilation';
    } else if (errorMessage.includes('Syntax Error') || errorMessage.includes('Unexpected token')) {
      details.buildErrorType = 'syntax-error';
    } else if (errorMessage.includes('Loading chunk')) {
      details.buildErrorType = 'chunk-loading';
    } else {
      details.buildErrorType = 'webpack';
    }
  }
  
  // Log the extracted details
  console.log("[DEBUG] Extracted error details:", {
    file: details.file,
    source: details.source,
    line: details.line,
    column: details.column,
    parsedMessage: details.parsedMessage,
    buildErrorType: details.buildErrorType,
    improvedStackLength: details.improvedStack.length,
    stackParsed
  });
  
  return details;
}

// Helper function to send error to parent window - matching the pattern in creatr.scripts.tsx
function sendErrorToParent(error: Error, details: Record<string, any> = {}) {
  try {
    console.log("[DEBUG] Original details before parsing:", {
      source: details.source,
      file: details.file,
      line: details.line,
      column: details.column,
      origin: details.origin,
      buildErrorType: details.buildErrorType
    });
    
    // Parse detailed error information
    const errorDetails = parseDetailedBuildError(error);
    
    // Merge the parsed details with the provided details
    const mergedDetails: Record<string, any> = {
      ...errorDetails,
      // We only want to override with provided details if they actually exist
    //   source: details.source || errorDetails.source || "webpack-build",
    //   file: details.file || errorDetails.file,
    //   line: details.line || errorDetails.line || 0,
    //   column: details.column || errorDetails.column || 0,
    //   improvedStack: errorDetails.improvedStack || details.improvedStack || [],
    //   buildErrorType: details.buildErrorType || errorDetails.buildErrorType || "unknown",
    //   origin: details.origin || "build-error-detector",
    };
    
    // Use parsed message if available
    const displayMessage = errorDetails.parsedMessage || error.message;
    
    // For better debugging, ensure we capture module errors even if they come through different paths
    if (!mergedDetails.moduleError && errorDetails.file && errorDetails.file.includes('module')) {
      mergedDetails.moduleError = errorDetails.file;
    }

    
    // Log the error details before sending to parent
    console.log("[SENDING TO PARENT] Build error from detector:", {
      file: mergedDetails.file,
      source: mergedDetails.source,
      message: displayMessage,
      line: mergedDetails.line,
      column: mergedDetails.column,
      stack: error.stack,
      buildErrorType: mergedDetails.buildErrorType || "unknown",
      timestamp: new Date().toISOString(),
      origin: mergedDetails.origin,
      stackFrames: mergedDetails.improvedStack
    });
    
    window.parent.postMessage(
      {
        type: "ERROR",
        payload: {
          message: displayMessage || error.message,
          source: mergedDetails.source || "webpack-build",
          file: mergedDetails.file,
          line: mergedDetails.line || 0,
          column: mergedDetails.column || 0,
          functionName: mergedDetails.functionName || "",
          stack: error.stack || "",
          stackFrames: mergedDetails.improvedStack || [],
          url: window.location.href,
          timestamp: new Date().toISOString(),
          isBuildError: true,
          originalError: error.message,
          ...mergedDetails
        },
      },
      "*"
    );
  } catch (e) {
    console.error("Failed to post message to parent:", e);
  }
}

// Set up the global build error handler for Next.js
if (typeof window !== 'undefined') {
  // Hook into Next.js error overlay system
  // This will capture errors from webpack HMR updates
  const originalErrorOverlay = window.__NEXT_ERROR_OVERLAY__;
  
  if (originalErrorOverlay) {
    const originalOnBuildError = originalErrorOverlay.onBuildError;
    
    // Patch the Next.js build error handler
    originalErrorOverlay.onBuildError = (error: any) => {
      // First, call the original handler to maintain default behavior
      if (originalOnBuildError) {
        originalOnBuildError(error);
      }
      
      // Then, send error to parent window
      try {
        const errorMessage = error.message || 'Build error';
        const errorObj = new Error(errorMessage);
        
        // Preserve original stack if available
        if (error.stack) {
          errorObj.stack = error.stack;
        }
        
        // Extract additional details from the error object
        const details = {
          moduleError: error.moduleName || error.moduleIdentifier || null,
          file: error.file || null,
          location: error.loc || null,
          source: error.file || null,
          line: error.loc?.line || 0,
          column: error.loc?.column || 0,
          buildErrorType: "compilation",
          origin: "error-overlay-patch",
          // Preserve raw error for better parsing
          rawError: error
        };
        
        console.warn('Build error intercepted by detector:', details);
        
        // Send to parent window
        sendErrorToParent(errorObj, details);
        
        // Also dispatch event for GlobalErrorHandler
        const event = new CustomEvent('webpack-build-error', {
          detail: {
            error: errorObj,
            ...details,
            sentToParent: true // Mark as already sent to parent
          }
        });
        window.dispatchEvent(event);
      } catch (e) {
        console.error('Failed to handle build error:', e);
      }
    };
  }
  
  // Also listen for webpack chunk loading errors
  window.addEventListener('error', (event) => {
    const error = event.error || event;
    
    // Check if this is a chunk loading error from webpack
    if (error && 
        typeof error.message === 'string' && 
        (error.message.includes('Loading chunk') || 
         error.message.includes('Loading CSS chunk') ||
         error.message.includes('webpack') ||
         error.message.includes('Module build failed'))) {
      
      console.warn('Webpack chunk loading error detected:', error);
      
      try {
        const errorObj = error instanceof Error 
          ? error 
          : new Error(error.message || 'Chunk loading error');
        
        // Preserve original stack if available
        if (error.stack && !errorObj.stack) {
          errorObj.stack = error.stack;
        }
        
        const details: Record<string, any> = {
          isChunkLoadError: true,
          buildErrorType: "chunk-loading",
          source: null, // Let the parser find the actual source
          origin: "chunk-load-event",
          // Add raw event data
          rawEvent: {
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            message: event.message
          }
        };
        
        // If the event has filename/line info, use it
        if (event.filename && !details.source) {
          details.source = event.filename;
          details.file = event.filename;
        }
        
        if (event.lineno) {
          details.line = event.lineno;
        }
        
        if (event.colno) {
          details.column = event.colno;
        }
        
        // Send to parent window directly
        sendErrorToParent(errorObj, details);
        
        // Also dispatch event for GlobalErrorHandler
        const errorEvent = new CustomEvent('webpack-build-error', {
          detail: {
            error: errorObj,
            ...details,
            timestamp: new Date().toISOString(),
            sentToParent: true // Mark as already sent to parent
          }
        });
        window.dispatchEvent(errorEvent);
      } catch (e) {
        console.error('Failed to dispatch chunk error event:', e);
      }
    }
  }, true); // Use capture phase to catch errors before they're handled elsewhere
  
  // Set up global error listener function for webpack
  // This can be called directly from webpack error hooks
  window.__NEXT_BUILD_ERROR_LISTENER__ = function(errorData: any) {
    try {
      console.warn('Build error reported via global listener:', errorData);
      
      const errorMessage = errorData.message || 'Build error';
      const errorObj = new Error(errorMessage);
      
      // Preserve original stack if available
      if (errorData.stack) {
        errorObj.stack = errorData.stack;
      }
      
      const details = {
        buildErrorType: "webpack-listener",
        data: errorData,
        source: errorData.file || errorData.moduleName || null,
        origin: "global-error-listener",
        file: errorData.file || null,
        line: errorData.line || errorData.loc?.line || 0,
        column: errorData.column || errorData.loc?.column || 0,
        // Keep raw data for parsing
        rawError: errorData
      };
      
      // Send to parent window directly
      sendErrorToParent(errorObj, details);
      
      // Also dispatch for GlobalErrorHandler
      const event = new CustomEvent('webpack-build-error', {
        detail: { 
          error: errorObj,
          ...details,
          sentToParent: true // Mark as already sent to parent
        }
      });
      window.dispatchEvent(event);
    } catch (e) {
      console.error('Failed to dispatch build error event from global listener:', e);
    }
  };
}

// Export a dummy function to allow importing this file
export function initBuildErrorDetector(): void {
  // Initialization happens automatically when this file is imported
  console.log('Build error detector initialized');
} 