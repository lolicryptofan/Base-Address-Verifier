// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AddressVerifier {
    function isAddressValid(address _address) public pure returns (bool) {
        return _address != address(0);
    }
}
