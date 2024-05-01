// 2_deploy_ERC20.js
const ERC20 = artifacts.require("ERC20");

export default function(deployer) {
    deployer.deploy(ERC20);
};
