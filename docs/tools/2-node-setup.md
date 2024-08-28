# Node Setup 

## Step 1: Install `nvm` (Node Version Manager)
`nvm` allows you to easily switch between multiple versions of Node.js.

### Installation

You can install `nvm` by running the following command in your terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v[latest-version]/install.sh | bash
```

Find the latest version here: [nvm documentation](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

After the installation is complete, you need to restart your terminal.

To verify that `nvm` is installed, run:

```bash
nvm --version
```

## Step 2: Install Node

Use `nvm` to install and use the latest LTS (Long Term Support) version of Node.js:

```bash
nvm install --lts
nvm use --lts
```

You can confirm that the correct version of Node.js is being used:

```bash
node -v
```

The LTS version is typically the most stable and recommended version for most production environments.
