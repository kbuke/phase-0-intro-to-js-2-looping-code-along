// Code your solutions in this file

//In index.js, build a function named writeCards() 
//It accepts two arguments: an array of string names, and an event name. 
//Create a for loop with a counter that starts at 0 and increments at the end of each loop. 
//The for loop should stop once it has iterated over the length of the array.
//Create a custom message for each name inside the loop
//Collect them in a new array and return this array at the end of the function (how to add an element to an array.) 
function writeCards(family, event){
    //If we went nondestructive we'd put let thankYou = []
    const thankYou = [] //create empty array outside loop 
    for (let i = 0; i < family.length; i++){
        //If doing nondestructive put "thankYou = {...thankYou, (`Thank you, ${family[i]}, for the wonderful ${event} gift!`)}"
        thankYou.push(`Thank you, ${family[i]}, for the wonderful ${event} gift!`)  
    }
    return thankYou
}

//Write a function, countDown.
//Takes in any positive integer and, starting from that number, counts down to zero using console.log(). 
//Note that this means that running countDown(10); would actually log 11 times:
function countDown(positive){
    while (positive >= 0) {
        console.log (positive);
        positive--;
    }
    return positive;
    }