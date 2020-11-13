/**
 * @file        : verifyCommit.js
 * @description : Invoked on the commit-msg git hook by husky
 * @author      : YanXianPing
 * @creatTime   : 2020/11/10 18:15
 */
const chalk = require('chalk');
const fs = require('fs');

const commitMsg = fs.readFileSync(process.env.HUSKY_GIT_PARAMS, 'utf-8').trim();
const commitRegExp = /^(revert: )?(feat|fix|docs|style|test|perf|refactor|ci|chore|wip|dev|build|release)(\(.+\))?: .{1,60}/;

if (!commitRegExp.test(commitMsg)) {
    console.error(`
        ${chalk.bgRed.white(' ERROR ')}${chalk.red('invalid commit message format.')}\n
        ${chalk.red(' Proper commit message format is required for automated changelog generation. For examples:')}\n
        ${chalk.green('     feat(toast): add "comments" options')}\n
        ${chalk.red(' See https://github.com/npm-uis/yui/tree/main/.github/commit-convention.md for more details.')}\n
    `);
    process.exit(1);
}
