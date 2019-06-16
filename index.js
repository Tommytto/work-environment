#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const {askAction, ACTION} = require('./lib/inquirer');
const {setupLinter} = require('./src/linting/linting');

clear();
// Start
console.log(chalk.blue(figlet.textSync('WorkEnv', {horizontalLayout: 'full'})));
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
