## Install Husky and Lint Staged

```bash
yarn add husky lint-staged --dev
```

## Setup Husky Auto-Install on yarn install

To automatically run husky install after every package installation via Yarn:

Open package.json.

Add the following under the "scripts" section:

```json
{
  "scripts": {
    "postinstall": "npx husky install"
  }
}
```

Now run

```bash
yarn postinstall
```

## Setup Lint Staged

Open .husky/pre-commit and replace all the content with this line:

```txt
npx lint-staged
```

Now open package.json and add following scripts.

```json
"lint-staged": {
    "**/*": "prettier --write --ignore-unknown",
    "**/*.{ts,tsx,js,jsx}": [
      "prettier --write --ignore-unknown",
      "eslint --fix"
    ],
    "!(**/*.{ts,tsx,js,jsx})": "prettier --write --ignore-unknown"
}
```
