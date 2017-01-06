var execSync = require('child_process').execSync;
var fs = require('fs');
var node_modules = './node_modules/';
var pathBase = node_modules + '.bin/';
var buildDest= './build';
var tscCommand = 'tsc';
var tscPackage = 'typescript';
var args = process.argv;

process.stdout.write('clean mode activated...\n\n');
removeFolder(buildDest, true);
process.stdout.write('\n');

if(!isTypeScriptInstalledLocally()) {
    installPackage('typescript', true);
    process.stdout.write('\n');
}

executeTsCompiler();


/***************************************** HELPER FUNCTIONS   *****************************************/

/**
 * Checks whether the typescript package is installed locally or not
 * @returns true if package installed or else false
 */
function isTypeScriptInstalledLocally() {
    process.stdout.write('Checking if typescript installed...\n');
    try {
        execSync(pathBase + tscCommand + ' --version');
        process.stdout.write('Typescript is installed\n\n');
        return true;
    } catch(e) {
        process.stdout.write('Typescript is not installed\n\n');
        return false;
    }
}



/**
 * Installs node package via npm with dev dependencies
 * @param packageName - Node package name
 */
function installPackage(packageName, isDev) {
    process.stdout.write('Installing ' + packageName + ' package\n');
    execSync('npm install ' + (isDev ? '--save-dev' : '--save') + ' ' + packageName);
    process.stdout.write(packageName + ' package installed\n\n');
}

/**
 * Execute typescript compiler
 */
function executeTsCompiler() {
    if(isWatchMode()) {
        process.stdout.write('Typescript compiler started with watch mode...\n\n');
        execSync(pathBase + tscCommand + ' --watch --sourceMap');
    } else {
        //Default option when running without arguments
        process.stdout.write('Typescript compiler started\n\n');
        execSync(pathBase + tscCommand);
        process.stdout.write('Typescript compiler finished\n\n');
    }
}

/**
 * Return the watch mode state
 * @returns true if watch mode enabled or else false
 */
function isWatchMode() {
    return checkArgumentExist('--watch');
}


/**
 * Check whether the argument exist
 * @param someArg - Some argument
 * @returns true if argument is exist in the arguments list
 */
function checkArgumentExist(someArg) {
    if(args.indexOf(someArg) != -1) {
        return true;
    } else {
        return false;
    }
}

/**
 * Remove Folder (The Node.js way)
 * @param path - Directory path
 * @param showConsole - for progress
 */
function removeFolder(path, showConsole) {
    if(showConsole) {
        process.stdout.write('\n-----------------------\n');
        process.stdout.write('Removing ' + path + ' folder\n');
    } else {
        process.stdout.write('.');
    }
    
    if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.lstatSync(curPath).isDirectory()) { // recurse
                removeFolder(curPath, false);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}
