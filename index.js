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
function operate(button,a,b){
    switch(button.value){
        case '+': 
                    a = Number.parseFloat(display.textContent);
                    display.textContent = '';
                    display.textContent = add(a,b);
                    break;
        case '-': 
                    a = Number.parseFloat(display.textContent);
                    display.textContent = '';
                    display.textContent = subtract(a,b);
                    break;
        case '*':   b = 1;
                    a = Number.parseFloat(display.textContent);
                    display.textContent = '';
                    display.textContent = multiply(a,b);
                    a = Number.parseFloat(display.textContent);
                    break;
        case '/':   b = 1;
                    display.textContent = divide(a,b);
                    a = Number.parseFloat(display.textContent);
                    break;
        default: display.textContent = '';
    }
}
//main
let display = document.querySelector('.screen');
let buttons = document.querySelectorAll('button');
let a = 0;
let b = 0;
let answer = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.value == '-' || button.value == '+' || button.value == '*' || button.value == '/' ){
            operate(button,a,b);
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
                display.textContent = Number.parseFloat(display.textContent) * -1;
        }else if(button.value == '.'){
            display.textContent += '.';
            button.setAttribute('disabled','');
        }
    })
});