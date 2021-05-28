var readlineSync = require('readline-sync');
const chalk = require('chalk');

let Quiz = [
    {
      question:"What is Hermione's middle name?",
      answers:["Jane", "Rachel", "Sarah", "Jean",],
      correct: 3
    },
    {
      question:"How many names does Dumbledore have in his full name?",
      answers:["2", "3", "5", "6",],
      correct: 2
    },
    {
      question:"Who does Draco Malfoy take to the Yule Ball in Book 4?",
      answers:["Millicent Bullstrode", "Pansy Parkinson", "Ginny Weasley", "Fleur Delacour"],
      correct: 1
    },
    {
      question:"Who was the student that was petrified by the Basilisk right behind Nearly-Headless Nick in Book 2?",
      answers:["Ernie Macmillan", "Dean Thomas", "Justin Finch-Fletchley", "Lee Jordan"],
      correct: 2
    },
    {
      question:"Who knocks out the troll in the corridor that leads to the Sorcerer's Stone in Book 1?",
      answers:["Harry", " Hermione", " Professor Snape", "Professor Quirrell"],
      correct: 1
    }
  ]
  
  let highscores = [
    {
      name: "random1",
      score: 10
    },
    {
      name: "random2",
      score: 7
    },
  ]
  