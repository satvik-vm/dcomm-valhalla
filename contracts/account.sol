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

    function deposit(int money) public{
        amount += money;
    }

    function withdraw(int money) public{
        if(money > amount){
            amount = 0;
        }
        if(money <= amount){
            amount -= money;
        }
    }
} 