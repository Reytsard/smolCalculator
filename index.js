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
function operate(buttonValue,a,b){
    switch(buttonValue){
        case '+': 
                    return add(a,b);
        case '-': 
                    return subtract(a,b);
        case '*':   
                    return multiply(a,b);
        case '/':  
                    return divide(a,b);
    }
}
//main
let display = document.querySelector('.screen');
let buttons = document.querySelectorAll('button');
let a = 0;
let b = 0;
let operatorUsed;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.value == '-' || button.value == '+' || button.value == '*' || button.value == '/' ){
            a = Number.parseFloat(display.textContent);
            display.textContent = '';
            operatorUsed = button.value;
        }else if(button.value == '0' || button.value == '1' || button.value == '2' || button.value == '3' || button.value == '4' || button.value == '5' || button.value == '6' || button.value == '7' || button.value == '8' || button.value == '9'){
            display.textContent += button.value;
        }else if(button.value == 'Clear'|| button.value =='Reset'){
            switch(button.value){
                case 'Reset' : display.innerHTML = "";
                                a=0;
                                b=0;
                                break;
                case 'Clear' : display.textContent = removeLastIndex(display);
                                break;
            }
        }else if(button.value == '(-)'){
                display.textContent += '-';
        }else if(button.value == '.'){
            display.textContent += '.';
        }else if(button.value == '='){
            b = Number.parseFloat(display.textContent);
            display.textContent = operate(operatorUsed,a,b);
        }
    })
});