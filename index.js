var readlineSync = require('readline-sync'),
MAX = 10, MIN = 0, value = 5, key;
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

  function StartQuiz(){
    let yourscore = 0
    let userName = readlineSync.question("Whats your name? ");
    console.log("Welcome "+ userName + ", to a Quiz on Harry Potter");
    console.log(chalk.yellowBright.bold("RULES: +2 => right answer AND -1 => wrong answer"))
    for(let i=0; i < Quiz.length; i++){
      index = readlineSync.keyInSelect(Quiz[i].answers, Quiz[i].question);
      if(index === Quiz[i].correct ){
        yourscore=yourscore+2;
        console.log(chalk.greenBright.bold("correct answer!! your score: ",yourscore));
      }
      else{
        yourscore=yourscore-1;
        console.log(chalk.redBright.bold("wrong answer!! your score: ",yourscore));
        let num = Quiz[i].correct;
        console.log(chalk.redBright.bold("the correct answer is: ",Quiz[i].answers[num]));
      }
    }
  
    console.log(chalk.greenBright.bold("YAY!! FINAL SCORE: ",yourscore));
  
    for(let j=0; j < highscores.length; j++){
      if(highscores[j].score < yourscore){
        console.log(chalk.cyanBright.bgYellow.bold.underline("ITS A HIGHSCORE !! congratulations ", userName));
        return console.log(chalk.blueBright.bold.italic("send a screenshot to be added to the leaderboard"));
      }
    }
  }

  function feedback(){
    
    console.log('\n How was the quiz ? Share your feedback');
    console.log('\n press z and x to toggle the values and spacebar to confirm value');
    console.log('\n' + (new Array(20)).join(' ') +
      '[Z] <- -> [X]  FIX: [SPACE]\n');
    while (true) {
      console.log('\x1B[1A\x1B[K|' +
        (new Array(value + 1)).join('-') + 'O' +
        (new Array(MAX - value + 1)).join('-') + '| ' + value);
      key = readlineSync.keyIn('',
        {hideEchoBack: true, mask: '', limit: 'zx '});
      if (key === 'z') { if (value > MIN) { value--; } }
      else if (key === 'x') { if (value < MAX) { value++; } }
      else { break; }
    }
    if(value===10){
        return console.log("glad you had fun :)");
    }
    else if(value > 5){
        return console.log("will try improving your experience");
    }
    else{
        return console.log("sorry, do drop a comment on ways to improve this app. Thank you !!");
    }
 }
  
  StartQuiz();  
  feedback();