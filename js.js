let k=document.getElementById("result")
function validate(value){
    k.textContent=k.textContent === "0"?value:k.textContent+value;
}
function clearResult(){
    k.textContent='0'
    console.log(k.textContent)
}
function calculate(){
    k.textContent=eval(k.textContent)
    console.log(k.textContent)
   
}

