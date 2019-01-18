#!/usr/bin/env node

const program = require('commander');
const path = require('path');
const { download } = require('./init');
const chalk = require('chalk');

program
  .version('1.0.0');

program
  .command('init')
  .option('-d, --directory', 'the initial components directory')
  .action(function (dir, cmd) {
    const directory = cmd.directory;
    if (!directory || !dir) {
      console.error(chalk.red('the directory param is missing!'));
      return;
    }
    const targetDir = path.resolve(process.cwd(), dir);
    // ensureFile(targetDir);
    download(targetDir).then(() => {}, (err) => { throw err }).catch(error => {
      console.error('download the template error!');
      console.error(error);
    });
  });

program.parse(process.argv);