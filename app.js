const dice=document.getElementById("dice")

const text=document.querySelector(".text")
const advicenum=document.getElementById("advicenum")


dice.addEventListener("click", function(){
    getAdvice();
});

function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(response=>response.json())
    .then((data)=>data.slip)
    .then((data)=>{
    advicenum.textContent=data.id;
    text.textContent='\"'+data.advice+'\"';
    })
}

