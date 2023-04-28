const decreBtn = document.getElementById("decrement");
const increBtn = document.getElementById("increment");
const value = document.getElementById("value");
const resetBtn = document.getElementById("reset");
let count=0;

increBtn.addEventListener("click",() =>{
    count++;
    value.innerHTML=count;
});

decreBtn.addEventListener("click",() =>{
    count--;
    value.innerHTML=count;
});

resetBtn.addEventListener("click",() =>{
    count=0;
    value.innerHTML=count;
})
