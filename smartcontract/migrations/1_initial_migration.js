const GoToken= artifacts.require("GoToken");

module.exports = function (deployer) {
  deployer.deploy(GoToken);
};
