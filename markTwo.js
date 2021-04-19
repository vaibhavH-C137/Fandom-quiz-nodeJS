// create a quiz on any movie: HARRY POTTER

const chalk = require('chalk');
var readlineSync = require('readline-sync');
var username = readlineSync.question(chalk.yellowBright("Pick a username! "));
console.log(chalk.cyan("Welcome "+username));

var score = 0;

var ready = readlineSync.question("We are about to play a quiz on HARRY POTTER,\nCHOOSE OPTION NO.(ans:1||2) \nAre you ready?\nPRESS ENTER to continue\n");


//by array of objects method
var questions = [{
    question: chalk.blue("<1> Where does Ollivander shop situated?\n1. Diagon Alley\n2. Knockturn Alley"),
    answer : "1",
},{
    question: chalk.cyan("<2> Which spell is used for creating patronus charm?\n1. Lumos Maxima\n2. Expecto Patronum"),
    answer : "2",
},{
    question: chalk.blueBright("<3> Whose job to catch the Snitch in Quiddich\n1. striker\n2.seeker"),
    answer: "2"
},{
    question: chalk.blueBright("<4> Which spell is used for transfiguration?\n1. Ridiculus\n2. Vera Verto"),
    answer: "2"
},{
    question: chalk.blueBright("<5> Who killed Gellert Grinderwald\n1. Albus Dumbledore\n2. Voldemort"),
    answer: "2"
},{
    question: chalk.blueBright("<6> For which family the House-Elf are bound to serve\n1. Malfoy's\n2. Potter's"),
    answer: "1"
},{
    question: chalk.blueBright("<7> What is middle name of Tom Riddle\n1. Maverick\n2. Mavloro"),
    answer: "2"
},{
    question: chalk.blueBright("<8> The Order of Pheonix is made by\n1. Albus Dumbledore\n2. Harry Pottah"),
    answer: "1"
},{
    question: chalk.blueBright("<9> Professor Lupin turns into which Animagus form\n 1. BlackHound\n2. WereWolf"),
    answer: "2"
},{
    question: chalk.blueBright("<10> Which spell is used for unlock doors?\n1. Alohmora\n2. Khul-ja-SimSim"),
    answer: "1"
}]


function play(real, given){
    if(real === given){
        console.log(chalk.green("you're correct: <+1>"));
        score += 1;
    }
    else{
        console.log(chalk.red("You're Wrong: <0>"));
    }}
    
    
    for(var i=0; i<questions.length; i++){
        var givenAns = readlineSync.question(questions[i].question+"\nAns: ");
        var realAnswer = questions[i].answer;
        play(realAnswer, givenAns);    
        console.log("------------------\n");
        if(score == 4){
            console.log("oh!, you are good at this. Let's see if u can handle this\n\n\n")
            console.log("-----ugrading to LEVEL 2------");
            ;}
    //     }else{
    //         readlineSync.question("There are certain challenges are waiting for your cutoff marks\npress ENTER for next question");
        }
    
    console.log(chalk.yellow(username+"'s Final Score: "+score));
    
   
    
    var highScore = [{
        name: "Vaibhav",
        score: 8
    },{
        name: "Srishti",
        score:10
    },{
        name: "Tanay",
        score: 7
    },{
        name: "Next, It can be you. Send the ss of ur highscore.",
        score: 'maxMarks'
    }]
    console.log("\n\nThe high scores are like this")
    for(var a=0; a<highScore.length; a++){
        console.log((a+1)+". "+highScore[a].name+"   ---->   "+highScore[a].score);
    }
    console.log("\n\n\nThanks for playing, hope u enjoyed :)")
    