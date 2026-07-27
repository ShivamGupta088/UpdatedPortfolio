// Loader

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

loader.style.display="none";

});

// Scroll Top Button

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Scroll Progress

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progressBar").style.width=scrolled+"%";

});

// Simple Typing Effect

const words=["Full Stack Developer","Web Designer","BCA Student","Programmer"];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function typing(){

const element=document.querySelector(".typing");

if(!element) return;

current=words[i];

if(isDeleting){

element.textContent=current.substring(0,j--);

}else{

element.textContent=current.substring(0,j++);

}

if(!isDeleting && j===current.length+1){

isDeleting=true;

setTimeout(typing,1200);

return;

}

if(isDeleting && j===0){

isDeleting=false;

i=(i+1)%words.length;

}

setTimeout(typing,isDeleting?60:120);

}

typing();

// Cursor Glow

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

// Theme

const theme=document.querySelector(".theme-btn");

theme.onclick=()=>{

document.body.classList.toggle("light");

};

// Mobile Menu

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("active");

};

// Scroll Reveal

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveals.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-120){

sec.classList.add("active");

}

});

});