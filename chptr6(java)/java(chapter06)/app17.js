



//task-17

var alp = prompt("enter a vowel.")
if(alp.length > 1){
    alp.log('you have to enter only one character');
}else if(alp === "a" || alp === "e" || alp === "i" || alp === "o" || alp === "u"){
    console.log("true");
}else{
    console.log("false");
}