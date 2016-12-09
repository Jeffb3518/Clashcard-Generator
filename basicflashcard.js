var Basic = function(){
    this.front = front;
    this.back = back;
}

var question1 = new Basic()

question1.front = "What is the Capital of Mississippi?";
question1.back = "Jackson";
this.showQuestion = function(){
    console.log(this.front);
}
this.showAnswer = function(){
    console.log(this.back);
}

var question2 = new Basic()

question2.front = "What is the Capital of Kansas?";
question2.back = "Topeka";
this.showQuestion = function(){
    console.log(this.front);
}
this.showAnswer = function(){
    console.log(this.back);
}

var question3 = new Basic()

question3.front = "What is the Capital of Idaho?"
question3.back = "Boise"
this.showQuestion = function(){
    console.log(this.front);
}
this.showAnswer = function(){
    console.log(this.back);
};

module.exports = Basic;