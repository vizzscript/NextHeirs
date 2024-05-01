pragma solidity ^0.8.0;

import "./Context.sol";

abstract contract Pausable is Context {
    event Paused(address account);
    event Unpaused(address account);

    bool private _paused;
    address private _pauser;

    constructor() {
        _paused = false;
        _pauser = msg.sender;
    }

    modifier onlyPauser() {
        require(msg.sender == _pauser, "Pausable: caller is not the pauser");
        _;
    }

    function paused() public view virtual returns (bool) {
        return _paused;
    }

    modifier whenNotPaused() {
        require(!_paused, "Pausable: paused");
        _;
    }

    modifier whenPaused() {
        require(_paused, "Pausable: not paused");
        _;
    }

    function pause() public virtual onlyPauser {
        _paused = true;
        emit Paused(_msgSender());
    }

    function unpause() public virtual onlyPauser {
        _paused = false;
        emit Unpaused(_msgSender());
    }
}
