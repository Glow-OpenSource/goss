module.exports = function (cmd, argv, cb) {
  return require("../util/exec")("npm", ["run", "dev", ...argv], cb);
};
