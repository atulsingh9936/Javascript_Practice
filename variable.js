// 1. var: old way
// functionally/locally + global scope


var x =10;
function test(){
    var y =120;
}
//console.log(y);
console.log(x);

var pop = "hi js";
function rel(){
    var top ="hello js"
     console.log(top);
}
rel();
console.log(pop);


var browser ="chrome";
var browser = "firefox";
browser= "edge";
console.log(browser);




var g;
console.log(g); // undefined
g = "hello world"
console.log(g); //


// issue ith var 

var flag = " hey naveen";
var t1 = 4;
if (t1>3){
    var flag="hey tom"
}
console.log(flag);


//let  
// scope: block scoped
//{}
let m = "hey naveen";
let time = 4;
if(time>3){
    let mesg ="hey hw r u ?";
    console.log(mesg);
}
//console.log(mesg);
console.log(m);
//const


// var len =4;
// let len =5;

let len =4;
len =5; // reintialize is possible with let but cannot be redeclared
console.log(len);

// const 
const mg = "hey Naveen";
//mg = "hey tom"
console.log(mg);

const days= 7;
//days=10;
console.log(100 * days);

// var p;
// console.log(p);

// let p;
// console.log(p);

const p=10;
console.log(p);






   
