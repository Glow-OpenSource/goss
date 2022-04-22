module.exports = function (cmd, argv, cb) {
	var { join } = require("path");
	var color = require("../util/color");
	var { existsSync, writeFileSync, readFileSync } = require("fs");
	var _path = argv[0] || "dist";
	var base = join("./", _path, "index");
	if (!existsSync(base.slice(0, -5))) {
		color(["red", "Error: "], "directory ", ["green", _path], " not found");
		return cb();
	}
	if (!existsSync(base + ".mjs")) {
		writeFileSync(
			base + ".mjs",
			`export * from "./index.js";import _m from "./index.js";export default Object.assign(_m.default || {},_m);`
		);
		color(
			["blue", "Info: "],
			"created ",
			["green", join("./", _path, "index.mjs")],
			" for default import"
		);
		if (existsSync("./package.json")) {
			(function () {
				var p = JSON.parse(readFileSync("./package.json", "utf-8"));
				var path = join("./", _path, "index.mjs");
				if (p.module !== path) {
					p.module = path;
					writeFileSync("./package.json", JSON.stringify(p, null, "   "));
					color(
						["blue", "Info: "],
						"setted ",
						["green", path],
						" to default import path of modulejs"
					);
				}
			})();
		}
	}
	if (!existsSync(base + ".cjs")) {
		writeFileSync(
			base + ".cjs",
			`(function(){var obj = require("./index.js");module.exports = Object.assign(obj.default || {}, obj);})()`
		);
		color(
			["blue", "Info: "],
			"created ",
			["green", join("./", _path, "index.cjs")],
			" for default import"
		);
		if (existsSync("./package.json")) {
			(function () {
				var p = JSON.parse(readFileSync("./package.json", "utf-8"));
				var path = join("./", _path, "index.cjs");
				if (p.main !== path) {
					p.main = path;
					writeFileSync("./package.json", JSON.stringify(p, null, "   "));
					color(
						["blue", "Info: "],
						"setted ",
						["green", join("./", _path, "index.cjs")],
						" to default import path of commonjs"
					);
				}
			})();
		}
	}
    return cb()
};
