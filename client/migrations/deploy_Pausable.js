const Pausable = artifacts.require("Pausable");

export default function(deployer) {
    deployer.deploy(Pausable);
};
