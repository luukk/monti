"use strict";
require("./check-versions")();

process.env.NODE_ENV = "production";

const shell = require("shelljs");
const path = require("path");
const utils = require('./utils');
const webpack = require("webpack");
const config = require("../config");
const webpackConfig = require("./webpack.prod.conf");

utils.$log.info("building for production...");

shell.rm('-rf', path.join(config.build.assetsRoot, config.build.assetsSubDirectory));
webpack(webpackConfig, (err, stats) => {
    if (err) utils.$log.error(err);
    process.stdout.write(
        stats.toString({
            colors: true,
            modules: false,
            children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
            chunks: false,
            chunkModules: false
        }) + "\n\n"
    );

    if (stats.hasErrors()) {
        utils.$log.error("Build failed with errors.");
        process.exit(1);
    }

    utils.$log.info("Build complete.");
    utils.$log.warn("Tip: built files are meant to be served over an HTTP server. Opening index.html over file:// won't work.")
});
