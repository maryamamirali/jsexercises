



//task-08

var time;
time = prompt("enter an hour from 24 hours");

function task08(){
    if(time >= 0000 && time <= 1200){
console.log("good morninng");
    }else if (time >= 1200 && time <= 1700){
console.log("good afternoon");
    }else if(time >= 1700 && time <= 2100){
console.log("good evening");
    }else if(time >= 2200 && time <= 2359)
{console.log ("good night");
    }
}

task08(time);