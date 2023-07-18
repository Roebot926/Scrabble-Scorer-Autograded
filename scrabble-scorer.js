// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 
let dashes = '++++++++++++++++++++++++++++++++++++++++'
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
 };


function initialPrompt() {
   console.log(dashes);
   console.log("\tLet's play some Scrabble!");
   console.log(`${dashes}\n`);

   let userInput = input.question('Please enter a word to score: ');
   // console.log(scrabbleScorer(userInput));
  return userInput
};

let simpleScorer = function(str){
   let score = 0 

   for (let i = 0; i < str.length; i++){
      score++ 
   }
   return console.log("Your Score: ",score);
}


let vowelBonusScorer = function(word){
   word = word.toUpperCase(word);
   let vowels = ['A','E','I','O','U', 'Y'];
   let score = 0;


   for (let i=0; i<word.length; i++){
      if(vowels.includes(word[i])){
         score += 3;
      } else{
         score += 1;
      }
   }
   return console.log("Your Score: ",score);
}


let scrabbleScorer = function(score){
   score = score.toLowerCase()
   let totalPoints = 0;

   for (let i=0; i< score.length-1; i++){

      for(const pointValue in newPointStructure){
         if (newPointStructure[pointValue].includes(score[i])){
         totalPoints+=newPointStructure();
      }
      return totalPoints
    }
   }
}

const scoringAlgorithms = [
   {
   Name: "Simple Scorer.",
   Description: "Each letter is worth 1 point.",
   scorerFunction: simpleScorer,
},
{
   Name: "Bonus Vowels",
   Decription: 'Vowels are 3 pts, consonants are 1 pt.',
   scorerFunction: vowelBonusScorer,
},
{
   Name: "Original Scrabble",
   Description: "The traditional scoring algorithm.",
   scorerFunction: scrabbleScorer,
}

];

function scorerPrompt(word) {

console.log(`
Which scoring algorithm would you like to use?

   0 - Simple: Each letter is worth 1 point. 
   1 - Vowel Bonus: Vowels are worth 3 points.
   2 - Scrabble: Uses original Scrabble point system\n`);
   let info = input.question(`Please Enter 0, 1, or 2: `);
   userInput = Number(info);
   
      if (userInput === 0){
         console.log('You chose: ',scoringAlgorithms[0].Name);
         console.log(scoringAlgorithms[0].scorerFunction(word)); 
      } else if (userInput === 1){
         console.log('You chose: ',scoringAlgorithms[1].Name);
         console.log(scoringAlgorithms[1].scorerFunction(word));
      } else if (userInput === 2){
         console.log('You chose: ',scoringAlgorithms[2].Name);
         console.log(scoringAlgorithms[2].scorerFunction(word));
      } else{
         scorerPrompt();
      }
   return scoringAlgorithms[userInput];
};
function transform(oldScorer) {
   newScorer = {};
   
   for(const key in oldScorer) {
      letterScore = oldScorer[key];

      for(let i = 0; i<letterScore.length;i++){
         newScorer[letterScore[i].toLowerCase()] = Number(key);                
      }  
       
   }
   return newScorer
};

let newPointStructure = transform(oldPointStructure);


function runProgram() {
   let userInput = initialPrompt();
   scorerPrompt(userInput);
};
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
