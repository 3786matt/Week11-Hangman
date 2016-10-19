// require your letter objects

var letter = require('./letter.js');

var Word = function(wrd){
// property to store the string wrd
			this.word = wrd;

// a collection of letter objects

			this.lettsArray = [];

// property is the word found?
			this.find = false;

	this.getLets = function(word) {
// populate the collection above with new Letter objects
			for(var i = 0; i < this.word.length; i++){
				this.lettsArray.push(new letter.Letter(this.word[i]));
			}

	};
	
	//found the current word
	this.didWeFindTheWord = function() {
		//sets this.found in the word object to true or false if all letter objects have a true value in their appear property
		letterCount=0;
		for(var i=0; i<this.lettsArray.length; i++){
			if(this.lettsArray[i].appear){
				letterCount++;
			}
		}
		if(letterCount == this.lettsArray.length){
			this.find=true;
		}
		
		return this.find;
	};

	this.checkIfLetterFound = function(guessLetter) {
		var whatToReturn = 0;
// iterate through the collection of letter Objects
		for(var i=0; i<this.lettsArray.length; i++){
			if(this.lettsArray[i].letter == guessLetter){
						this.lettsArray[i].appear = true;
						whatToReturn++;
			}
		}

// if guessLetter matches Letter property, the letter object should be shown
		return whatToReturn;
	};

	this.wordRender = function() {
// render the word based on if letters are found or ot found
		var str = "";
		for(var i=0; i<this.lettsArray.length; i++){
			str = str+this.lettsArray[i].letterRender();
		}

		return str;
	};
}

// export to use in main.js

exports.Word = Word;
