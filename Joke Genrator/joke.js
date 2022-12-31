/*
const joketext=document.querySelector('joke-text');

const newjokebtn =document.querySelector('btn');

newjokebtn.addEventListener('click',getjoke);

getjoke();

function getjoke(){
    console.log("hi this is noor");
}
*/

var joke = {
    createJoke1:function(){
        document.getElementById("joke-text").innerHTML="How is my 1st joke";
    },
    createJoke2:function(){
        document.getElementById("joke-text").innerHTML="How is my 2nd joke";
    },
    createJoke3:function(){
        document.getElementById("joke-text").innerHTML="How is my 3rd joke";
    },
    createJoke4:function(){
        document.getElementById("joke-text").innerHTML="How is my 4th joke";
    },
    createJoke5:function(){
        document.getElementById("joke-text").innerHTML="How is my 5thjoke";
    }
};

document.addEventListener('click',joke-text);