
var a =document.querySelector(".b").value;



var b  = Math.floor(Math.random()*99 +1);


document.querySelector(".a").addEventListener("click",handleClick());

function handleClick(){
  if(a===b){
    alert(" Congratulations!!you have guessed the number"+a+"successfully");
  }else{
    alert(" you have guessed the number incorrectly try again");
  }
}
