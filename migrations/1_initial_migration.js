const Migrations = artifacts.require("Modifier");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
