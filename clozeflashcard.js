var Cloze = function(){
    this.text = text;
    this.clozeAnswer = cloze;
}

var question1 = new Cloze()

question1.clozeAnswer = "Columbus?";
question1.text = "is the Capital of Ohio";
this.showQuestion = function(){
    console.log(this.text);
}
this.showAnswer = function(){
    console.log(this.clozeAnswer);
}

var question2 = new Cloze()

question2.clozeAnswer = "Atlanta";
question2.text = "is the Capital of Georgia";
this.showQuestion = function(){
    console.log(this.text);
}
this.showAnswer = function(){
    console.log(this.clozeAnswer);
}

var question3 = new Cloze()

question3.clozeAnswer = "Nashville"
question3.text = "is the capital of Tennessee"
this.showQuestion = function(){
    console.log(this.text);
}
this.showAnswer = function(){
    console.log(this.clozeAnswer);
};

module.exports = Cloze;