# Add Storybook

## Step 1: Generate Storybook configuration

First, generate the Storybook configuration by running the following Nx command:
```bash
yarn add storybook

nx g @nx/angular:storybook-configuration [library-name]
```

## Step 2: Add Compdoc
Compodoc generates detailed documentation for your Angular components, while enabling autodocs in Storybook automatically integrates this documentation into Storybook, allowing you to view up-to-date component details directly in your Storybook UI. This setup ensures your documentation is always current and easily accessible.

To install Compodoc, run:
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

## Step 5: Setup Auto Generation of Compodoc

Install nodemon: If you haven’t installed it yet, add nodemon to your project:
```bash
yarn add nodemon --dev
```

Update package.json: Add a watch-compodoc script to your package.json that uses nodemon to watch your source files and trigger Compodoc when changes are detected:
```json
"scripts": {
    "[library-name]:watch-compodoc": "nodemon --watch 'libs/[library-name]/src/**/*.ts' --exec 'npx compodoc -p libs/[library-name]/tsconfig.json -e json -d libs/[library-name]' --ext ts"
}
```

Run Both Storybook and Compodoc in Parallel: Now, use concurrently to run both Storybook and Compodoc watcher at the same time:

First, install concurrently (if you don’t have it already):
```bash
yarn add concurrently --dev
```

Then, update your package.json to run both Storybook and Compodoc simultaneously and add the normal build script:
```json
"scripts": {
  "[library-name]:storybook": "concurrently \"yarn nx run [library-name]:storybook\" \"yarn [library-name]:watch-compodoc\"",
  "[library-name]:build-storybook": "yarn nx run ui:build-storybook"
}
```

## Step 6: Update the .gitignore
Add the **documentation.json** to the gitignore file.

```.gitignore
# Compodoc Files
libs/[library-name]/documentation.json
```

## Note

Make sure to add this line when adding new storybook files for typechecking.

```ts
// Button Example
const meta: Meta<UiButtonComponent> = {
  component: UiButtonComponent,
  title: 'Button',
} satisfies Meta<typeof UiButtonComponent>; // this line
```
