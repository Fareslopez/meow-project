<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quarks Casino - Craps Game</title>
    <script src="code.js" defer></script> <!-- Link to the JavaScript file -->
</head>
<body>
    <h1>Welcome to Quarks Casino!</h1>
    <button id="playButton">Play Craps</button> <!-- Button to play the game -->
    <div id="result"></div> <!-- Div to display the result -->
</body>
</html>
// Function to generate a random number between 1 and 6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to play the Craps game
function playCraps() {
    const die1 = rollDie(); // Roll the first die
    const die2 = rollDie(); // Roll the second die
    const sum = die1 + die2; // Calculate the sum of the dice

    let resultMessage = `You rolled ${die1} and ${die2}. Sum is ${sum}. `; // Initial result message

    // Determine the game outcome based on the sum and dice values
    if (sum === 7 || sum === 11) {
        resultMessage += "CRAPS – you lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        resultMessage += "You won!";
    } else {
        resultMessage += "You pushed!";
    }

    document.getElementById("result").innerHTML = resultMessage; // Output the result to the webpage
}

// Add event listener to the button to play the game when clicked
document.getElementById("playButton").addEventListener("click", playCraps);
