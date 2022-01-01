//----console method
/*
alert("hai selva")
console.log("hai selva");
console.error("hai");
console.warn("hello");
*/

//let,const ---> is a block scope
/*
let age=21;
age=22;
console.log(age);

const name="selva";
name="selva"
console.log(name);
*/

//---Data types---
//String,number,boolean,null,undefined
/*
const name='selva';//string
const age=21;//number
const pi=3.14;//decimal number
const isSmooke=false;//boolean
const x=null;//null
const y=undefined;//undefined
let z;

console.log(typeof name);
console.log(typeof age); port : 5500
console.log(typeof pi);
console.log(typeof isSmooke);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
*/

//concatenation & template string
/*
const name='selva';
const age=21;

//concatenation
console.log("My name is " +name+ " my age is"+age);

// template string
console.log(`my name is ${name} age is ${age}`);
*/

//---Arrays ->variables that hod multiple values
/*
const array=[1,2,3,4,5,6];

array[6]=7;
console.log(array);//1,2,3,4,5,6,7
array.push(8);
console.log(array);//1,2,3,4,5,6,7,8
array.pop();
console.log(array);//1,2,3,4,5,6,7
array.shift(0);
console.log(array);//2,3,4,5,6,7
array.unshift(1);
console.log(array);//1,2,3,4,5,6,7
console.log(Array.isArray(array));//true
console.log(array.indexOf(3));//2

*/

//--Object litereal--
/*
const student={
    firstName:'selva',
    lastName:'manan',
    age:21,
    hobbies:['music','movie','games'],
    address:{
        street:'madakannupatty',
        village:'Avudaiyanoor'
    }
}
console.log(student.firstName,student.lastName,student.hobbies[2],student.address.street);

const { firstName,lastName } = student;
console.log(firstName);

student.email='selvamanan369@gmail.com';
console.log(student);
*/

//--array object
/*
const person1=[
    {
        name:'baskar',
        age:32,
        work:'hosur'
    },
    {
        name:'kar',
        age:22,
        work:'kovai'
    },
    {
        name:'selva',
        age:21,
        work:'avr'
    }
];
console.log(person1[0].age);

const todo1=do1.stringify(person1);
console.log(todo1);
*/

// For
/*
for(let i=0;i<=10;i++)
{
    console.log(`for loop ${i}`);
}

//while

let x=10
while(x<=20){
    console.log(`while loop ${x}`);
    x++;
}
*/


//for of
/*
const person1=[
    {
        name:'baskar',
        age:32,
        work:'hosur'
    },
    {
        name:'kar',
        age:22,
        work:'kovai'
    },
    {
        name:'selva',
        age:21,
        work:'avr'
    }
];

*/
/*
for(let person of person1){
    console.log(person.age);
}
*/

//foreach,map,filter
/*
person1.forEach(function(person)
{
    console.log(person.name);
});
*/
//map
/*
const personName =person1.map(function(person){
return person.name
});
console.log(personName);
*/
//filter
/*
const person2=person1.filter(function(person){
    return person.isCompleted ===true;
});
console.log(person2);
*/


//elseif
/*
let mark1 = 50;

if (mark1 === 50) {
    console.log('100');
}else if (mark1 >50) {
    console.log('b gra');

}else {
    console.log('c gr');
}
*/


//condition Switchcase
/*
const a=21;
const vote=a>18?'eligible':'not eligible';
console.log(vote);

switch(vote){
    case "eligible":
    console.log('voteis');
    break;
}
*/

//function----
/*
const number=1;
const number2=4;

function add(number,number2){
    return number+number2;
}
console.log(add(number,number2));

//es6 function latest function

const addnums=(number2=3,number=1)=>{
    return number2+number;
}
console.log(addnums(5,5));

//function
const addnums1=(number2=3,number=1)=>
    console.log(number2+number);

addnums1(5,6);
*/


//---constructer function-----

function Person(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}
//instantiate object

const person1=new Person('selva','maan',21);
console.log(person1);