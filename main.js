var inquier = require("inquier");
var fs = require ('fs');

var basicflashcard = require("./basicflashcard");
var clozeflashcard = require("./clozeflashcard");

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
        message: "Cloze",
        type: "input"
    }
]).then(handleUserResponse);

function handleUserResponse(response){

    var newResponse = new Basic(response.question, response.answer);
    newResponse.showQuestion();
    response.push(newResponse);

    var newClozeResponse = new Cloze(answer.text, answer.clozeAnswer);
    newClozeResponse.showQuestion();
    response.push(newClozeResponse);
}