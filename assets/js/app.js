// Global variables
let guess;
let secretWord;
let guessedLetters = [];
let blanks = [];
let guessedWord = "";
let guessesLeft = 10;
let wins = 0;
let losses = 0;
let gameOn = true;
let enterKey = false;

// Use key events to listen for the letters guessed
document.onkeyup = function (e) {
    if (gameOn && e.which >= 65 && e.which <= 90) {
        guess = e.key;
        game.checkGuess(guess);
    } else if (enterKey && e.which === 13) {
        game.newWord();
    }
};

// Save game and its properties in an object.
const game = {
    words: [
        "frabjous", 
        "jabberwocky", 
        "nonsense", 
        "bandersnatch", 
        "cheshire", 
        "caterpillar", 
        "wonderland", 
        "dormouse", 
        "curiouser"
    ],
    // Choose one of the words from the list (repeat after each win/loss)
    randomWord() {
        if (this.words.length >= 1) {
            let i = Math.floor(Math.random() * this.words.length);
            secretWord = this.words[i];
            this.words.splice(i, 1);
            // console.log(secretWord);
            // console.log(this.words);
            this.letterBlanks();
        } else {
            gameOn = false;
            this.updateDisp("secretWord", "You played through all the words!");
        }
    },
    // Replace letters with spaces
    letterBlanks() {
        blanks = [];
        for (let i = 0; i < secretWord.length; i++) {
            blanks.push("_");
        };
        this.updateSecret();
    },
    // Convert blanks array into guessedWord string
    updateSecret() {
        guessedWord = '';
        blanks.forEach((blank) => {
            guessedWord += blank + " ";
        });
        this.updateDisp("secretWord", guessedWord);
    },
    // Check if guessed letter is in secret word
    checkGuess(g) {;
        const a = guessedLetters.indexOf(g);
        const b = blanks.indexOf(g);
        const inWord = secretWord.indexOf(g) >= 0;
        if (inWord) {
            this.replaceLetters();
        } else if (a === -1 && b === -1) {
            guessedLetters.push(g);
            guessesLeft--;
            this.updateDisp("guessesLeft", guessesLeft);
            this.updateDisp("lettersGuessed", guessedLetters);
        };
        this.checkWin();
    },
    // Put correct letters back into word
    replaceLetters() {
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord.charAt(i) === guess) {
                blanks[i] = guess;
            }
        };
        this.updateSecret()
        this.updateDisp("secretWord", guessedWord);;
    }, 
    checkWin() {
        if (blanks.indexOf("_") === -1) {
            wins++; 
            this.updateDisp("wins", wins);
            this.updateDisp("secretWord", `${secretWord} was right!`);
            enterKey = true;
        } else if (guessesLeft === 0) {
            this.words.push(secretWord);
            losses++;
            this.updateDisp("losses", losses);
            this.newWord();
        }
    }, 
    newWord() {
        this.randomWord();
        guessesLeft = 10;
        guessedLetters = [];
    }, 
    updateDisp(id, display) {
        document.getElementById(id).innerHTML = display;
    }
}
// ##### Word Guess Game Bonuses
// Play a sound or song when the user guesses their word correctly, like in our demo.

// Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
game.newWord(); 

