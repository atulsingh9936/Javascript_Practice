// 1. every():
let num =[1,2,3,4,5,30];
let flag =num.every((e)=> e<10);
console.log(flag);

// 2. some():

let number = [1,2,3,4,5];
let fg = number.some((e)=>e%2==0 );
console.log(fg);

// 3. find()
let total = [1,2,3,7,9];
let fe = total.find((e)=>e%2==0);
console.log(fe);

// 4. indexof()

let arry=['apple','banana','mango','pear'];
let index_of_str=arry.indexOf('mango');
console.log("index of orange:", index_of_str);

// 5. lastindexof()

let fruits=['apple','banana','mango','pear','apple'];
let lastApple =fruits.lastIndexOf('apple');
console.log(lastApple);

// 6. reverse()

let frts=['apple','banana','mango','pear'];
let revfruits=frts.reverse();
console.log(revfruits);

// 7. sort():

let products=['macbook','imac','canon','samsung','123test','Tshirt'];
let prosort=products.sort();
console.log(prosort);


