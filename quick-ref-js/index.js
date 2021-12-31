
   // const place = "hello";
   // const work = "world";

//console.log("%s,%s",place,work)

//vs
/*
    console.log(`${place} ${work}`);

//### Reverse value

    let value = "reverse vale";
    let revervalue = "";
    value.split("").forEach((char) => {
    revervalue = char + revervalue;
    });
    console.log(revervalue);
*/


//####Concatenation
/*
    let str1 = "hello";
    let str2 = "selva";
    console.log(`the name ${str1} iam ${str2}`);
*/
//typeof & instanceof

/*
    const studend = ["selva", "aakash", "vel"];
    const age =new Number(21);
    const name = new String("krthi");
    const b = false;
    const best = {
    firstName:"bass",
    age: 32
    }

    function hai(best) {
    console.log("the best name" + best.name, +best.age);
    }


    console.log("----type of---");
    console.log(typeof studend);
    console.log(typeof age);
    console.log(typeof name);
    console.log(typeof b);
    console.log(typeof best);
    console.log(typeof hai);

    console.log("---Instance of---");
    console.log(studend instanceof Array);
    console.log(age instanceof Number);
    console.log(name instanceof String);
    console.log(b instanceof Boolean);
    console.log(best instanceof Object);
    console.log(hai instanceof Function);
    console.log();
*/

//basic math
/*
const num1=100;
console.log("--basic math--");
console.log(num1 + 10);
console.log(num1 - 5);
console.log(num1 * 2);
console.log(num1 / 20);


console.log("----Additon mathematical operation---");
console.log(num1 % 1500);
//console.log(--num1);
//console.log(++num1);

console.log("----math object---");
console.log(Math.PI);
console.log(Math.sqrt(num1));

*/


// converting string to integer
/*
let num2 ='200';

console.log(parseInt('100'));
console.log(parseInt(num2));
console.log(parseInt('ABC'));
console.log(parseInt('0xf'));//hexadecimal

console.log(typeof num2);

*/

// conver to string to float

/*
let num2='1.50'
console.log(parseFloat('1.00'));
console.log(parseFloat('1.50'));
console.log(parseFloat('ABC'));
*/

//----Variable----
/*

var name="karthi";
name="ravi";

console.log(`the  name,${name}`); 

let age=21;
age=12;
console.log("age",age);

const male="male";
female="female";
console.log("geder",male);

*/


/*
//--Initialize these three variables--
var a=10;
var b=5;
var c="selva";

//do not change code below this line

a= a+1;
b=b+5;
c=c+"my name";
console.log(a,b,c);

*/

//---Case Sensitivity in Variables--
/*
let firstName;
let lastName;
let itAge;


firstName="selva";
lastName="manan";
itAge=21;
*/

//----Escaping Literal Ouotes---
/*
var myStr="I am selva \n \"age 21\" i from \"avudaiyanoor\"";

console.log(myStr);
*/



//---find the nth chracter
/*
var firstName="selvamanan";
var thirdLastLetterOfFirstName=firstName[firstName.length+9];
console.log(thirdLastLetterOfFirstName);
*/

//---modified array--
/*
var myArray=[10,20,30];
myArray[1]=22;
console.log(myArray);

*/

//--array multi dimensional arrays---
/*
var myArray=[[1,2,3],[4,5,6],[[7,8,9[10,11,12]]]];
var myData=myArray[2,1][2];
console.log(myData);
*/

//---Array Push----
/*
var myArray=["apple","banana","orange"];
newArray=myArray.push(["lemon","graphes"]);
console.log(myArray);
*/

//---Array pop---
/*
var myArray=[1,2,3];
var removedFromArray=myArray.pop();
console.log(myArray);

var ourArray=[[1,2],[3,4]];
var ourDeleteArray=ourArray.pop();
console.log(ourArray);
*/

//---shift array---
/*
var myArray=[1,2,[3,4]];
var shifftArray=myArray.shift();
console.log(myArray);

*/

//---unshift array---
/*
var ourArray=["hai","s","kar"];
ourArray.shift();
console.log(ourArray);
ourArray.unshift("le");

console.log(ourArray);
*/

//---global scope and function

