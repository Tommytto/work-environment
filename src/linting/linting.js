const {copyFile} = require('../../lib/files');
const {setupDependencies} = require('../../lib/npm');
const path = require('path');
const chalk = require('chalk');

const eslintConfigFilename = '.eslintrc.js';
const eslintConfigPath = `./docs/${eslintConfigFilename}`;

const sourcePath = path.resolve(__dirname, eslintConfigPath);
const targetPath = path.resolve(process.cwd(), eslintConfigFilename);

const dependencies = ['@work-environment/eslint-config'];

async function setupLinter() {
    const isSuccess = await copyFile(sourcePath, targetPath);
    if (!isSuccess) {
        console.log(chalk.red('Something went wrong!'));
        return false;
    }

    await setupDependencies(dependencies);
    console.log(chalk.green('Linter config successfully created'));
    return true;
}

module.exports = {
    setupLinter,
};
