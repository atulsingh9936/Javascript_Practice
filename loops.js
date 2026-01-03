// for loop
//1 to 10

for(let i=1; i<=10; i++){
    console.log(i);
}

console.log("---------")

// for... of loop

const array =[1,2,3,4,5]; // 0 to 4
for(const e of array){
    console.log(e);
}

console.log("---------")

for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

// while : 1 to 10

let p=1;
while(p<=10){
    console.log(p); //1
    p++;
}
console.log("-------")
let l =2;
while(l<=100){
    console.log(l); //2,4,6,8,10
    l=l+2;
}

console.log("--------")
// do while:
let h =1;
do{
    console.log(h);
    h++;
}
while(h<=10);

console.log("----------");

// break:
// 1 to 100: print the hi when you see the multiplication of 5 and break:
let num =5;
while (num<=100){
    console.log(num);
    if(num%5==0){ // 5%5 ==0
        console.log("hi -- bye");
        break;
        
    }
    num++;
}

console.log("-------")

const browser =["chrome","firefox","edge","IE"];
for(const e of browser){
   // console.log(e);
    if(e=="edge"){
        console.log("launch edge.....");
        break;
    }
}


// for ....in loop on object:

console.log("-------")

const user ={
    name: "John Doe",
    age :30,
    city : "New york City",
}
for(const key in user){
    console.log(key+ " : "+user[key]); // user[name]
}


console.log("-------")
const br = ["chrome","Firefox", "edge","IE"];
for(const ele in br){
    console.log(ele +":"+ br[ele]);
}


