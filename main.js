// require prompt to use to make the game 
var prompt = require('prompt');

//require the objects/exports you will use

var Word = require('./word.js');
var Game = require('./game.js');

prompt.start();

game = {
	wordBank : Game.wordBank,// create or import a list of words
	wordsWon : 0,// count of words Found
	guessedLetters : [],
	guessesRemaining : 10, //per word
	currentWrd : null, //the word object
	startGame : function (wrd){
		//make sure the user has 10 guesses
		this.resetGuessesRemaining();

		//get a random word from the array
		this.currentWrd = new Word.Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);

		//populate currentWrd (made from Word constructor function) object with letters
		this.currentWrd.getLets();

		this.keepPromptingUser();

	}, 
	resetGuessesRemaining : function(){
    // reset guess count for new game	
    this.guessesRemaining=10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    //console.log(result);
		    
			  // console log the letetr you chose

			  console.log('You chose: '+result.guessLetter);

		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found

		    var letterFoundSet = self.currentWrd.checkIfLetterFound(result.guessLetter);

		    // checkIfLetterFound(result.guessLetter);

		    //if the user guessed incorrectly minus the number of guesses they have left
		    if(letterFoundSet == 0){
		    		if(self.guessedLetters.indexOf(result.guessLetter)<0){
		    			self.guessedLetters.push(result.guessLetter);
		    			self.guessesRemaining--;
		    			console.log('That letter is incorrect.');
		    		}
		    		else{
		    			console.log('Letter has been previously chosen.');
		    		}}
		    			else{
		    				if(self.guessedLetters.indexOf(result.guessLetter)<0) {
		    					 self.guessedLetters.push(result.guessLetter);
		    					 console.log('Correct choice!');
		    				} 
		    				else{
		    					console.log('Letter has been previously chosen.');
		    				}
		    				if(self.currentWrd.didWeFindTheWord()){
		    						console.log('Winner!');
		    						console.log('The word was: '+self.currentWrd.word);
		    						return;
		    					}
		    				}

		    				console.log('Guesses left: '+self.guessesRemaining);
		    				console.log(self.currentWrd.wordRender());
		    				console.log('Letters previously chosen: '+self.guessedLetters);

		    				if((self.currentWrd.find==false) && (self.guessesRemaining>0)){
		    					self.keepPromptingUser();
		    				}
		    				else if(self.guessesRemaining==0){
		    					console.log('Game Over. The correct word was: '+self.currentWrd.word);
		    				}
		    				else{
		    					console.log(self.currentWrd.wordRender());
		    				}

		    		

				// and console.log if they were incorrect or correct
				

		    	
				//check if you win only when you are right
        //end game
			 
		    
		    // display the user how many guesses remaining
			
				// render the word 
				
				// display letters the user has guessed

			  // if user has remaining guesses and Word isn't found
			
				// if user has no guesses left, show them the word and tell them they lost
			
				// else show the user word and rendered
				});
		    
		}
	};


// }


game.startGame();
