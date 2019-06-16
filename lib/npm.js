const {packageFilePath} = require('./constants');
const {execChildProcess} = require('./process');
const {readFile} = require('./files');

async function setupDependencies(dependencyList) {
    const config = await readFile(packageFilePath);
    const configJSON = JSON.parse(config);
    const promiseList = [];
    dependencyList.forEach((dependency) => {
        promiseList.push(execChildProcess(`npm show ${dependency} version`));
    });
    const promiseListResult = await Promise.all(promiseList);
    const dependencyVersionList = promiseListResult.map(({stdout}) => stdout.replace('\n', ''));
    dependencyList.forEach((dependency, index) => {
        if (configJSON.devDependencies) {
            configJSON.devDependencies = {};
        }
        configJSON.devDependencies[dependency] = dependencyVersionList[index];
    });
}

module.exports = {
    setupDependencies,
};
