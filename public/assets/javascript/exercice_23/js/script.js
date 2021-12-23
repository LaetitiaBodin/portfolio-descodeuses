// Default values.
let scores = document.getElementById('scores');
let dynamicDiv = document.getElementById(`dynamicDiv`);
let randomNumber;
let tries;
let guesses;
let rWon = 0;
let rLost = 0;

function setUp () {
    // Updates the scores.
    scores.innerHTML = `<p>Rounds won: ${rWon}<br>Rounds lost: ${rLost}`;
    // Pick a random number between 0 and 100 included.
    randomNumber = Math.floor(Math.random() * 101);
    // Starting values, they will be updated later on.
    tries = 0;
    guesses = [];
    dynamicDiv.innerHTML = 
    `<label for="guessedNumber">I see... </label>
    <input type="number" id="guessedNumber" min="0" max="100">
    <button onclick="check();">Am I right?</button>`;
}

// Check if the given number is an integer between 0 and 100.
// If not, change the value so that it obeys the game's rules.
function numberCorrection () {
    let guessedNumber = Math.round(document.getElementById('guessedNumber').value);
    if (guessedNumber < 0 || guessedNumber == -0) {
        guessedNumber = 0;
    } else if (guessedNumber > 100) {
        guessedNumber = 100;
    }
    guesses.push(guessedNumber);
}

function addGuesses () {
    dynamicDiv.innerHTML = ``;
    let foundNumber = ``;
    // The given number obeys the game's rules.
    // A message is given onscreen to tell whether the secret number has been found or not.
    for (let i = 0; i < guesses.length; i ++) {
        let createP = document.createElement('p');
        dynamicDiv.appendChild(createP);
        if (guesses[i] == randomNumber) {
            foundNumber = `Yes`;
            createP.innerText =
                `${guesses[i]}? — Yes, I found it!`;
        // The secret number has not been found. A tip is given.
        } else if (guesses[i] != randomNumber) {
            foundNumber = `No`;
            if (guesses[i] < randomNumber) {
                createP.innerText =
                    `${guesses[i]}? — Nope, it's more!`;
            } else if (guesses[i] > randomNumber) {
                createP.innerText =
                    `${guesses[i]}? — Nope, it's less!`;
            }
        }        
    }
    let createDiv = document.createElement('div');
    dynamicDiv.appendChild(createDiv);
    if (foundNumber == `Yes`) {
        // Updates the scores.
        rWon += 1;
        scores.innerHTML = `<p>Rounds won: ${rWon}<br>Rounds lost: ${rLost}`;
        // The secret number has been found. The game ends, the player wins.
        createDiv.innerHTML =
        `<p>I knew it!</p>
        <button onclick="newRound();">New round!</button>`;
    } else if (foundNumber == `No`) {
        if (guesses.length < 10) {
            // The secret number has not been found. The game continues, the player is given another chance.
            createDiv.innerHTML =
            `<label for="guessedNumber">I see... </label>
            <input type="number" id="guessedNumber" min="0" max="100">
            <button onclick="check();">Am I right?</button>`;
        } else if (guesses.length == 10) {
            // Updates the scores.
            rLost += 1;
            scores.innerHTML = `<p>Rounds won: ${rWon}<br>Rounds lost: ${rLost}`;
            // The secret number has not been found. The game ends, the player loses.
            createDiv.innerHTML =
            `<p>No more tries!</p>
            <div>
                <p>New round?</p>
                <button onclick="newRound();">Yes!</button>
            </div>`;
        }
    }
}

// Function triggered when the player clicks on "Am I right?".
function check () {
    tries += 1;
    numberCorrection();
    addGuesses();
}

// Only available if at least one round has been played.
function newRound () {
    // Resets the playing area but keeps the scores.
    setUp();
}