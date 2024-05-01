// 2_deploy_context.js
const Context = artifacts.require("Context");

export default function(deployer) {
    deployer.deploy(Context);
};
