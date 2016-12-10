var inquier = require("inquier");
var fs = require ('fs');

var basicflashcard = require("./basicflashcard");
var clozeflashcard = require("./clozeflashcard");

//Array for my flascards
var Basic = [];
var Cloze = [];

//Array for user responses
var response = [];

inquier.prompt([
    {
        name: "question",
        message: "Question is: ",
        type: "input"
    }, {
        name: "answer",
        message: "Answer is: ",
        type: "input"
    }, {
        name: "clozequestion",
        message: "Question is: ",
        type: "input"
    }, {
        name: "clozetext",
        message: "Cloze is: ",
        type: "input"
    }
]).then(handleUserResponse);



function handleUserResponse(response){

    var newResponse = new Basic(response.question, response.answer);
    newResponse.showQuestion();
    response.push(newResponse);

    var newClozeResponse = new Cloze(response.text, response.clozeAnswer);
    newClozeResponse.showQuestion();
    response.push(newClozeResponse);

//Log responses to txt file
fs.appendFile("flashcards.txt", response.question + " " + response.answer + "/n");
fs.appendFile("flashcards.txt", response.text + " " + response.clozeAnswer + "/n");
};