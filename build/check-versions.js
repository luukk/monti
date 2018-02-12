"use strict";
const semver = require("semver");
const packageConfig = require("../package.json");
const utils = require('./utils');
const shell = require("shelljs");

function exec(cmd) {
    return require("child_process")
        .execSync(cmd)
        .toString()
        .trim();
}

const versionRequirements = [
    {
        name: "node",
        currentVersion: semver.clean(process.version),
        versionRequirement: packageConfig.engines.node
    }
];

if (shell.which("npm")) {
    versionRequirements.push({
        name: "npm",
        currentVersion: exec("npm --version"),
        versionRequirement: packageConfig.engines.npm
    });
}

module.exports = function() {
    const warnings = [];

    for (let i = 0; i < versionRequirements.length; i++) {
        const mod = versionRequirements[i];

        if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
            warnings.push(
                utils.$log.error(mod.name +": " + mod.currentVersion + " should be " + mod.versionRequirement)
            );
        }
    }

    if (warnings.length) {
        utils.$log.warn("To use this template, you must update following to modules:");

        for (let i = 0; i < warnings.length; i++) {
            const warning = warnings[i];
            utils.$log.warn(warning)
        }
        process.exit(1);
    }
};
