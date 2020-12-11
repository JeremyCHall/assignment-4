
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product
 let a = parseInt(prompt("Please enter a positve whole number"));
 let b = parseInt(prompt("Please enter second positive whole number"));
 const multiplication = (a,b) => {
   console.log(a)
   console.log(b)
  let product =0;
   for(let i =1; i <= b; i++){
    console.log("counter", i)
    product+=a;
   }
  return product
}

const answer1 = multiplication(a,b)
console.log('answer1')

const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters

//https://stackoverflow.com/questions/57503603/while-loop-to-print-vowels-and-other-elements-on-a-new-line-in-javascript
//let vowelsOrConsonants=prompt(`Please enter //a string.`)
var introduce=(prompt(`Please list the states you have lived in with no commas.`));
function vowelOrConsonants(str) {
  
  var vo=[];
  var co=[];
 // const vowels=['a','e','i','o','u'];

  var split = str.split("");

  for(let i=0; i<split.length; i++){
    if (split[i] ==="a"||split[i] ==="A"){
      vo.push(split[i]);}
    else if (split[i] ==="e"||split[i] ==="E"){
      vo.push(split[i]);}
    else if (split[i] ==="i"||split[i] ==="I"){
      vo.push(split[i]);}
    else if (split[i] ==="o"||split[i] ==="O"){
      vo.push(split[i]);}
    else if (split[i] ==="u"||split[i] ==="U"){
      vo.push(split[i]);}
    else {
      co.push(split[i]);
      //console.log(i);
    }
  }
  console.log(co);
  console.log(vo);
  let voc=prompt(`Do you want vowels or consonants first?  Enter v or c.`)
var consoFirst = co.concat(vo);
var vowelsFirst=vo.concat(co);
if (voc===`v`){
alert (vowelsFirst);}
else if(voc===`c`){
  alert (consoFirst);
}
else{
  alert (`You should have entered v or c`);
}

}
//console.log (vo+"vowels");
//console.log(co+"consonants");

vowelOrConsonants(introduce.split(" ").join(""));



//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins
let userName = prompt("Hello, whats your name?");
let playerInfo = {
  name: userName,
  lives: 5,
  failNumbers: []
}

// generate random number between 10 and 50
let randomGenerator = Math.floor(Math.random() * 41) + 10
//console.log(randomGenerator);

// loop to keep the fun games going
while (playerInfo["lives"]>0) {
   userInput = prompt('Guess a number betwen 10 and 50.');
  if (+userInput === randomGenerator) {
    alert (`Woo! ${playerInfo[`name`]} won the game!`);
    break;
  } 
  else if (+userInput !== randomGenerator) {
    userInput;
    playerInfo['lives']--;
    //console.log(playerInfo['lives']);
    //console.log(playerInfo[`failNumbers`]);
    
  }
   playerInfo[`failNumbers`].push(userInput);
  
  if (playerInfo['lives'] >= 2 && (userInput)>(randomGenerator)) {
  alert (`Incorrect guess.  Guess lower.  You have ${playerInfo["lives"]} lives left.`);
  }
  if (playerInfo['lives'] >= 2 && (userInput)<(randomGenerator)) {
  alert (`Incorrect guess.  Guess higher.  You have ${playerInfo["lives"]} lives left.`);
  }
  else if (playerInfo['lives'] == 1 && (userInput)>(randomGenerator)) {
  alert (`Wrong again.  Guess lower.  You only have 1 life left.`);
  }
    else if (playerInfo['lives'] == 1 && (userInput)<(randomGenerator)) {
  alert (`Wrong again.  Guess higher.  You only have 1 life left.`);
  }
  else if (playerInfo['lives'] == 0) 
  alert (`I'm sorry, ${playerInfo[`name`]}.  You have no lives left.  You lose.  You guessed ${playerInfo[`failNumbers`]}.  The correct number was ${(randomGenerator)}`);   
  }

/*guessTheNumber  = () => {
  return
}

const answer3 = guessTheNumber()

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3
*/

  

//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"reverse method

/* loop backwards start at a number and run it backwards

loop through library array
get each book 
user input ==== title
length of string or highest to lowest
if title.length 
get length of string
compare
max title1 to title2 
reverse */

sort = () => {

  var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

  return
}

const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4
}