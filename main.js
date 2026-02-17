const num=document.querySelector(".display")
const equal=document.querySelector(".equal");
const dot=document.querySelector(".dot");
const clear=document.querySelector(".clear");
const zero=document.querySelector(".zero");
const one=document.querySelector(".one");
const two=document.querySelector(".two");
const three=document.querySelector(".three");
const four=document.querySelector(".four");
const five=document.querySelector(".five");
const six=document.querySelector(".six");
const seven=document.querySelector(".seven");
const eight=document.querySelector(".eight");
const nine=document.querySelector(".nine");

//onclicks
zero.onclick=()=>{
num.innerHTML+=0;
}
one.onclick=()=>{
    num.innerHTML+=1;
}
two.onclick=()=>{
    num.innerHTML+=2;
}
three.onclick=()=>{
    num.innerHTML+=3;
}
four.onclick=()=>{
num.innerHTML+=4;
}
five.onclick=()=>{
    num.innerHTML+=5;
}
six.onclick=()=>{
    num.innerHTML+=6;
}
seven.onclick=()=>{
    num.innerHTML+=7;
}
eight.onclick=()=>{
num.innerHTML+=8;
}
nine.onclick=()=>{
    num.innerHTML+=9;
}
dot.onclick=()=>{
    num.innerHTML+=".";
}
equal.onclick=()=>{
    let value=Number(num.innerHTML);
    let result=value/1.95583;
    num.innerHTML=result.toFixed(2) + " " + "Euro";
}
clear.onclick=()=>{
    num.innerHTML="";
}

