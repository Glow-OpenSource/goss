#!/usr/bin/env node
process.env.name = require("../package.json").name;
process.env.version = require("../package.json").version;
process.env.cli = Object.keys(require("../package.json").bin)[0];

(function () {
  var cmds = Object.keys(require("./cmd/help.js").cmds());
  var argv = process.argv.slice(2);
  var cmd = (function (it) {
    switch (it) {
      case "-v":
        return "version";
      case "ver":
        return "version";
      case "--version":
        return "version";
      case "--ver":
        return "version";
      case "-h":
        return "help";
      case "--help":
        return "help";
      case "-help":
        return "help";
      case "i":
        return "install";
      case "about":
        return "version"; //"info";
      case "info":
        return "version";
      case "p":
        return "pack";
      default:
        return it;
    }
  })(argv.shift());
  if (cmds.indexOf(cmd) > -1) {
    require(`./cmd/${cmd}`)(cmd, argv, cb);
  } else {
    require("./util/cmd_not_found")(cmd, argv, cb);
  }
})();

function cb() {
  return require("./util/color")(`\n${process.env.cli} version: `, [
    "green",
    process.env.version,
  ]);
}
