console.log("stirb");
const el = document.getElementById("playtangle");
console.log(el)
setTimeout(()=>{
    el.style.opacity = "100";
    console.log("fml");
}, 2000);

el.addEventListener("click", alerting);

function alerting() {
  alert ("You win");
}


