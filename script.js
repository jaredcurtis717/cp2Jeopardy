let answer = "";
let points = 0;
let changePoints = 0;

document.getElementById("showAnswerButton").addEventListener("click", function(event) {
  event.preventDefault();
    let results = "What is: " + answer + "?";
    document.getElementById("questionAnswer").innerHTML = results;
});
document.getElementById("correctButton").addEventListener("click", function(event){
  event.preventDefault();
  points = points + changePoints;
  document.getElementById("pointValue").innerHTML = points;
  newQuestion();
});
document.getElementById("passButton").addEventListener("click", function(event){
  event.preventDefault();
  newQuestion();
});
document.getElementById("wrongButton").addEventListener("click", function(event){
  event.preventDefault();
  points = points - changePoints;
  document.getElementById("pointValue").innerHTML = points;
  newQuestion();
});

function setCatagory(cat){
  document.getElementById("category").innerHTML = cat;
}

function setQuestion(question){
  document.getElementById("questionValue").innerHTML = question;
}

function setPoints(pts){
  document.getElementById("questionPointValue").innerHTML = pts;
  changePoints = pts;
}

function newQuestion(){
  let resetAnswer = "";
  document.getElementById("questionAnswer").innerHTML = resetAnswer;
  const url = "http://jservice.io/api/random";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      answer = json[0].answer;
      setQuestion(json[0].question)
      setCatagory(json[0].category["title"])
      setPoints(json[0].value)
    });
}
