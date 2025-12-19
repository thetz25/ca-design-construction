# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
- `npm run dev` - Run the application in development mode with hot-reload via ts-node
- `npm run build` - Compile TypeScript to JavaScript in the `dist/` directory
- `npm run type-check` - Check for TypeScript errors without emitting files

### Testing
- `npm test` - Run all tests once
- `npm run test:watch` - Run tests in watch mode (re-runs on file changes)
- `npm run test:coverage` - Run tests with coverage report

### Linting
- `npm run lint` - Check for code style issues
- `npm run lint:fix` - Automatically fix code style issues

## Project Structure

```
src/
├── index.ts          # Application entry point
├── __tests__/        # Test files (co-located with source)
└── [feature]/        # Organize code by feature
    ├── module.ts
    └── module.test.ts

dist/                 # Compiled JavaScript output (generated, not in git)
```

## Architecture Notes

### Build System
- **TypeScript**: Strict mode enabled for type safety. Output target is ES2020
- **Test Framework**: Jest with ts-jest preset for TypeScript support
- **Linting**: ESLint with TypeScript plugin for consistent code style

### Directory Organization
Code is organized by feature in the `src/` directory. Tests are co-located with source files using the `.test.ts` or `.spec.ts` naming convention and placed in `__tests__/` subdirectories.

### Configuration Files
- `tsconfig.json` - TypeScript compilation settings
- `jest.config.js` - Jest testing configuration
- `.eslintrc.json` - ESLint code style rules
- `package.json` - Dependencies and npm scripts

## Development Workflow

1. Make changes in `src/`
2. Tests run automatically in watch mode during development
3. Use `npm run lint:fix` to maintain code style before committing
4. Run `npm run type-check` to verify TypeScript compilation before building
5. Run `npm run build` to create production artifacts in `dist/`
