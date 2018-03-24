// Global variables
let userGuess;
let guessedLetters = [];
let guessesLeft = 10;
let wins = 0;
let secretWord;
let guessedWord = "";
let blanks = [];
let guess;

// Use key events to listen for the letters guessed
document.onkeyup = function (e) {
    if (e.which >= 65 && e.which <= 90) {
        guess = e.key;
        game.replaceLetters(guess);
    }
};

// Save game and its properties in an object.
const game = {
    words: ["frabjous", "jabberwocky", "nonsense", "bandersnatch", "cheshire", "caterpillar"],
    displaySecret() {
        document.getElementById("secretWord").innerHTML = guessedWord;
    },
    // Choose one of the words from the list (repeat after each win/loss)
    randomWord() {
        if(this.words.length > 0) {
            let i = Math.floor(Math.random() * this.words.length);
            secretWord = this.words[i];
            console.log(secretWord);
            this.words.splice(i, 1);
            console.log(this.words);
        } else {
            document.getElementById("secretWord").innerHTML = "You've played through all the words!";
        }
    },
    // Replace letters with spaces
    letterBlanks() {
        for (let i = 0; i < secretWord.length; i++) {
            blanks.push("_");
        };
    },
    // Convert blanks array into guessedWord string
    updateSecret() {
        guessedWord = '';
        blanks.forEach((blank) => {
            guessedWord += blank + " ";
        });
    },
    // When correct letter is guessed, put it back into word
    replaceLetters(guess) {
        guessedLetters.push(guess);
        const inWord = secretWord.indexOf(guess);
        if (inWord >= 0) {
            for (let i = 0; i < secretWord.length; i++) {
                if (secretWord.charAt(i) === guess) {
                    blanks[i] = guess;
                }
            };
            this.updateSecret()
            this.displaySecret();
        } else {
            guessesLeft--;
            console.log("Guesses left: " + guessesLeft)
            console.log("Guessed letters: " + guessedLetters);
        }
    }, 
    newWord() {
        this.randomWord();
        this.letterBlanks();
        this.updateSecret();
        this.displaySecret();
        guessesLeft = 10;
        guessedLetters = [];
    }
}
// ##### Word Guess Game Bonuses
// Play a sound or song when the user guesses their word correctly, like in our demo.

// Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
game.newWord(); 

