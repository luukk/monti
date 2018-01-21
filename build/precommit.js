"use strict";
const fs = require("fs");
const { exec, spawn } = require("child_process");
const ora = require("ora");
const chalk = require("chalk");

const config = require("../.prettierrc");

console.log(chalk.blue("running precommit hook..."));

Object.keys(config).map(key => {
    const child = spawn("prettier", formatConfig(config[key]));

    child.stdout.on("data", output => console.log(chalk.green(output)));

    child.on("exit", () => console.log(chalk.red(`finished formatting ${key}`)));
});

function formatConfig(config) {
    return Object.keys(config)
        .map(value => {
            let formattedValue = value.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
            return [`--${formattedValue}`, config[value]];
        })
        .reduce((prev, curr) => prev.concat(curr));
}
