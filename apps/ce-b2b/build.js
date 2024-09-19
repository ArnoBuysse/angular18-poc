const fs = require('fs-extra');

const buildFolderPath = './dist/apps/ce-b2b/browser';
const newFolderPath = 'dist/apps/ce-b2b/custom-elements';
const prefix = 'ce-b2b';

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
