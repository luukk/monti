// 1. start the dev server using production config
process.env.NODE_ENV = "testing";

const webpack = require("webpack");
const DevServer = require("webpack-dev-server");
const spawn = require("cross-spawn");
const utils = require('../../build/utils');

const webpackConfig = require("../../build/webpack.prod.conf");
const devConfig = require("../../build/webpack.dev.conf");

let server;

    const devServerOptions = devConfig.devServer;
    const compiler = webpack(webpackConfig);
    server = new DevServer(compiler, devServerOptions);

    const port = devServerOptions.port;
    const host = devServerOptions.host;

    server.listen(port, host, function(){
        utils.$log.info('testing server running...')

        let opts = process.argv.slice(2);
        if (opts.indexOf("--config") === -1) {
          opts = opts.concat(["--config", "test/e2e/nightwatch.conf.js"]);
        }
        if (opts.indexOf("--env") === -1) {
          opts = opts.concat(["--env", "chrome"]);
        }

        const runner = spawn("./node_modules/.bin/nightwatch", opts, {
          stdio: "inherit"
        });

        runner.on("exit", function(code) {
          server.close();
          process.exit(code);
        });

        runner.on("error", function(err) {
          server.close();
          utils.$log.error(err)
        });
    })
