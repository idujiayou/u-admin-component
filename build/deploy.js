"use strict";
var inquirer = require('inquirer')
var chalk = require('chalk')
var shell = require("shelljs")
var { version } = require("../package.json")

function build() {
    inquirer
    .prompt([
        {
            name: 'confirm',
            message: `是否执行构建命令？`,
            type: 'list',
            default: 0,
            choices: [
                {
                    name: '是',
                    value: 1
                },
                {
                    name: '否',
                    value: 0
                }
            ]
        },
        {
            name: 'message',
            message: '构建说明',
            type: 'input',
            default: 'package'
        }
    ])
    .then(function(answers) {
        if (answers.confirm === 1) {
            try {
                deploy()
            } catch (error) {
                console.error(error)
                process.exit()
            }
        }
    })
}

/**
 * 执行构建
 */
function deploy() {
    console.log(chalk.green(`**************开始执行构建脚本************ `))
    if (shell.exec('yarn package').code !== 0) {
        shell.echo('Error: yarn package failed')
        shell.exit(1)
    }

    console.log()
    console.log(chalk.green(`**************组件库版本V${version}构建脚本执行成功************ `))
    console.log()

    // npm login
    login()
    // npm publish
    publish()
    process.exit()
}

/**
 * npm登录
 */
function login() {
    // 默认用户名
    var userName = 'liugenyuan';
    // 默认密码
    var password = '';
    var email = '';
    var inputArray = [
        userName + "\n",
        password + "\n",
        email + "\n",
    ]

    var child = shell.exec('npm login -registry http://mirror.devcloud.com/repository/NPM-repo-hosted/', { async: true })

    child.stdout.on('data', (chunk) => {
        var cmd = inputArray.shift();
        if (cmd) {
            console.log("input " + cmd);
            child.stdin.write(cmd);
        } else {
            child.stdin.end();
        }
    })

    console.log(chalk.green(`**************NPM用户${userName} 登录成功************ `))
}

/**
 * npm发布
 */
function publish() {
    shell.exec('npm publish -registry http://mirror.devcloud.com/repository/NPM-repo-hosted/')
    console.log(chalk.green(`**************组件库版本V${version} 发布成功************ `))
}

// 执行构建脚本
build()