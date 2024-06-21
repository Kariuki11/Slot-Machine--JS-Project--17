// 1. Deposit some money
// 2. Determine the number of Lines to bet
// 3. Collect a bet amount
// 4. Spin the slot Machine
// 5. Check if the player has won
// 6. If won, calculate the winnings
// 8. Play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNTS = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}


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

const getBet = (balance, lines) => {
    while(true) {
        const bet = prompt("Enter the bet per line: ");
            const numberBet = parseFloat(bet);
    
            if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
                console.log("Invalid bet. Try again!.");
            } else {
                return numberBet;
            }
        }
}
const Spin = () => {
    const symbols = [];
    for (const[symbol, count] of Object.entries(SYMBOLS_COUNTS)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
}

return reels;
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
