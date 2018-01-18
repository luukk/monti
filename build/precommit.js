"use strict";
const fs = require("fs");
const { exec } = require("child_process");
const ora = require("ora");
const spinner = ora("running precommit hook...");

const config = require("../.prettierrc");

spinner.start();

Object.keys(config).map(key => {
  const { extensions, ...rest } = config[key];
  exec(
    "prettier '**/*.js' --config .prettierrc.js --write {{changed}} ",
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  );

  console.log("tst", rest);
});
//
// const text = fs.readFileSync("src/components/HelloWorld.vue", "utf8");
// console.log(text);
// const input = prettier.resolveConfig.sync(".prettierrc.json")
// const formatted = prettier.format('**/*.js', input);
