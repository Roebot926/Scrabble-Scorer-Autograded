// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i <= word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some Scrabble!");

   let userInput = input.question('Please enter a word to score: ');
   console.log(vowelBonusScorer(userInput));
  return userInput

};

let simpleScorer = function(str){
   str = str.toUpperCase();
   let letterPoints = '';
   let points = 1

   for (let i=0; i<str.length; i++){
      for (const pointValue in oldPointStructure){
         if(oldPointStructure[pointValue].includes(str[i])){
            letterPoints += `Points for ${str[i]}: ${points}\n`
         }
      }
   }
   return letterPoints
};


let vowelBonusScorer = function(str){
   str = str.toUpperCase();
   let letterPoints = "";
   let vowels = ['a','e','i','o','u','y'];
   let points = 1;
   let vowelBonus = 0;

      for (let i = 0; i<str.length; i++) {

         for (const pointValue in oldPointStructure){
            if(oldPointStructure[pointValue].includes(str[i])){
               if (str[i] === vowels[i]){
                  vowelBonus += str[i]*3;
               }
                  
               }
            }
            letterPoints += `Points for '${str[i]}': ${points} | Bonus Vowel: ${vowelBonus} \n`;
         }
         return letterPoints
      }

let scrabbleScorer;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
}
