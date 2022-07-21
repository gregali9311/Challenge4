console.log("Here we are")

// localStorage.clear();

var button = document.querySelector("#start")
var header = document.querySelector("#question")
var par = document.querySelector("p")
var div =document.querySelector("#thisdiv")
var ul = document.querySelector("ul")
var correctpic = document.querySelector("#correctpic")
var incorrectpic = document.querySelector("#incorrectpic")
var questionumb=[1,2,3]
var bothimages = document.querySelector(".image")

var answer1 = document.createElement("button")
var answer2 = document.createElement("button")
var answer3 = document.createElement("button")
var answer4 = document.createElement("button")
var newnext =document.createElement("button")
var newnext2 =document.createElement("button")
var newnext3 =document.createElement("button")
var correct = document.createElement("p")

var points =0;
var resultsarray= [];



answer1.className ="respbutton";
answer2.className ="respbutton";
answer3.className ="respbutton";
answer4.className ="respbutton";
newnext.className ="respbuttonnext";
newnext2.className = "respbuttonnext";
newnext3.className = "respbuttonnext";

newnext.style.display="none";
newnext2.style.display="none";
newnext3.style.display="none";

answer1.id ="button2";
answer2.id ="button2";
answer3.id ="button2";
answer4.id ="button2";

var questionarray =["What is your favorite color?","How many cars are in Manhatten?","What is 50 divided by 2?"]
var questionnumb =[1,2,3,]
var questanswer1 =["blue","black","orange","green",5,266,"4,578",19,4,69,420,25]
// var questanswer2 =[5,266,12345345,19]
// var questanswer3 =[4,69,420,126267267672.5]

var answerarray =["'answer1'","'answer2'","'answer3'","'answer4'"]


for( i=0; i<questionnumb.length; i++){
    
}







button.addEventListener("click" , function (){
    button.textContent="Next";
    header.innerHTML="You are on question number " + questionnumb[0];
    par.innerHTML=questionarray[0];
    ul.appendChild(answer1)
    ul.appendChild(answer2)
    ul.appendChild(answer3)
    ul.appendChild(answer4)
    answer1.innerHTML= questanswer1[0];
    answer2.innerHTML= questanswer1[1];
    answer3.innerHTML= questanswer1[2];
    answer4.innerHTML= questanswer1[3];
    button.style.display ="none";
    div.appendChild(newnext);
    newnext.style.display ="block";
    newnext.textContent = "Next";
    
});



newnext.addEventListener("click" , function (){
    header.innerHTML="You are on question number " + questionnumb[1];
    par.innerHTML=questionarray[1];
    ul.appendChild(answer1)
    ul.appendChild(answer2)
    ul.appendChild(answer3)
    ul.appendChild(answer4)
    answer1.innerHTML= questanswer1[4];
    answer2.innerHTML= questanswer1[5];
    answer3.innerHTML= questanswer1[6];
    answer4.innerHTML= questanswer1[7];
    newnext.style.display ="none";
    div.appendChild(newnext2);
    newnext2.style.display ="block";
    newnext2.textContent = "Next";
    correctpic.style.visibility="hidden";
    incorrectpic.style.visibility="hidden";
});



newnext2.addEventListener("click" , function (){
    header.innerHTML="You are on question number " + questionnumb[2];
    par.innerHTML=questionarray[2];
    ul.appendChild(answer1)
    ul.appendChild(answer2)
    ul.appendChild(answer3)
    ul.appendChild(answer4)
    answer1.innerHTML= questanswer1[8];
    answer2.innerHTML= questanswer1[9];
    answer3.innerHTML= questanswer1[10];
    answer4.innerHTML= questanswer1[11];
    newnext2.style.display ="none";
    div.appendChild(newnext3);
    newnext3.style.display ="block";
    newnext3.textContent = "Submit Quiz";
    correctpic.style.visibility="hidden";
    incorrectpic.style.visibility="hidden";
});


newnext3.addEventListener("click", function(){
    alert("Your score was " + points)
}
);



answer1.addEventListener("click", function(){
    resultsarray.push(answer1.textContent);
    alert(answer1.textContent);
    if( resultsarray == ['blue'] ){
        points++;
        correctpic.style.visibility="visible";
        resultsarray.pop();
        
    } else {
        incorrectpic.style.visibility="visible";
    };
  
});

answer2.addEventListener("click", function(){
    resultsarray.push(answer2.textContent)
    if( resultsarray[0]="266"){
        points++;
        // correctpic.style.visibility="visible";
        resultsarray.shift();
        
    } else {
        incorrectpic.style.visibility="visible";
    }
  
}
);



answer2.addEventListener("click", function(){
    resultsarray.push(answer2.innerHTML)
}
);

answer3.addEventListener("click", function(){
    resultsarray.push(answer3.innerHTML)
}
);

answer4.addEventListener("click", function(){
    resultsarray.push(answer4.innerHTML)
}
);

console.log(resultsarray);


// function nextquestion()
// for( var i=0; i<questionnumb.length; i++){
//     newnext.addEventListener("click", {
//         header.innerHTML="You are on question number " + questionnumb[i];
//         par.textContent=questionarray[i];
//         console.log(questionnumb[i]);
//     });
// };




// var elements = document.querySelectorAll(".respbutton")

// elements.forEach(element => {
//     element.addEventListner('click', (e)=>{
//       console.log('someone hit me');
//     });
//  });


// elements.forEach(element => {
//     element.addEventListener("click", (e)=>{
//         console.log("button pressed")
//     });
// });


// for ( i=0; i<answerarray.length; i++){
//     answerarray.length[0].addEventListener("click", function (){
//         alert("button clicked")
//     })
// }

// buttons = document.getElementsByName("button2");
// console.log(buttons.length)
// for( var i=0; i<buttons.length; i++){
//     buttons[i].addEventListener("click", function() {
//         alert("buttonclicked");

//     });
// }


// for( i=0;i<=questionumb.length; i++ ){
        
// }
// for( var i=0; i<answerarray.length; i++){
//     answer1.addEventListener("click",function(){
//         window.localStorage.setItem(answerarray[i],JSON.stringify(answer1.innerHTML))
//     });
//     answer2.addEventListener("click",function(){
//         window.localStorage.setItem(answerarray[i],JSON.stringify(answer2.innerHTML))
//     });
//     answer3.addEventListener("click",function(){
//         window.localStorage.setItem(answerarray[i],JSON.stringify(answer3.innerHTML))
//     });
//     answer4.addEventListener("click",function(){
//         window.localStorage.setItem(answerarray[i],JSON.stringify(answer4.innerHTML))
//     });
// };