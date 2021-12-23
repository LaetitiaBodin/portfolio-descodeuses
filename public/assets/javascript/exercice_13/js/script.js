let choiceOptions = [`rock`, `paper`, `scissors`];
let computerChoice;
let playerChoice;

document.getElementById('go').addEventListener('click', function () {
    playerChoice = document.getElementById('player').value;
    computerChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
    if (playerChoice == `rock` && computerChoice == `paper` ||
        playerChoice == `paper` && computerChoice == `scissors` ||
        playerChoice == `scissors` && computerChoice == `rock`) {
        document.getElementById('result').innerHTML = `Computer wins!`;
        document.getElementById('result').className = "bg-danger py-5 h2 my-5";
    } else if (playerChoice == `rock` && computerChoice == `scissors` ||
                playerChoice == `paper` && computerChoice == `rock` ||
                playerChoice == `scissors` && computerChoice == `paper`) {
        document.getElementById('result').innerHTML = `Player wins!`;
        document.getElementById('result').className = "bg-success py-5 h2 my-5";
    } else if (playerChoice == computerChoice) {
        document.getElementById('result').innerHTML = `It's a tie!`;
        document.getElementById('result').className = "bg-warning py-5 h2 my-5";
    } else {
        document.getElementById('result').innerHTML = `Player loses by forfeit!`;
        document.getElementById('result').className = "bg-danger py-5 h2 my-5";
    }
});

document.getElementById('reset').addEventListener('click', function () {
    computerChoice = ``;
    playerChoice = ``;
    document.getElementById('result').innerHTML = ``;
    document.getElementById('result').className = "py-5 my-5 h2";
});