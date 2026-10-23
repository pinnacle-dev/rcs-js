# Contributing

Thanks for your interest in contributing to this SDK! This document provides guidelines for contributing to the project.

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm package manager

### Installation

Install the project dependencies:

```bash
pnpm install
```

### Building

Build the project:

```bash
pnpm build
```

### Testing

Run the test suite:

```bash
pnpm test
```

Run specific test types:
- `pnpm test:unit` - Run unit tests
- `pnpm test:wire` - Run wire/integration tests

### Linting and Formatting

Check code style:

```bash
pnpm run lint
pnpm run format:check
```

Fix code style issues:

```bash
pnpm run lint:fix
pnpm run format:fix
```

Or use the combined check command:

```bash
pnpm run check:fix
```

## About Generated Code

**Important**: Most files in this SDK are automatically generated from Pinnacle's API definition by the repository-owned SDK pipeline. Direct modifications to generated files will be overwritten the next time the SDK is generated.

### Generated Files

The following directories contain generated code:
- `src/api/` - API client classes and types
- `src/serialization/` - Serialization/deserialization logic
- Most TypeScript files in `src/`

### How to Customize

If you need to customize the SDK, you have two options:

#### Option 1: Use `.fernignore`

For custom code that should persist across SDK regenerations:

1. Create a `.fernignore` file in the project root
2. Add file patterns for files you want to preserve (similar to `.gitignore` syntax)
3. Add your custom code to those files

Files and patterns listed in `.fernignore` will not be overwritten when the SDK is regenerated.

#### Option 2: Change the Generator

If you want to change how code is generated for all users of this SDK:

1. Open an issue in this repository describing the generator-wide change.
2. Pinnacle maintainers update the private generator source and generation workflow.
3. The regenerated SDK is reviewed and tested in this repository before release.

This approach is best for:
- Bug fixes in generated code
- New features that would benefit all users
- Improvements to code generation patterns

## Making Changes

### Workflow

1. Create a new branch for your changes
2. Make your modifications
3. Run tests to ensure nothing breaks: `pnpm test`
4. Run linting and formatting: `pnpm run check:fix`
5. Build the project: `pnpm build`
6. Commit your changes with a clear commit message
7. Push your branch and create a pull request

### Commit Messages

Write clear, descriptive commit messages that explain what changed and why.

### Code Style

This project uses automated code formatting and linting. Run `pnpm run check:fix` before committing to ensure your code meets the project's style guidelines.

## Questions or Issues?

If you have questions or run into issues:

1. Search existing issues in this repository.
2. Open a new issue if your question has not been addressed.

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.
