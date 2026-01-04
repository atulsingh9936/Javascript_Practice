//1. map:
let numbers =[1,2,3];
let doubleNumbers = numbers.map((e) => e*2);
console.log(doubleNumbers);



// F -> C 
// (F-32) * (5/9)

let fahtemp=[32,68,86,104,212];

function fahToCel(fah){
    return(fah-32)*(5/9);
}

let celTemp =fahtemp.map(fahToCel);
console.log(celTemp);