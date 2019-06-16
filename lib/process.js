const childProcess = require('child_process');
const {promisify} = require('util');

const execChildProcess = promisify(childProcess.exec);

module.exports = {
    execChildProcess,
};
