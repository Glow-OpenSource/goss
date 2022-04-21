module.exports = function (cmd, argv, cb) {
	var fs = require("fs");
	if (fs.existsSync("./package.json")) {
		require("../util/color")(
			["red", "Error: "],
			["green", "package.json"],
			" already exists"
		);
		return cb();
	}
	return require("../util/exec")("npm", ["init", "-y"], function () {
		fs.writeFileSync(
			"./package.json",
			JSON.stringify(
				Object.assign(JSON.parse(fs.readFileSync("./package.json", "utf-8")), {
					scripts: {
						lint: 'prettier --write "**/**.js"',
					},
					license: "MIT",
					version: "0.1.0",
				}),
				null,
				"    "
			)
		);
		return require("../util/exec")("npm", ["install", "-D", "prettier"], cb);
	});
};
