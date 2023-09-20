const prompt = require("prompt-sync")({ sigint: true });
const name = prompt("What is your name? ");
console.log(`Hey there ${name}`);

// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1;

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;
let guess = prompt("Guess a number ");

while (!foundCorrectNumber) {
  // Step 1: Get user input (don't forget that the input is a string)

  if (isNaN(parseInt(guess))) {
    console.log("Please insert number only");
    guess = prompt("Guess a number ");
  } else {
    if (numberInMind === parseInt(guess)) {
      console.log("You Win");
      foundCorrectNumber = true;
      let playAgain = prompt(
        "Play again? Press 'y' to play again and press 'n' to exit."
      );
      if (playAgain.toLowerCase() === "y") {
        numberInMind = Math.floor(Math.random() * 100) + 1;
        foundCorrectNumber = false;
        guess = prompt("Guess a number ");
      } else if (playAgain.toLowerCase() === "n") {
        console.log("Thank you for playing the guessing game.");
      }
    }
    // Step 2: Compare the guess to the secret answer and
    // let the user know the feedback (too large, too small, correct).

    if (guess > numberInMind) {
      const tooLarge = prompt("It's too large. Next guess? ");
      guess = tooLarge;
    } else if (guess < numberInMind) {
      const tooSmall = prompt("It's too small. Next guess? ");
      guess = tooSmall;
    }
  }
}

// Bonus Point: prompt user and provide option for user to start a new game after winning
