# Install Yarn

`yarn` is a package manager that replaces the default `npm`. While both tools manage dependencies, `yarn` offers several advantages over `npm`:

- **Speed:** `yarn` installs packages faster due to parallel downloading and efficient caching.
- **Deterministic Installs:** `yarn` guarantees that installs are consistent across systems using a lockfile.
- **Better Dependency Management:** `yarn` handles dependencies more predictably, reducing issues with nested packages.

**Important:** Do **not** use `npm` for installing packages on the project level. We will be using `yarn` instead.

If you encounter an error related to an existing `package-lock.json` file, simply delete it. Mixing `npm` and `yarn` can lead to inconsistent dependencies and potential issues. Always use `yarn` for installing packages at the project level to avoid these problems.

To install `yarn` globally, run:

```bash
npm install yarn -g
```

You can confirm `yarn` was installed correctly by checking the version:

```bash
yarn -v
```