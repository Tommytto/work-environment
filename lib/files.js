const path = require('path');
const fs = require('fs');
const {promisify} = require('util');

const copyFileFs = promisify(fs.copyFile);
const readFileFs = promisify(fs.readFile);
const writeFileFs = promisify(fs.writeFile);

function getCurrentDirectoryBase() {
    return path.basename(process.cwd);
}

function isDirectory(filePath) {
    try {
        return fs.statSync(filePath).isDirectory();
    } catch (e) {
        return false;
    }
}

function isFile(filePath) {
    try {
        return fs.statSync(filePath).isFile();
    } catch (e) {
        return false;
    }
}

async function copyFile(filePath, targetPath) {
    if (!isFile(filePath)) {
        return false;
    }
    try {
        await copyFileFs(filePath, targetPath);
    } catch (e) {
        return false;
    }

    return true;
}

function readFile(filePath) {
    if (!isFile(filePath)) {
        return false;
    }

    try {
        return readFileFs(filePath, 'utf8');
    } catch (e) {
        return false;
    }
}

function writeFile(filePath, content) {
    try {
        return writeFileFs(filePath, content);
    } catch (e) {
        return false;
    }
}

module.exports = {
    copyFile,
    getCurrentDirectoryBase,
    isDirectory,
    isFile,
    readFile,
    writeFile,
};
