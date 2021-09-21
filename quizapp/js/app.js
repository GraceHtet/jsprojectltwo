

const quizdatas= [
    {
        question:"What does CSS stand for ? ",
        a:"Central Style Sheet",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Century System Software",
        e:"Control Style Sheet",
        correct:"b"
    },
    {
        question:"What does HTML stand for ?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"Hyperloop Machine Language",
        d:"Hyper Technology Modern Language",
        e:"Higher Market Language",
        correct:"a"
    },
    {
        question:"What year was Javascript Launched ?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"1991",
        e:"None of the above",
        correct:"b"
    },
    {
        question:"Which language runs in a web browser ?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        e:"Php",
        correct:"d"
    }
];
// console.log(quizdatas);

// UI

const quiz=document.getElementById('quiz');
const questionel=document.getElementById('question');
const answerels=document.querySelectorAll('.answer');
// console.log(answerels);

const a_text = document.getElementById('a_text'),
    b_text = document.getElementById('b_text'),
    c_text = document.getElementById('c_text'),
    d_text = document.getElementById('d_text'),
    e_text = document.getElementById('e_text');

const submitbtn = document.getElementById('submit');

let currentquiz = 0;
let score = 0;

// console.log(quizdatas[currentquiz]);


function loadquiz(){

    deselectedanswers();
    
    const currentquizdata = quizdatas[currentquiz];

    questionel.textContent=currentquizdata.question;
    a_text.innerText=currentquizdata.a;
    b_text.innerText=currentquizdata.b;
    c_text.innerText=currentquizdata.c;
    d_text.innerText=currentquizdata.d;
    e_text.innerText=currentquizdata.e;
}
loadquiz();

function getselected(){
    let answer;

    answerels.forEach(answerel=>{
        // console.log(answerel);

        if(answerel.checked){
            answer = answerel.id;
            // console.log(answer);
        }
    });

    return answer;
}

// uncheck
function deselectedanswers(){
    answerels.forEach(answerel=>answerel.checked=false);
}

submitbtn.addEventListener('click',()=>{
    
    const answerselected = getselected();

    if(answerselected){

        if(answerselected === quizdatas[currentquiz].correct){
            score++;
        }

        console.log(score);

        // currentquiz +=1;
        currentquiz++;

        if(currentquiz < quizdatas.length){
            loadquiz();
        }else{
            quiz.innerHTML = `
                <h2>You answered correctly at ${score} / ${quizdatas.length} questions</h2>
                <button class="btn" onclick="location.reload()">Reload</button>
            `
        }
    }
});
