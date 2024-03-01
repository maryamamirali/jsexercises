



//task-07

var _num1 = +prompt("enter a number")
var _num2 = +prompt("enter a number")

var operation = prompt("enter any operation")

function num3(_num1 , _num2 ,operation){
    if(operation != "+" && operation != "-" && operation != "*" && operation != "/"){
        console.log("null");
    }else{(console.log("calculate"));}
}

num3(_num1,_num2,operation)