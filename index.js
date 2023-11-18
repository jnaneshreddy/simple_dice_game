// alert("welcome to this page");

var randomNumber1 = Math.floor(Math.random()*6)+1;
const image1 = document.querySelector(".img1");
image1.setAttribute("src","./images/dice"+randomNumber1+".png")

var randomNumber2 = Math.floor(Math.random()*6)+1;
const image2 = document.querySelector(".img2");
image2.setAttribute("src","./images/dice"+randomNumber2+".png")

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 player 1 won"

}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="player 2 won 🚩"
    
} else{
    document.querySelector("h1").innerHTML="🚩match draw 🚩"
}



