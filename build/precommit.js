"use strict";

const { readdirSync, readFileSync, writeFileSync, lstatSync } = require("fs");
const path = require("path");
const prettier = require("prettier");
const chalk = require("chalk");
const log = require("bunyan").createLogger({ name: "precommit hook" });

const config = require("../.prettierrc");

log.trace("running precommit hook...");

const formatFiles = ({ write, extensions, options }) =>
    findfiles(write).map(filePath => {
        if (!checkExtension(filePath, extensions)) return;

        const file = readFileSync(filePath, { encoding: "utf-8" });
        const formattedFile = prettier.format(file, options);

        writeFileSync(filePath, formattedFile, { encoding: "utf-8", flag: "w" });

        return filePath
    });

const findfiles = write => {
    if (!lstatSync(write).isDirectory()) return write;

    return readdirSync(write)
        .map(f => findfiles(path.join(write, f)))
        .reduce((prev, curr) => prev.concat(curr), []);
};

const checkExtension = (filename, extensions) =>
    extensions
        .map(extension => {
            return extension == filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 1);
        })
        .includes(true);

Object.keys(config).map(key => log.info(formatFiles(config[key])));
