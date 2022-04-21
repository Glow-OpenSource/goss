module.exports = function (...ins) {
	var chalk = require("chalk");
	var ous = [];
	ins.forEach(function (v) {
		if (typeof v === "string") {
			ous.push(v);
		} else {
			ous.push(chalk[v[0]](v[1]));
		}
	});
	return console.log(ous.join(""));
};
