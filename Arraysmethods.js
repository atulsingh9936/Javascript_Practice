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

// 2. filter

let num = [1,2,3,4,5,6,7,8,9,10];
let evenNum = num.filter((e) => e%2 ==0);
console.log(evenNum);


let employee= [
    {name :"john",age :21, gender:"male"},
    {name :"atul",age :51, gender:"male"},
    {name :"anuska",age :71, gender:"female"},
    {name :"sriya",age :25, gender:"female"},
    {name :"anuj",age :79, gender:"male"},
    ];

   let femaleEmpOver30= employee.filter((emp)=>{
        return( emp.gender=="female" && emp.age>30);
    });

    console.log(femaleEmpOver30);


    // 3. reduce
    let numb =[1,2,3,4,5];
    let sum = numb.reduce((acc, num)=> acc+num,0);
    console.log(sum);

    let top =[10,5,25,8,30,15];
  let maxnum=  top.reduce((max,num)=>{
        if(num>max){
            return num;
        }
        else{
            return max;
        }
        
    }, top[0]);

console.log(maxnum);

// cart:name, price

let cartItems=[
    {name:"jeans", price:500},
    {name:"Shirt", price:300},
    {name:"Shoes", price:1000},
    {name:"Hat", price:100},
    {name:"Tshirt", price:400},
];


let totalcost =cartItems.reduce((total, item)=>total+item.price,0);
console.log(totalcost);