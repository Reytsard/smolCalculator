//main
let display = document.querySelector('#Screen');

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