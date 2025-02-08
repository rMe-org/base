"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class VideoErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Video error caught:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border border-destructive rounded-lg">
          <h2 className="text-lg font-semibold text-destructive mb-2">Video Loading Error</h2>
          <p className="text-muted-foreground">
            {this.state.error?.message || "An error occurred while loading the video."}
          </p>
          <button
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
