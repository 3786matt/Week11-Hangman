var Letter = function(lett) {
  
// property to store the actual letter 
  //added  () afgter to lower case so function is acually called
  this.letter=lett.toLowerCase();

// property/boolean if the letter can be shown 
  this.appear=false;

  this.letterRender = function() {
    //if appear is false then show the 

    //changed if(this.appear) to if(this.appear === false), since if(this.appear) checks if this.appear == true
    if(this.appear === false){
      // removed console.log since we ae logging the return valeu of this function in main.js
      return "_ ";
    }
    //else appear is true then show character
    //its is best practive to use '===' rather than '=='
    else if(this.appear === true){
      //fixed indentation
      // console.log(letter);
      return this.letter;
    }
  };
};

// export to use in word.js

exports.Letter = Letter;
