module.exports = function (cmd, argv, cb) {
  if (!require("fs").existsSync("./.prettierrc")) {
    require("fs").writeFileSync(
      "./.prettierrc",
      JSON.stringify(
        {
          useTabs: true,
          arrowParens: "avoid",
        },
        null,
        "   "
      )
    );
    require("../util/color")(
      ["blue", "Info: "],
      "We created ",
      ["green", ".prettierrc"],
      " because it was not found"
    );
  }
  return require("../util/exec")("npm", ["run", "lint"], cb);
};
