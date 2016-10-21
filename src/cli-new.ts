#!/usr/bin/env node

import * as commander from 'commander'
import * as path from 'path'
import * as chalk from 'chalk'
import {exec} from 'child_process'
import {existsSync} from 'fs'

const projectSeedUrl: string = 'https://github.com/alonewalked/vue-vuex-2-cli.git'

commander
    .usage('<projectName>')

commander.parse(process.argv)

if (commander.args.length < 1) {
    commander.help()
    process.exit()
}

const projectName: string = commander.args[0]
const projectPath: string = path.resolve(projectName)

if (existsSync(projectPath)) {
    console.log(chalk.red('Target directory already exists.'))
    process.exit()
}

const cmd: string = `git clone ${projectSeedUrl} ${projectName} && rm -rf ${path.join(projectPath, '.git')}`

exec(cmd, (error, stdout, stderror) => {
    if (error) {
        console.log(error)
        process.exit()
    }

    console.log(chalk.green('√ Project generation success.'))
    console.log('To get started')
    console.log()
    console.log(`cd ${projectName}`)
    console.log('npm install')
    process.exit()
})
