var inquier = require("inquier");
var fs = require ('fs');

var basicflashcard = require("./basicflashcard");
var clozeflashcard = require("./clozeflashcard");

var capitals = [];

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
        message: "Enter Cloze",
        type: "input"
    }, {
        name: "answertext",
        message: "Enter Text",
        type: "input"
    }
]).then(handleUserResponse);