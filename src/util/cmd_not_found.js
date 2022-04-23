module.exports = function (cmd, argv, cb) {
  require("./color")(
    "Unknown command: ",
    ["green", `"${cmd}"`],
    "\nRun ",
    ["green", '"goss help"'],
    " to view all available commands"
  );
  return cb();
};
