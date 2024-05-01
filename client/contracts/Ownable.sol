pragma solidity ^0.8.0;

abstract contract Ownable {
    address private _owner;
    address private _successor;

    event OwnershipTransferred(address indexed oldOwner, address indexed newOwner);
    event NewOwnerProposed(address indexed previousOwner, address indexed newOwner);

    constructor() {
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "Ownable: caller is not the owner");
        _;
    }

    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit NewOwnerProposed(_owner, newOwner);
        _successor = newOwner;
    }

    function acceptOwnership() public {
        require(msg.sender == _successor, "Ownable: caller is not the successor");
        emit OwnershipTransferred(_owner, _successor);
        _owner = _successor;
        _successor = address(0);
    }

    function owner() public view virtual returns (address) {
        return _owner;
    }

    function proposeOwner(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit NewOwnerProposed(_owner, newOwner);
        _successor = newOwner;
    }
}