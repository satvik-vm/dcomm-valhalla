pragma solidity ^0.8.17;

contract account{
    address account_number;
    int amount;

    constructor(){
        account_number = address(this);
        amount = 0;
    } 

    function getBalance() view public returns (int){
        return amount;
    }

    function deposit(int money) public returns (int){
        amount += money;
        return getBalance();
    }

    function withdraw(int money) public returns (int){
        if(money > amount){
            return -1;
        }
        if(money <= amount){
            amount -= money;
            return getBalance();
        }
    }
} 