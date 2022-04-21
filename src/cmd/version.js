module.exports = function(cmd, argv, cb){
	return require("../util/color")( [
		"green",
		`${process.env.name}@${process.env.version}`,
	],"\nrepo: ",["blue",`${require("../../package.json").repository}`],"\nnpm: ",["blue",`https://npmjs.com/package/${process.env.name}`]);
}