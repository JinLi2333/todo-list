# Testing Guide

This project uses [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/react) for unit and integration testing.

## Running Tests

### Watch Mode (Interactive)
```bash
pnpm test
```
Runs tests in watch mode. Tests will re-run automatically when files change.

### Single Run
```bash
pnpm test:run
```
Runs all tests once and exits. Useful for CI/CD pipelines.

### UI Mode
```bash
pnpm test:ui
```
Opens an interactive UI to explore and run tests. Great for debugging.

### Coverage Report
```bash
pnpm test:coverage
```
Runs tests and generates a coverage report in the terminal.

### Full Test Report
```bash
pnpm test:report
```
Generates a comprehensive test report with:
- Coverage metrics in terminal (verbose)
- HTML coverage report in `coverage/` directory
- LCOV report for CI/CD tools

After running, open `coverage/index.html` in your browser to view the detailed coverage report.

## Test Organization

Tests are located in `src/test/` directory:
- `setup.ts` - Test environment configuration
- `*.test.tsx` - Test files for components

## Current Test Coverage

### AbortControllerTest Component

The test suite covers:
- Component rendering and initial state
- Starting single requests
- Request completion and success states
- Request cancellation
- Button state management (enabled/disabled)
- Multiple concurrent requests
- Auto-cancellation after timeout
- Request history clearing
- Duration display
- URL selection
- Request ID incrementing
- Status-based styling

All tests use real timers and async/await patterns to properly test asynchronous behavior.

## Configuration

### Vitest Config (`vitest.config.ts`)
- **Test Environment**: jsdom (simulates browser environment)
- **Coverage Provider**: v8
- **Coverage Include**: All `.ts` and `.tsx` files in `src/`
- **Coverage Exclude**: Test files, test directory, main.tsx, type definitions

### Path Aliases
Tests support the `@` alias for imports:
```typescript
import Component from "@/components/Component";
```

## Limitations & Known Issues

### Coverage Limitations
- **Only tested files appear in coverage**: Files without any tests may not appear in the coverage report unless explicitly included
- **Type-only files**: Files containing only TypeScript types/interfaces show 0% coverage (this is expected)
- **Third-party code**: Coverage excludes `node_modules` by default

### Testing Limitations
- **Real timers**: Tests use real timers, so async tests that depend on timeouts will take the actual time to complete
- **JSDOM limitations**: Some browser APIs may not be fully supported (e.g., ResizeObserver, IntersectionObserver)
- **Fluentui components**: Some complex UI components may require additional setup or mocking

### Comparing Coverage Between Branches

To compare coverage across Git branches:

1. **Save coverage from main branch:**
   ```bash
   git checkout main
   pnpm test:coverage
   cp coverage/lcov.info coverage-main.info
   ```

2. **Switch to feature branch and compare:**
   ```bash
   git checkout feature-branch
   pnpm test:coverage
   diff coverage-main.info coverage/lcov.info
   ```

3. **Alternative**: Use CI/CD tools like Codecov or Coveralls for automatic comparison

## Best Practices

1. **Write tests first** - Follow TDD when possible
2. **Test behavior, not implementation** - Focus on user interactions
3. **Use semantic queries** - Prefer `getByRole`, `getByLabelText` over `getByTestId`
4. **Avoid testing internal state** - Test what users see and do
5. **Keep tests isolated** - Each test should be independent
6. **Mock external dependencies** - API calls, timers, etc.
7. **Maintain high coverage** - Aim for >80% coverage on critical paths

## Troubleshooting

### Tests timeout
- Increase timeout in `waitFor` options: `{ timeout: 5000 }`
- Check if async operations are properly awaited

### Import errors
- Verify path alias configuration in `vitest.config.ts`
- Ensure test setup file is loaded properly

### Coverage not updating
- Clear coverage cache: `rm -rf coverage`
- Run tests with `--no-cache` flag

### Flaky tests
- Avoid relying on precise timing
- Use `waitFor` for async assertions
- Ensure proper test cleanup in `afterEach`

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)
- [Common Testing Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
