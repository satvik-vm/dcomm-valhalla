pragma solidity ^0.8.17;
import "./savings.sol";

contract account{
    address account_number;
    string password;
    address savings_contract_address;

    constructor(string memory __password, uint __amount){
        password = __password;
        savings savings_contract = new savings(__amount);
        savings_contract_address = address(savings_contract);
        account_number = address(this);
    }

    function getSavingsContract() public view returns (address){
        return savings_contract_address;
    }
}