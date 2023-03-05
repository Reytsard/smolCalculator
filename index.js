//main
let display = document.querySelector('#Screen');
console.log(display.innerHTML);
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click',() => {
        button.value == "Reset" ? display.innerHTML = "" :
        button.value == "Clear" ? /*add a function here to remove last index of string:*/ function() {}:
        display.innerHTML = display.textContent.trim()+button.value;
    }) 
});

console.log(buttons);
//functions
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b != 0){
        return a/b;
    }
    return "ERROR";
}
function operate(operator,a,b){
    switch(operator){
        case 'add': add(a,b);
                    break;
        case 'subtract': subtract(a,b);
                         break;
        case 'multiply': multiply(a,b);
                         break;
        case 'divide': divide(a,b);
                       break;
        default: ;
    }
}