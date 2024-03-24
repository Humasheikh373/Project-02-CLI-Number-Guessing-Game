#! /usr/bin/env node
// #shabang: node Num-Guess-Game.js
// import the inquirer package
import inquirer from "inquirer";
// Two types of guessing games: number guessing game and dice guessing game or any else if you want.
// if you want the fixed number guessing game uncomment below
// const guessednum = 107;
// print welcome message
console.log("Welcome to the number guessing game.");
// generate random number asign to variable randomnumber in the math module
// math asked to floor to round figure out the number and random () call to generate random number between 1 and 6
// * using for number limited to 6 and + 1 means in 0 +1 =1 now start the game with 1.
const randomnumber = Math.floor(Math.random() * 6 + 1);
// print random number if you want a showing random number uncommit this below console.log
// console.log(randomnumber);
// ask user to guess the number in the range of 1 to 6 using inquirer module and assign it to variable userguessnumber in the math module.
// answer = await for waiting for user input and propmt is the inquirer type to input the user data collected.
const answer = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: "Guess in the dice numbers:",
    },
]);
// print the message on second type userguessnumber fixed game uncomment below measage.
// if (answer.userguessnumber === guessednum) {
//   console.log("Congratulations! You guessed number is right.");}
//  else if (answer.userguessnumber < guessednum) {
//   console.log("Your guess number is too low. Please try again.");
// } else if (answer.userguessnumber > guessednum) {
//   console.log("Your guess number is too high. Please try again.");
// } else if (answer.userguessnumber !== guessednum) {
//   console.log("Please enter a valid number.");
// }
// print the message on first type userguessnumber game equal to randomnumber.
if (answer.userguessnumber === randomnumber) {
    console.log("Congratulations! Your guessed number is correct.");
}
else {
    console.log("Oops! You guessed a wrong number. Please try again.");
}
