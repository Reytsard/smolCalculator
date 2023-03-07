//functions
function removeLastIndex(display){
    let string = display.textContent;
    return string.slice(0,string.length - 1);
}
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
//main
let display = document.querySelector('.screen');
let buttons = document.querySelectorAll('button');
let a = 0;
let b = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.value == '-' || button.value == '+' || button.value == '*' || button.value == '/' ){
            switch(button.value){
                case '+': display.textContent = add(a,b);
                          break;
                case '-':      
            }
        }else if(button.value == '0' || button.value == '1' || button.value == '2' || button.value == '3' || button.value == '4' || button.value == '5' || button.value == '6' || button.value == '7' || button.value == '8' || button.value == '9'){
            display.textContent += button.value;
        }else if(button.value == 'Clear'|| button.value =='Reset'){
            switch(button.value){
                case 'Reset' : display.innerHTML = "";
                case 'Clear' : display.textContent = removeLastIndex(display);
            }
        }
    })
})