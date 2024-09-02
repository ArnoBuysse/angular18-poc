# Add Storybook

## Step 1: Generate Storybook configuration

First, generate the Storybook configuration by running the following Nx command:
```bash
nx g @nx/angular:storybook-configuration [library-name]
```

## Step 2: Add Compdoc
Compodoc is a documentation tool for Angular applications. To install Compodoc, run:
```bash
yarn add @compodoc/compodoc --dev
```

Then follow the offical Compodoc-Set-Up-Guide: 
https://nx.dev/recipes/storybook/angular-storybook-compodoc 


```ts
// File: .storybook/tsconfig.json

{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "emitDecoratorMetadata": true,
  },
  "exclude": ["../**/*.spec.ts"],
  "include": [
    "../src/**/*.stories.ts",
    "../src/**/*.stories.js",
    "../src/**/*.stories.jsx",
    "../src/**/*.stories.tsx",
    "../src/**/*.stories.mdx",
    "*.js",
    "*.ts",
    "../src/**/*.ts" // Add this line
  ]
}
```

For the compodocArgs use:
```json
"compodocArgs": ["-e", "json", "-d", "libs/[library-name]"]
```

```ts
// File: .storybook/preview.ts

import { setCompodocJson } from '@storybook/addon-docs/angular';

let docJson: unknown;
try {
  docJson = require('../documentation.json');
} catch (error) {
  console.warn(
    'Compodoc documentation.json not found, will be generated at runtime.'
  );
  docJson = {};
}

setCompodocJson(docJson);
```


## Step 4: Enable Auto Docs

```ts
// File: .storybook/main.ts

const config: StorybookConfig = {
  stories: ['../**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  docs: {
    autodocs: true, // Add this line
  },
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};
```

### Why use Compodoc with Storybook?
Compodoc generates detailed documentation for your Angular components, while enabling autodocs in Storybook automatically integrates this documentation into Storybook, allowing you to view up-to-date component details directly in your Storybook UI. This setup ensures your documentation is always current and easily accessible.

## Step 3: Update the .gitignore
Add the **documentation.json** to the gitignore file.

```.gitignore
# Compodoc Files
libs/[library-name]/documentation.json
```

## Run Storybook
You can run Storybook for a specific library using the following command:
```bash
yarn nx run [library-name]:serve:storybook 
```

To make this process easier, you can add a shortcut in your global `package.json`. For example, you could create a script called storybook for your library:

```json
"scripts": {
  "storybook:[library-name]": "yarn nx run [library-name]:serve:storybook"
}
```

## Know Issue
Compodoc files are generated when you first run the Storybook command. However, if you make changes to a file, Storybook updates but the Compodoc documentation does not. To refresh the documentation, you need to stop and restart the Storybook server. We're currently exploring ways to automate this process for smoother updates.