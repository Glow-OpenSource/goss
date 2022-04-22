function cmds() {
	return {
		help: "Shows the list of commands",
		lint: `ShourtCut of ${require("chalk").green("npm run lint")}`,
		build: `ShourtCut of ${require("chalk").green("npm run build")}`,
		dev: `ShourtCut of ${require("chalk").green("npm run dev")}`,
		install: `ShourtCut of ${require("chalk").green("npm install")}`,
		pack: `ShourtCut of ${require("chalk").green("npm pack")}`,
		update: `Updates ${require("chalk").green(process.env.cli)}`,
		init: `Installs ${process.env.name} typed package init`,
		version: "Shows the version",
		info: "Shows some info",
		import: "Create an mjs&cjs importer endpoint",
	};
}

module.exports = function (cmd, argv, cb) {
	var _cmds = [];
	var __cmds = cmds();
	Object.keys(__cmds).forEach(function (k) {
		_cmds.push(["green", `\n${process.env.cli} ${k}`], ` - ${__cmds[k]}`);
	});
	require("../util/color")(
		"This is a runtime for Glow Opensource Projects(",
		["blue", "https://opensource.glow-bot.com/"],
		")\n\n",
		"The list of commands are:",
		..._cmds
	);
	return cb();
};

module.exports.cmds = cmds;
