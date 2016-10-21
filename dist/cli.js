#!/usr/bin/env node
"use strict";
var commander = require('commander');
commander
    .version(require('../package.json').version)
    .usage('<command> [options]')
    .command('new <projectName>', 'generate a new project')
    .parse(process.argv);
//# sourceMappingURL=cli.js.map