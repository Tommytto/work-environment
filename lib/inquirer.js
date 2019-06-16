const inquirer = require('inquirer');

const ACTION = {
    HOOKER: 'hooker',
    INIT_GIT: 'init git repository',
    LINTER: 'linter',
};
function askAction() {
    const optionsList = [
        {
            choices: [
                {
                    name: 'Add linter',
                    value: ACTION.LINTER,
                },
                {
                    name: 'Add git hooks with code style checking',
                    value: ACTION.HOOKER,
                },
                {
                    name: 'Create git repository',
                    value: ACTION.INIT_GIT,
                },
            ],
            message: 'Select actions',
            name: 'settingsList',
            type: 'checkbox',
        },
    ];

    return inquirer.prompt(optionsList);
}

module.exports = {
    ACTION,
    askAction,
};
