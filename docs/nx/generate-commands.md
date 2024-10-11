# Generate Commands

## Generate Components

https://nx.dev/nx-api/angular/generators/component

### Step 1: Generate files

```bash
nx g @nx/angular:component [component-name] --project=[library-name] --directory=libs/ui/src/components --standalone --style=scss --skipTests --changeDetection=OnPush --displayBlock=true

nx g @nx/angular:stories --project=[library-name]
```

### Step 2: Remove CommonModule

Remove this line form the component file. Angular 18 uses @if, @for and @switch.

```ts
imports: [CommonModule];
```
