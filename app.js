Swal.fire("Don't press any Key. Choose and click next")
 
 var question = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        option1: '<a href="url" target="new">',
        option2: '<a href="url" new>',
        option3: '<a href="url" target="_blank">',
        correctOption: '<a href="url" target="_blank">'
    },
    {
        question: 'Which of these elements are all <table> elements?',
        option1: '<table> <tr> <td>',
        option2: '<table> <head> <tfoot>',
        option3: '<table> <tr> <tt>',
        correctOption: "<table> <tr> <td>"
    },
    {
        question: 'Inline elements are normally displayed without starting a new line.',
        option1: 'True',
        option2: 'False',
        option3: 'Neutral',
        correctOption: "True"
    },
    {
        question: "How can you make a numbered list?",
        option1: '<dl>',
        option2: '<ul>',
        option3: '<ol>',
        correctOption: "<ol>"
    },
    {
        question: 'How can you make a bulleted list?',
        option1: '<ol>',
        option2: '<list>',
        option3: '<ul>',
        correctOption: "<ul>"
    },
    {
        question: 'What is the correct HTML for inserting an image?',
        option1: '<img alt="MyImage">image.gif</img>',
        option2: '<img href="image.gif" alt="MyImage">',
        option3: '<img src="image.gif" alt="MyImage">',
        correctOption: '<img src="image.gif" alt="MyImage">'
    },
    {
        question: 'What is the correct HTML for making a checkbox?',
        option1: '<iput type="check">',
        option2: '<checkbox>',
        option3: '<input type="checkbox">',
        correctOption: '<input type="checkbox">'
    },
    {
        question: "What is the correct HTML for making a text input field?",
        option1: '<input type="textfield">',
        option2: '<input type="text">',
        option3: '<textfield>',
        correctOption: '<input type="text">'
    },
    {
        question: 'What is the correct HTML for making a drop-down list?',
        option1: '<input type="list">',
        option2: '<list>',
        option3: '<select>',
        correctOption: '<select>'
    },
    {
        question: 'What is the correct HTML for making a text area?',
        option1: '<input type="textbox">',
        option2: '<input type="textarea">',
        option3: '<textarea>',
        correctOption: '<textarea>'
    },
    {
        question: 'What is the correct HTML for inserting a background image?',
        option1: '<background img="background.gif">',
        option2: '<body bg="background.gif">',
        option3: '<body style="background-image:url(background.gif)">',
        correctOption: '<body style="background-image:url(background.gif)">'
    }
]

var quiz = document.querySelector('.quiz');
var ques = document.querySelector('#ques');
var option1 = document.querySelector('#opt1');
var option2 = document.querySelector('#opt2');
var option3 = document.querySelector('#opt3');
var ans = document.querySelectorAll('.question1');
var but = document.querySelector('.next');
var time = document.querySelector('.time');
var finalResult = document.querySelector('.result');
var index = 0;
var score = 0;
var min = 1;
var sec = 59;
var quesNum;
var endFlag = false;

function next(){
    time.innerText = `0${min}:${sec}`;
    var optionData = question[index];

    for(var i = 0; i < ans.length; i++){
        if(ans[i].checked){
            var selected = ans[i].value
            var userAns = question[index - 1][`option${selected}`];
            var correctAns = question[index - 1].correctOption;
            if(correctAns === userAns){
                score++
            }
        }
        ans[i].checked = false
        but.disabled = true;
    }

    quesNum = index + 1;

    if(index > question.length - 1){
        
        var totalScore = ((score / question.length)* 100)
        quiz.className = "display";
        if(!endFlag){

            if(totalScore >= 70){
                var pass = `Congratulations, You have passed the exam`;
                var resultData = `<div class="greets">${pass}</div>
                <div class="border"></div>
                <div class="ques-res">
                    <h1>Total Question : <span class="light">${question.length}</span></h1>
                    <h1>Correct Question : <span class="light">${score}</span></h1>
                </div>
                <div class="score-con">
                    <div class="score">Your score:</div>
                    <div class="number">${totalScore}%</div>
                </div>`;
                finalResult.style.display = "flex";
                finalResult.innerHTML = resultData;
            }
            else{
                var end = `Try harder, You have failed the exam`;
                var resultData = `<div class="greets">${end}</div>
                <div class="border"></div>
                <div class="ques-res">
                    <h1>Total Question : <span class="light">${question.length}</span></h1>
                    <h1>Correct Question : <span class="light">${score}</span></h1>
                </div>
                <div class="score-con">
                <div class="score">Your score:</div>
                <div class="number">${totalScore}%</div>
                </div>`;
                finalResult.style.display = "flex"
                finalResult.innerHTML = resultData;
            }
        }
    }
    else{
        min = 1;
        sec = 59;
        time.innerText = `0${min}:${sec}`;
        clearInterval(timer)
        startTimer()
        ques.innerHTML = `<span style="font-size:0.9em">${quesNum}:</span> ${optionData.question}`;
        option1.innerText = optionData.option1;
        option2.innerText = optionData.option2;
        option3.innerText = optionData.option3;
    }
    index++
}

next()

function enableBtn(){
    but.disabled = false
}

var timer;
function startTimer(){
    timer = setInterval(function(){
    sec--
    if(quesNum - 1 > question.length){
        clearInterval(timer)
        next()
    }
    if(sec < 0){
        if(min < 1){
            next();
            min = 1;
            sec = 59;
        }
        else{
            sec = 59;
            min--
        }
    }
    
    if(sec < 10){
        time.innerText = `0${min}:0${sec}`
    }
    else{
        time.innerText = `0${min}:${sec}`
    }
}, 1000)
}

document.addEventListener("keydown", showResult);

function showResult() {
  clearInterval(timer);

  var totalScore = ((score / question.length) * 100);
  quiz.className = "display";
  if (!endFlag) {
    if (totalScore >= 70) {
      var pass = `Congratulations, You have passed the exam`;
      var resultData = `<div class="greets">${pass}</div>
            <div class="border"></div>
            <div class="ques-res">
                <h1>Total Question : <span class="light">${question.length}</span></h1>
                <h1>Correct Question : <span class="light">${score}</span></h1>
            </div>
            <div class="score-con">
                <div class="score">Your score:</div>
                <div class="number">${totalScore}%</div>
            </div>`;
      finalResult.style.display = "flex";
      finalResult.innerHTML = resultData;
    } else {
      var end = `Try harder, You have failed the exam`;
      var resultData = `<div class="greets">${end}</div>
            <div class="border"></div>
            <div class="ques-res">
                <h1>Total Question : <span class="light">${question.length}</span></h1>
                <h1>Correct Question : <span class="light">${score}</span></h1>
            </div>
            <div class="score-con">
                <div class="score">Your score:</div>
                <div class="number">${totalScore}%</div>
            </div>`;
      finalResult.style.display = "flex";
      finalResult.innerHTML = resultData;
    }
  }
}