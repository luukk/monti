"use strict";

const { readdirSync, readFileSync, writeFileSync, lstatSync } = require("fs");
const path = require("path");
const prettier = require("prettier");
const utils = require("./utils");
const config = require("../.prettierrc");

utils.$log.warn("running precommit hook...");

const formatFiles = ({ write, extensions, options }) => {
    return findfiles(write).map(filePath => {
        if (!checkExtension(filePath, extensions)) return;

        const file = readFileSync(filePath, { encoding: "utf-8" });
        const formattedFile = prettier.format(file, options);

        writeFileSync(filePath, formattedFile, { encoding: "utf-8", flag: "w" });

        return filePath;
    })
}

const findfiles = write => {
    if (!lstatSync(write).isDirectory()) return write;

    return readdirSync(write)
        .map(f => findfiles(path.join(write, f)))
        .reduce((prev, curr) => prev.concat(curr), []);
};

const checkExtension = (filename, extensions) => {
    return extensions
        .map(extension => {
            const fileExtension = filename.substr(filename.lastIndexOf('.'));

            return fileExtension == extension
        })
        .includes(true);
}

Object.keys(config).map(key => {
    return formatFiles(config[key])
        .filter(Boolean)
        .map(formattedFile => utils.$log.info(formattedFile));
});
