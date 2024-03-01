
//Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.



//task-05

var num1;
num1 = prompt ("enter num1")

var num2;
num2 = prompt ("enter num1")

var operator;
operator = prompt ("enter an operator")

function task05(num1, num2, operator){
    if(operator != '+' && operator != '-' && operator != '*' && operator != '/'){
        console.log("you can't do this calculation");
    }else{
        console.log("do the calculation");
    }
}

task05(num1, num2, operator)