var Cloze = function(){
    this.front = front;
    this.back = back;
}

var question1 = new Cloze()

question1.front = "Columbus?";
question1.back = "is the Capital of Ohio";
this.showQuestion = function(){
    console.log(this.back);
}
this.showAnswer = function(){
    console.log(this.front);
}

var question2 = new Cloze()

question2.front = "Atlanta";
question2.back = "is the Capital of Georgia";
this.showQuestion = function(){
    console.log(this.back);
}
this.showAnswer = function(){
    console.log(this.front);
}

var question3 = new Cloze()

question3.front = "Nashville"
question3.back = "is the capital of Tennessee"
this.showQuestion = function(){
    console.log(this.back);
}
this.showAnswer = function(){
    console.log(this.front);
};

module.exports = Cloze;