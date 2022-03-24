let quizData=[
    {
    question:"Which of the following is a valid type of function javascript supports?",

a : "named function",

b : "anonymous function",

c : "Both of the above",

d : "None of the above",
correct:"c",

    },
    {

    question: "what does css stand for?",
    a: "central style sheets",
    b: "cascading style sheets",
    c: "cascading simple sheets",
    d: "cars suvs sailbpats",
    correct: "b",
    },
    {
       question: "Which built-in method combines the text of two strings and returns a new string?",

a:  "append()",

b :" concat()",

c : "attach()",

d : "None of the above",
correct:"b",
    },
];

let quiz=document.getElementById('quiz')
let answerEls=document.querySelectorAll('.answer')
let questionEl=document.getElementById('question')
let a_text=document.getElementById('a_text')
let b_text=document.getElementById('b_text')
let c_text=document.getElementById('c_text')
let d_text=document.getElementById('d_text')
let submitBtn=document.getElementById('submit')

let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){
deselectAnswers()

    const currentQuizData=quizData[currentQuiz]
    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d


}
function deselectAnswers(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}
function getSelected(){
    let answer

    answerEls.forEach(answerEl =>{
        if(answerEl.checked) {
            answer=answerEl.id

        }
    })
    return answer
}

submitBtn.addEventListener('click',() => {
    const answer=getSelected()
     if(answer){
         if(answer === quizData[currentQuiz].correct){
             score++
         }
         currentQuiz++
         if(currentQuiz< quizData.length){
             loadQuiz()
         }else{
             quiz.innerHTML=`
             <h2>You answered correctly at ${score}/
             ${quizData.length}questions</h2>
            
             <button onclick="location.reload()">Reload</button>`
         }

     }
})







   


