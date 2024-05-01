pragma solidity ^0.8.0;

contract WeaveHash {

    struct DataHash {
        uint256 id;
        string hash;
        string metadata;
    }

    address public owner;
    address public creator;

    uint256 public Count = 0;

    mapping(uint256 => DataHash) public hashes;

    event NewHash(address indexed sender, uint256 id, string hash, string metadata);
    event OwnershipTransferred(address indexed oldOwner, address indexed newOwner);

    constructor() {
        owner = msg.sender;
        creator = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Invalid owner address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    function storeHash(uint256 id, string memory hash, string memory metadata) public {
        require(bytes(hash).length > 0, "Empty hash");
        require(bytes(metadata).length > 0, "Empty metadata");

        hashes[id] = DataHash(id, hash, metadata);
        Count++;

        emit NewHash(msg.sender, id, hash, metadata);
    }

    function readHash(uint256 id) public view returns (DataHash memory) {
        require(hashes[id].id != 0, "Hash not found");
        return hashes[id];
    }

    function readHashes() public view returns (string[] memory) {
        string[] memory allHashes = new string[](Count);
        for (uint256 i = 1; i <= Count; i++) {
            allHashes[i - 1] = hashes[i].hash;
        }
        return allHashes;
    }

    function resetHashes() public onlyOwner {
        for (uint256 i = 1; i <= Count; i++) {
            delete hashes[i];
        }
        Count = 0;
    }
}
