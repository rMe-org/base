import { execSync } from 'child_process';
import { describe, it, expect } from '@jest/globals';

describe('TypeScript Build', () => {
	it('should successfully compile TypeScript without errors', () => {
		try {
			// Run TypeScript compiler in noEmit mode
			execSync('pnpm run test:types', { stdio: 'pipe' });
		} catch (error: any) {
			// If there are any TypeScript errors, the test will fail
			console.error('TypeScript compilation failed:', error.stdout?.toString());
			throw error;
		}
	});
});