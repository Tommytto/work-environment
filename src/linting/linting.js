const {copyFile} = require('../../lib/files');
const path = require('path');
const chalk = require('chalk');

const eslintConfigFilename = '.eslintrc.js';
const eslintConfigPath = `./docs/${eslintConfigFilename}`;

const sourcePath = path.resolve(__dirname, eslintConfigPath);
const targetPath = path.resolve(process.cwd(), eslintConfigFilename);

async function setupLinter() {
    const isSuccess = await copyFile(sourcePath, targetPath);
    if (!isSuccess) {
        console.log(chalk.red('Something went wrong!'));
    } else {
        console.log(chalk.green('Linter successfully installed'));
    }
}

module.exports = {
    setupLinter,
};
