let marks=0;
let questionlist=0;
let btn=document.querySelector("button");

let question=[
    {
        'quest': "which of the following is markep language",
        'a':"HTML",
        'b':"CSS",
        'c':"JS",
        'd':"PHP",
        'corrent':"a"
    },
    {
        'quest': "full name of CSS",
        'a':"cascading style sheet",
        'b':"Casdae style",
        'c':"c sheet",
        'd':"casde style",
        'corrent':"a"
    },
    {
        'quest': "which of the following is markep language",
        'a':"HTML",
        'b':"CSS",
        'c':"JS",
        'd':"PHP",
        'corrent':"a"
    },
    {
        'quest': "which  the following is markep language",
        'a':"HTML",
        'b':"CSS",
        'c':"JS",
        'd':"PHP",
        'corrent':"a"
    }
];


btn.addEventListener("click",(event)=>{
    checkAnswer();
}) 

function checkAnswer(){
let ans=document.getElementsByName("select");
    let checkradio;
    for(let i=0;i<ans.length;i++)
    {
     if(ans[i].checked)
     {
         checkradio=ans[i];
         break;
     }
    }
    let answer;
    question.forEach((element,index)=>{
        answer=element.corrent;
    })
    if(checkradio.value==answer)
    {
       marks++;
    }
   else if(questionlist>=question.length)
    {

        // alert("your marks is "+ marks+"/"+question.length);
        return;
    }
    questionlist++;
    checkradio.checked=false;
    quiz();
}
function quiz(){
     let problem=document.querySelector(".container > input");
     let currentquestion=question[questionlist];
        problem.value=`${questionlist+1}`+") "+ currentquestion.quest;
        let option=document.querySelectorAll(".container .option :nth-child(3)");
        option[0].value=currentquestion.a;
        option[1].value=currentquestion.b;
        option[2].value=currentquestion.c;
        option[3].value=currentquestion.d;
}

quiz();



