const Ownable = artifacts.require("Ownable");

export default function(deployer) {
    deployer.deploy(Ownable);
};
