var Letter = function(lett) {
	
// property to store the actual letter	
      this.letter=lett.toLowerCase;

// property/boolean if the letter can be shown 
      this.appear=false;

	this.letterRender = function() {
		//if appear is false then show the _
    if(this.appear){
      
      console.log("_ ");
      return "_ ";
    }
		//else appear is true then show character
    else if(this.appear == true){
        
        console.log(letter);
        return this.letter;
    }
	};
};

// export to use in word.js

exports.Letter = Letter;
