#!/usr/bin/env node

import * as commander from 'commander'

commander
    .version(require('../package.json').version)
    .usage('<command> <options>')
    .command('new', 'generate a new project')
    .parse(process.argv)
