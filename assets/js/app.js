let userGuess;
let guessedLetters = [];
let guessesLeft = 10;
let wins = 0;
let secretWord;
let guessedWord = "";
let blanks = [];
let guess;

// Use key events to listen for the letters guessed
document.onkeyup = function(e) {
    if(e.which>=65 && e.which<=90) {
        guess = e.key;
        console.log(guess);
        game.replaceLetters(guess);
    }
};

// Choose one of the words from the list (repeat after each win/loss)


// Replace letters with spaces

// When correct letter is guessed, put it back into word

const game = {
    words: ["frabjous", "jabberwocky", "nonsense", "bandersnatch", "cheshire", "caterpillar"],
    randomWord() {
        let i = this.words.length;
        secretWord = this.words[Math.floor(Math.random() * i)];
        console.log(secretWord);
    },
    letterBlanks() {
        for (let i = 0; i < secretWord.length; i++) {
            blanks.push("_");
        };
        console.log(guessedWord);
        blanks.forEach((blank) => {
            guessedWord += blank + " ";
        });
        console.log(blanks);
        console.log("secret word: " + guessedWord);
    }, 
    replaceLetters(guess) {
        const inWord = secretWord.indexOf(guess);
        if(inWord>=0) {
            for(let i=0; i<secretWord.length; i++) {
                if(secretWord.charAt(i)===guess) {
                    guessedWord[i]=guess;
                    console.log(guessedWord)
                }
            };
        }
        console.log(inWord);
    }

}
// ##### Word Guess Game Bonuses

// Play a sound or song when the user guesses their word correctly, like in our demo.
// ** HARD MODE:** Organize your game code as an object
// except for the key events to get the letter guessed.
// Save your whole game and its properties in an object.
// Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
// Don't forget to place your global variables and functions above your object.
//     * Remember: global variables, then objects, then calls.
game.randomWord();
game.letterBlanks();
document.getElementById("secretWord").append(guessedWord);

