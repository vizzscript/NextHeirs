const WeaveHash = artifacts.require("WeaveHash");

export default function (deployer) {
  deployer.deploy(WeaveHash);
};
