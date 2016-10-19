var Letter = function(lett) {
	
// property to store the actual letter	
      this.letter=lett.toLowerCase;

// property/boolean if the letter can be shown 
      this.appear==false;

	this.letterRender = function() {
		//if appear is false then show the _
    if(this.appear){
      return "_ ";
      console.log("_ ");

    }
		//else appear is true then show character
    else if(this.appear == true){
        return this.letter;
        console.log(letter);
    }
	};
};

// export to use in word.js

exports.Letter = Letter;
