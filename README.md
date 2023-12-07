# 99Track Front

Welcome to the **99Track-front** development environment setup guide. This document provides comprehensive instructions to facilitate a smooth and consistent setup across various development environments.

## Prerequisites

### Node.js

We use [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) to ensure a consistent Node.js version. Install NVM and set the Node.js version for this project with :

```bash
nvm install
```

### Yarn

Yarn is the package manager of choice for this project. Make sure you are using Node.js 20 _(lts/iron)_ and then activate `corepack` to use Yarn :

```bash
corepack enable
```

### Visual Studio Code

Consistency in TypeScript versions is crucial. For VSCode users, ensure that you [use the workspace version of TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript) and not the built-in version provided by VSCode.

### Optional: Optimized VSCode Configuration

For an enhanced development experience with project-specific editor settings, duplicate `.vscode.sample` as `.vscode` :

```bash
cp -R .vscode.sample .vscode
```

## Getting Started

Ensure that you follow the sections below in sequence to set up your development environment without issues.
Documentation is provided to guide you through the major setup steps.

### Environment Configuration

Initiate by setting up environment variables. Duplicate `.env.local.sample` as `.env.local`:

```bash
cp .env.local.sample .env.local
```

Amend `.env.local` with your specific configurations.

### Dependency Installation

Install necessary project dependencies :

```bash
yarn install
```

## Running the Application

Execute the app in various modes using :

```bash
# Development mode
$ yarn run dev

# Production mode
$ yarn run start
```



