#!  /usr/bin/env node

import inquirer from "inquirer";



console.log("Ayush RJ ATM")


let myBalance = 10000; // dollars
let myPin = 1234;

async function main() {
    let pinAnswer = await inquirer.prompt([
        {
            name: "Ayush",
            message: "Enter your PIN:",
            type: "number"
        }
    ]);

    if (pinAnswer.Ayush === myPin) {
        console.log("Your PIN is correct.");

        while (true) {
            let operationAnswer = await inquirer.prompt([
                {
                    name: "operation",
                    message: "Select an operation:",
                    type: "list",
                    choices: ["Withdraw", "Deposit", "Check Balance"]
                }
            ]);

            switch (operationAnswer.operation) {
                case "Withdraw":
                    let withdrawAmount = await inquirer.prompt([
                        {
                            name: "amount",
                            message: "Enter the amount to withdraw:",
                            type: "number"
                        }
                    ]);
                    if (withdrawAmount.amount > myBalance) {
                        console.log("Insufficient funds.");
                    } else {
                        myBalance -= withdrawAmount.amount;
                        console.log(`Successfully withdrawn $${withdrawAmount.amount}.`);
                    }
                    break;

                case "Deposit":
                    let depositAmount = await inquirer.prompt([
                        {
                            name: "amount",
                            message: "Enter the amount to deposit:",
                            type: "number"
                        }
                    ]);
                    myBalance += depositAmount.amount;
                    console.log(`Successfully deposited $${depositAmount.amount}.`);
                    break;

                case "Check Balance":
                    console.log(`Your current balance is $${myBalance}.`);
                    break;

                default:
                    console.log("Invalid operation.");
            }
        }
    } else {
        console.log("Incorrect PIN number.");
    }
}

main();