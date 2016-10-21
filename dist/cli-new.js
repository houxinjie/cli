#!/usr/bin/env node
"use strict";
var commander = require('commander');
var path = require('path');
var chalk = require('chalk');
var child_process_1 = require('child_process');
var fs_1 = require('fs');
var ora = require('ora');
var projectSeedUrl = 'https://github.com/alonewalked/vue-vuex-2-cli.git';
commander
    .usage('<projectName>');
commander.parse(process.argv);
if (commander.args.length < 1) {
    commander.help();
    process.exit();
}
var projectName = commander.args[0];
var projectPath = path.resolve(projectName);
if (fs_1.existsSync(projectPath)) {
    console.log(chalk.red('Target directory already exists.'));
    process.exit();
}
var cmd = "git clone " + projectSeedUrl + " " + projectName + " && rm -rf " + path.join(projectPath, '.git');
var spinner = ora('downloading template');
spinner.start();
child_process_1.exec(cmd, function (error, stdout, stderror) {
    spinner.stop();
    if (error) {
        console.log(error);
        process.exit();
    }
    console.log(chalk.green('√ Project generation success.'));
    console.log('To get started');
    console.log();
    console.log("cd " + projectName);
    console.log('npm install');
    process.exit();
});
//# sourceMappingURL=cli-new.js.map