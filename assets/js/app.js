let userGuess;
let guessedLetters = [];
let guessesLeft = 10;
let wins = 0;

// Use key events to listen for the letters guessed
document.onkeyup = function(e) {
    if(e.which>=65 && e.which<=90) {
        console.log(e.key);
    }
};

// Display:
//    * If the word is`madonna`, display it as: `_ _ _ _ _ _ _`.
//    * As the user guesses, reveal correct letters: `m a d o _  _ a`.
// When finished, game should automatically choose another word and continue.

var game = {
    categories: [
        {
            category: "movies",
            words: ["mirrormask", "labyrinth", "harry potter"]
        },{
            category: "",
            words: []
        }
    ]
}
// ##### Word Guess Game Bonuses

// Play a sound or song when the user guesses their word correctly, like in our demo.
// Write some stylish CSS rules to make a design that fits your game's theme.
// ** HARD MODE:** Organize your game code as an object
// except for the key events to get the letter guessed.
// This will be a challenge if you haven't coded with JavaScript before, 
// but we encourage anyone already familiar with the language to try this out.
// Save your whole game and its properties in an object.
// Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
// Don't forget to place your global variables and functions above your object.
//     * Remember: global variables, then objects, then calls.
// Definitely talk with a TA or your instructor if you get tripped up during this challenge.