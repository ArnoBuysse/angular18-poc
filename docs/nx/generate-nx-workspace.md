#  Generate Nx Workspace

Official Guide: https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial

```bash
npx create-nx-workspace@latest poc-workspace \
  --preset=angular-monorepo \
  --interactive=false \
  --workspaceType=integrated \
  --appName=poc-app \
  --style=scss \
  --standaloneApi=true \
  --routing=true \
  --bundler=esbuild \
  --framework=angular \
  --docker=true \
  --e2eTestRunner=cypress \
  --ssr=true \
  --prefix=poc-app \
  --packageManager=yarn \
  --nxCloud=skip \
  --ci=skip

```
**Hint:** Replace `repo-name` with your desired repository name.

**Command Options Breakdown:**
- `npx create-nx-workspace@latest [repo-name]`: Creates a new Nx workspace
- `--preset=angular-monorepo`: Uses the Angular monorepo preset for the workspace.
- `--interactive=false`: Disables interactive mode to avoid prompts.
- `--workspaceType=integrated`: Creates an integrated workspace type.
- `--appName=[app-name]`: Names the initial Angular application 'poc-app'.
- `--style=scss`: Uses SCSS as the stylesheet language.
- `--standaloneApi=true`: Uses Angular Standalone Components API.
- `--routing=true` : Adds routing setup to the Angular application.
- `--bundler=esbuild`: Uses Esbuild as the bundler.
- `--framework=angular`: Specifies Angular as the framework.
- `--docker=true`: Generates a Dockerfile for the application.
- `--e2eTestRunner=cypress` : Sets Cypress as the end-to-end test runner.
- `--ssr=true`: Enables server-side rendering (SSR) for the Angular application.
- `--prefix=[app-name]`: Sets 'poc-app' as the prefix for Angular components and directives.
- `--packageManager=yarn`: Uses Yarn as the package manager.
- `--nxCloud=skip`: Skips Nx Cloud integration.
- `--ci=skip`: Skips Cl integration.