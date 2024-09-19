#  Generate Web Components

https://buddy.works/tutorials/building-web-components-with-angular <br />
https://angular.dev/guide/elements

## Step 1: Install Angular Elements
```bash
yarn add @angular/elements
```

## Step 2: Generate an App

https://nx.dev/nx-api/angular/generators/application

```bash
nx g @nx/angular:application web-[prefix-name] --bundler=esbuild --directory=apps --routing=false --standalone=false --addTailwind=true --e2eTestRunner=none --inlineStyle=true --inlineTemplate=true --minimal=true --projectNameAndRootFormat=derived --style=scss --skipTests=true --ssr=false --unitTestRunner=none 
```

## Step 3: Move generated files

Move the 'app.module.ts' one folder up to 'src' and then delete the 'app' folder. Make sure to update the import in main.ts to use the new AppModule path.

## Step 4: Update the app.module.ts


```ts
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { UiCounterComponent } from '@poc/ui';

@NgModule({
  imports: [BrowserModule],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {

    // example code 
    const counterElement = createCustomElement(UiCounterComponent, {
      injector: this.injector,
    });
    // note: the custom element can't have the same tag as the component
    customElements.define('web-ui-counter', counterElement);
  }

  ngDoBootstrap() {
    console.log('Custom elements defined');
  }
}
```

## Step 5: Remove hashing on prod build
Here an example
```json
// project.json
{
  "projects": {
    "web-app": {
      "architect": {
        "build": {
          "configurations": {
            "production": {
              "outputHashing": "none"
            }
          }
        }
      }
    }
  }
}
```

## Step 6: Create a build script
```bash
yarn add fs-extra --dev
```

```js
const fs = require('fs-extra');

const buildFolderPath = './dist/apps/web-[prefix-name]/browser';
const newFolderPath = 'dist/apps/web-[prefix-name]/custom-elements';
const prefix = 'web-[prefix-name]';

const build = async () => {
  const files = [
    `${buildFolderPath}/polyfills.js`,
    `${buildFolderPath}/main.js`,
    `${buildFolderPath}/styles.css`,
  ];

  await fs.ensureDir(`${newFolderPath}`);

  for (const file of files) {
    const fileName = file.split('/').pop();
    await fs.copyFile(file, `${newFolderPath}/${prefix}-${fileName}`);
  }

  console.log(`Files have been copied to ${newFolderPath}`);
};

build();
```

Add the build script to the package.json.
```json
{
  "scripts": {
    "web-[prefix-name]:build": "yarn nx run web-[prefix-name]:build --configuration=production && node apps/web-[prefix-name]/build.js"
  }
}
```

## Test Locally

```bash
npm install -g serve
```

Copy all files to a folder where you would like to test it including an html that looks something like this

```html
<!DOCTYPE html>
<html lang="en" data-critters-container>

<head>
    <meta charset="utf-8">
    <title>web-components</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="web-[prefix-name]-styles.css" media="print" onload="this.media='all'">
    <noscript>
        <link rel="stylesheet" href="web-[prefix-name]-styles.css">
    </noscript>
</head>

<body>
    <web-ui-counter id="counter" title="test"></web-ui-counter>

    <script>
        const counterElement = document.getElementById('counter');

        counterElement.addEventListener('updateCounter', (event) => {
            console.log('Counter updated to:', event.detail);
        });
    </script>
    <script src="web-[prefix-name]-polyfills.js" type="module"></script>
    <script src="web-[prefix-name]-main.js" type="module"></script>
</body>

</html>
```

then navigate to the folder by terminal and run:

```bash
serve
```