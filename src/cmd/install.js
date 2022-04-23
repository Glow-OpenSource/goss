module.exports = function (cmd, argv, cb) {
  return require("../util/exec")("npm", ["install", ...argv], cb);
};
