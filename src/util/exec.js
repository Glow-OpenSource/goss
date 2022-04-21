module.exports = function (cmd, argv, cb) {
	console.log(`> ${cmd} ${argv.join(" ")}`);
	return require("child_process")
		.spawn(cmd, argv)
		.stdout.on("data", function (chunk) {
			return process.stdin.write(chunk);
		})
		.once("end", function () {
			return cb();
		});
};
