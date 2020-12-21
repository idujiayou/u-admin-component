var inquirer = require('inquirer')
var chalk = require('chalk')
var { version } = require("../package.json")
var fs = require("fs")
var path = require("path")

/**
 * 更新版本
 * 末位版本号
 * 规则：默认+1
 */
function updateVersion(num = 1) {
    let versionArr = version.split('.')
    var patchVersion = Number(versionArr[versionArr.length - 1]) + num
    return [versionArr[0], versionArr[1], patchVersion].join('.')
}

/**
 * 修改版本号
 */
function changeVersion(version) {
    const pkgPath = path.join(__dirname, "./../package.json")
    let pkg = fs.readFileSync(pkgPath)
    pkg = JSON.parse(pkg)
    pkg.version = version
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 4))
    console.log(chalk.green(`**************修改版本号成功: ${version}************ `));
}

inquirer
    .prompt([
        {
            name: 'version',
            message: '新版本号',
            type: 'input',
            default: `${updateVersion()}`
        }
    ])
    .then(function(answers) {
        console.log(chalk.green(`**************新版本号: ${answers.version}************ `));
        try {
            changeVersion(answers.version)
        } catch (error) {
            console.error(error)
            process.exit()
        }
    })