const quizDB = [

//   first Question's Part 

    {
       question: "Q1:What is the full form of HTML?",
       a: "Hellow To My Land",
       b: "Hey Text Markup Language",
       c: "HyperText Markup Language",
       d: "Hypertext Markup Language",
       ans: "answer4",

    },

    //   second Question's Part 
    {
        question: "Q2:What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep" ,
        c: "Cartoon Style Sheep" ,
        d: "Cascading Stop sheep" ,
        ans: "answer1",
    },

    // third Question's Part

    {
        question: "Q2:What is the full form of HTTP?",
        a: "Hypertext Trnasfer Product",
        b: "Hypertext Test Protocol" ,
        c: "Hey Transfer Protocol" ,
        d: "Hypertext Transfer Protocol" ,
        ans: "answer4",
    },

    // fourth Question's Part


    {
        question: "Q2:What is the full form of JS?",
        a: "JavaScript",
        b: "javaSuper" ,
        c: "Joy Sarkar" ,
        d: "Jordan Script" ,
        ans: "answer1",
    },


]


// select part 
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');



// function part 

let questionCount = 0;
let score = 0;

const loadQuestion = ()=>{


const questionList = quizDB[questionCount];
question.innerText = questionList.question;

option1.innerText = questionList.a;
option2.innerText = questionList.b;
option3.innerText = questionList.c;
option4.innerText = questionList.d;


}

loadQuestion();

 const getCheckAnswer = () =>{
   let answer ;
   answers.forEach((curAnsElem) =>{
       if(curAnsElem.checked){
           answer = curAnsElem.id;
       }
       
   });
   return answer;
};


// event listner add

submit.addEventListener('click',() => {

const checkedAnswer = getCheckAnswer();
console.log(checkedAnswer);

if(checkedAnswer == quizDB[questionCount].ans){

score++

};
questionCount++ ;
if(questionCount<quizDB.length){
    loadQuestion();
}
else{
showScore.innerHTML = `
<h3> Your Score ${score}/${quizDB.length}</h3>
<button class = "btn" onclick ="location.reload()"> Give Again</button>
`;
showScore.classList.remove('scoreArea');
}
});