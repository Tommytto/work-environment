#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const yargs = require('yargs');
const {askAction, ACTION} = require('./lib/inquirer');
const {setupLinter} = require('./src/linting/linting');

// Start
// console.log(chalk.blue(figlet.textSync('workio', {horizontalLayout: 'full'})));
const actionConfig = {
    [ACTION.LINTER]: setupLinter,
};
askAction().then(async ({settingsList}) => {
    for (let i = 0; i < settingsList.length; i++) {
        const settingName = settingsList[i];
        const operation = actionConfig[settingName];
        operation();
    }
});
