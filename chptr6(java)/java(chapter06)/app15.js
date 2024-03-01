



//task-15

var time = prompt ("what's the current hour is?")

function task15(){
if(time == '18' || time == '19' || time == '20' || time == '21' || time == '22'){
console.log("Breakfast is served");
}else if(time == '23' || time == '24' || time == '13'){
    console.log("Time for lunch");
}else if(time == '17' || time == '18' || time == '19' || time == '20'){
    console.log("It's dinner time");
}else{
    console.log("Sorry, you'll have to wait, or go get a snack.");
}
}

task15(time)