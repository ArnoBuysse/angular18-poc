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
