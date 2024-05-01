const SafeMath = artifacts.require("SafeMath");

export default function(deployer) {
    deployer.deploy(SafeMath);
};
