// Question bank

var questionBank = [
  {
    question: `A train running at the speed of 60 km/hr
     crosses a pole in 9 seconds. What is the length of the train?`,
    option: [`120 metres`, `180 metres`, `324 metres`, `150 metres`],
    answer: `150 metres`,
  },

  {
    question: `A train 125 m long passes a man, running at 5 km/hr in the same direction in
     which the train is going, in 10 seconds. The speed of the train is:`,
    option: [`45 km/hr`, `50 km/hr`, `54 km/hr`, `55 km/hr`],
    answer: `50 km/hr`,
  },

  {
    question: `The length of the bridge, which a train 130 metres
     long and travelling at 45 km/hr can cross in 30 seconds, is:`,
    option: [`200 m`, `225 m`, `245 m`, `250 m`],
    answer: `245 m`,
  },

  {
    question: `Two trains running in opposite
     directions cross a man standing on the platform in 27
      seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:`,
    option: [`1 : 3`, `3 : 2`, `3 : 4`, `None of these`],
    answer: `3 : 2`,
  },

  {
    question: `A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds.
     If the speed of the train is 54 km/hr, what is the length of the platform?`,
    option: [`120 m`, `240 m`, `300 m`, `None of these`],
    answer: `240 m`,
  },

  {
    question: `A train 240 m long passes a pole in 24 seconds. 
    How long will it take to pass a platform 650 m long?`,
    option: [`65 sec`, `89 sec`, `100 sec`, `150 sec`],
    answer: `89 sec`,
  },

  {
    question: `Two trains of equal length are running on parallel lines in the same direction at 46 km/hr and 36 km/hr. The faster
 train passes the slower train in 36 seconds. The length of each train is:`,
    option: [`50 m`, `72 m`, `80 m`, `82 m`],
    answer: `50 m`,
  },
  {
    question: `A train 360 m long is running at a speed of 45 km/hr. 
    In what time will it pass a bridge 140 m long?`,
    option: [`40 sec`, `42 sec`, `45 sec`, `48 sec`],
    answer: `40 sec`,
  },
  {
    question: `Two trains are moving in opposite directions @ 60 km/hr and 90 km/hr. Their lengths are 1.10 km and 0.9 km respectively.
     The time taken by the slower train to cross the faster train in seconds is:`,
    option: [`36`, `45`, `48`, `49`],
    answer: `48`,
  },

  {
    question: `A jogger running at 9 kmph alongside a railway track in 240 metres 
    ahead of the engine of a 120 metres long train running at 45 kmph in the 
    same direction. In how much time will the train pass the jogger?`,
    option: [`3.6 sec`, `18 sec`, `36 sec`, `72 sec`],
    answer: `36 sec`,
  },

  {
    question: `A person crosses a 600 m long street in 5 minutes.
     What is his speed in km per hour?`,
    option: [`3.6`, `7.2`, `8.4`, `10`],
    answer: `7.2`,
  },

  {
    question: `An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours.
 To cover the same distance in 1 hours, it must travel at a speed of:`,
    option: [`300 kmph`, `360 kmph`, `600 kmph`, `720 kmph`],
    answer: `720 kmph`,
  },

  {
    question: `If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more.
 The actual distance travelled by him is:`,
    option: [`50 km`, `56 km`, `70 km`, `80 km`],
    answer: `50 km`,
  },

  {
    question: `A train can travel 50% faster than a car. Both start from point A at the same time and reach point B 75 kms away from A at the same time. On the way, however, the train 
lost about 12.5 minutes while stopping at the stations. The speed of the car is:`,
    option: [`100 kmph`, `110 kmph`, `120 kmph`, `130 kmph`],
    answer: `120 kmph`,
  },

  {
    question: `Excluding stoppages, the speed of a bus is 54 kmph and including stoppages,
 it is 45 kmph. For how many minutes does the bus stop per hour?`,
    option: [`9`, `10`, `12`, `20`],
    answer: `10`,
  },
];

var question = document.getElementById("question");
var quizContainer = document.getElementById("quiz-container");
var scorecard = document.getElementById("scorecard");
var option0 = document.getElementById("option0");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");

var next = document.querySelector(".next");
var points = document.getElementById("score");

var span = document.querySelectorAll("span");
var i = 0;
var score = 0;

// function to display question

function displayQuestion() {
  for (var a = 0; a < span.length; a++) {
    span[a].style.background = "none";
  }
  question.innerHTML = "Q." + (i + 1) + " " + questionBank[i].question;
  option0.innerHTML = questionBank[i].option[0];
  option1.innerHTML = questionBank[i].option[1];
  option2.innerHTML = questionBank[i].option[2];
  option3.innerHTML = questionBank[i].option[3];

  stat.innerHTML =
    "Question" + " " + (i + 1) + " " + "of" + " " + questionBank.length;
}

displayQuestion();

// function calculate score

function calcScore(e) {
  if ((e.innerHTML == questionBank[i].answer) & (score < questionBank.length)) {
    score = score + 1;
    document.getElementById(e.id).style.background = "limegreen";
  } else {
    document.getElementById(e.id).style.background = "tomato";
  }
  setTimeout(nextQuestion,300);
}


// function to display next quetion
function nextQuestion(){
if(i<questionBank.length-1){
  i=i+1;
  displayQuestion();
}
else{
  points.innerHTML=score+'/'+questionBank.length;
  quizContainer.style.display='none';
  scoreboard.style.display='block';
}
}


// click event to next button
next.addEventListener('click',nextQuestion);

// back to quiz button event
function backToQuiz(){
  location.reload();
}

// function  to check answer

function checkAnswer(){
  var answerBank=document.getElementById('answerBank');
  var answers=document.getElementById('answers');

  answerBank.style.display='block';
  scoreboard.style.display='none';
 
  for(var a=0;a<questionBank.length;a++){

    var list=document.createElement('li');
    list.innerHTML=questionBank[a].answer;
    answers.appendChild(list);
  }
}
displayQuestion();