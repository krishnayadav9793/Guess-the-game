let num=Math.floor(Math.random()*100);
let count=0;
// console.log(num)
const btn=document.querySelector(".submit-btn");
const submit=document.querySelector(".input");
const massage=document.querySelector("#hint");
const result=document.querySelector(".result");
const score=document.querySelector("#score");
const resetbtn=document.querySelector("#reset");
btn.addEventListener("click",()=>{
    let num1=submit.value;
    if(num1=="")massage.textContent="Please enter a number";
    else if(num>num1){
        massage.textContent="number is samller then the number";
        count++;
    }else if (num<num1){
        massage.textContent="number is greater then the number"
        count++;
    }else {
        result.style.opacity=1;
        // result.style.pointerevents=all;
        score.textContent=`Your score ${100-count}`;
        resetbtn.style.background="lightblue";
        resetbtn.style.position="fixed";
        resetbtn.style.bottom="0.5rem";
    }
    btn.textContent=count;
})

const resetGame=()=>{
    count=0;
    num=Math.floor(Math.random()*100);
    resetbtn.style.position="static";
    resetbtn.style.background="white";
    btn.textContent="submit";
    submit.value="enter number";
    massage.textContent="Enter number to start";
    // result.style.pointerevents=none;
    result.style.opacity=0;
}





