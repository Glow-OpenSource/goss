module.exports = function (cmd, argv, cb) {
	return require("../util/exec")(
		"npm",
		["install", "-g", process.env.name],
		cb
	);
};
