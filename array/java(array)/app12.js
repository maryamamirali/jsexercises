

//g. Ask the user at which index he/she wants to delete 
//color(s) & how many colors he/she wants to delete. Then 
//remove the same number of color(s) from user-defined
//position/index. . Display the updated array in your 
//browser
const colors = ["red" , "blue" , "green", "yellow" , "pink" ,"black" , "purple"]
colors.unshift("purple")
console.log(colors);


const pushcolor = ["red" , "blue" , "green", "yellow" , "pink" ,"black" , "purple"]
pushcolor.push("yellow")
console.log(pushcolor);


const addcolor = ["red" , "blue" , "green", "yellow" , "pink" ,"black" , "purple"]
addcolor.unshift("white" , "grey")
console.log(addcolor);


const delcolor = ["red" , "blue" , "green", "yellow" , "pink" ,"black" , "purple"]
delcolor.shift()
console.log(delcolor);


const dellastcolor = ["red" , "blue" , "green", "yellow" , "pink" ,"black" , "purple"]
dellastcolor.pop()
console.log(dellastcolor);


const addrmvcolor = ["red" , "blue" , "green", "yellow" , "pink" ,"black" , "purple"]
addrmvcolor.splice("1" , "2" , "golden")
console.log(addrmvcolor);