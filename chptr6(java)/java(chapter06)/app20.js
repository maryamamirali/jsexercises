//20. Use a conditional (ternary) operator for this exercise:
//If the variable age is a value below 18, the value of the variable 
//voteable should be "Too young",
//otherwise the value of voteable should be "Old enough"



//task-20


var age;
age = prompt("enter your age")

function varage(age){
if(age < 18){
console.log("too young");
}else {
    console.log("old enough");
}
}


varage(age)