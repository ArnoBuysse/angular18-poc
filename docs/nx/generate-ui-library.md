# Generate UI Library

## Step 1: Generate a New UI Library

To create a new UI library within your Nx workspace, follow the steps below:

1. Refer to the official Nx documentation for more details: [Nx Angular Library Generator](https://nx.dev/nx-api/angular/generators/library).

2. Run the following command to generate a buildable, publishable library with Tailwind, Storybooks and other recommended settings:

   ```bash
   nx generate @nx/angular:library --name=[lib-name] --buildable=true --directory=libs --publishable=true --addTailwind=true --importPath=@[your-company]/[lib-name] --prefix=[lib-name] --standalone=true --style=scss --displayBlock=true --strict=true --skipTests=true --no-interactive
   ```

   **Hint:** Replace `lib-name` with your desired library name and `@your-company` with your organization or project’s namespace.

   **Command Options Breakdown:**

   - `--name=lib-name`: Sets the library name.
   - `--buildable=true`: Allows the library to be built independently.
   - `--directory=libs`: Adds the library to the libs folder.
   - `--publishable=true`: Enables publishing the library as an npm package.
   - `--addTailwind=true`: Adds Tailwind CSS configuration.
   - `--importPath=@your-company/lib-name`: Defines the import path for the library.
   - `--prefix=lib-name`: Sets a consistent component prefix.
   - `--standalone=true`: Generates standalone components.
   - `--style=scss`: Sets SCSS as the styling format.
   - `--displayBlock=true`: Forces components to default to `display:P block`.
   - `--strict=true`: Enforces strict TypeScript rules.
   - `--skipTests=true`: Skips generating test files.
   - `--no-interactive`: Disables interactive prompts for streamlined execution.

## Step 2: Rename the `lib` Folder to `components`

After generating the library, update the folder structure by renaming the `lib` folder to `components`:

## Step 3: Adding Storybook

For the setup of storybook follow the instuctions from 'add-storybook.md'.

## Step 4 Delete the example component in the components folder

The exampel component named after the libary folder can be deleted after adding the first componet.

## Info: Adding new components

**Keep the following points in mind when adding new components:**

```scss
// Including :host { display: block; } in each Angular component’s SCSS ensures consistent and predictable layout behavior by preventing components from defaulting to inline display, which can cause layout issues.

:host {
  display: block;
}
```

```ts
// Using standalone: true in Angular allows components to be self-contained, simplifying modularity and reducing unnecessary dependencies.

// Also the new Angular 18 *if and *for structural directives provide better syntax, enhanced type safety, and improved performance over traditional *ngIf and *ngFor. So no need to import the CommonModule

@Component({
    ...
    standalone: true,
    imports: [],
    ...
})
```
