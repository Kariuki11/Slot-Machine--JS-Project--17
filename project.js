// 1. Deposit some money
// 2. Determine the number of Lines to bet
// 3. Collect a bet amount
// 4. Spin the slot Machine
// 5. Check if the player has won
// 6. If won, calculate the winnings
// 8. Play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while(true) {
    const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount. Try again!.");
        } else {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while(true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
            const numberOfLines = parseFloat(lines);
    
            if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
                console.log("Invalid number of lines. Try again!.");
            } else {
                return numberOfLines;
            }
        }
};

const getBet = (balance) => {
    while(true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
            const numberOfLines = parseFloat(lines);
    
            if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
                console.log("Invalid number of lines. Try again!.");
            } else {
                return numberOfLines;
            }
        }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
