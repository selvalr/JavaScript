//----console method
/*
alert("hai selva");//alert box

prompt();//alert box texting value
console.log(no);
console.log("hai selva");
console.error("hai");
console.warn("hello");
console.write('hai');

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

//number in js incement & Decrement
/*
let a=5;
a++;
a--;
console.log(a+5);
*/

//---Data types---
//String,number,boolean,null,undefined
/*
const name='selva';//string
const age=21;//integer number
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

//----function----
// create a function --->var no=function calMy()=>{}
// call the function --->calMy();
/*
const fullName=(firstName)=>{
    console.log('my name '+name);
}
const name=prompt('enter youjr name');
fullName(name);
*/
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

//function arquement
const addnums1=(number2=3,number=1)=>
    console.log(number2+number);

addnums1(5,6);

*/



//---constructer function-----
/*
function Person(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}
//instantiate object

const person1=new Person('selva','maan',21);
console.log(person1);
*/


//---while loop----
/*
let no1 = 1;

while (no1 < 100) {
    no1 += 10;
    console.log('no',no1);
}
*/

//---string method in javascript--
/*
let actorName='Ajith';
let lastName='kumar';
let actorHobbies="Ajithkuar,bike racing,aero modeling";
console.log(actorName.length);//10
console.log(lastName.indexOf('ar'));
console.log(actorHobbies.slice(10));//i
console.log(actorHobbies.substring(3,8));//thkuma
let newName=actorName.replace('Ajith','ThalaAjth');//ThalaAjith
console.log(' ',newName);
console.log(actorName.toLowerCase());//ajith
console.log(actorName.toUpperCase());//AJITH
console.log(actorName.charAt(4));//h
console.log(actorName.split(','));//split by commma
console.log(actorName.split(''));//split by character
*/
/*
let number = ['1', '2', '3', '4', '5', '6', '7'];
number = new Array('1', '2', '3', '4','5', '6', '7');
console.log(number[2]);//3
//array common method

console.log(number.toString());//1,2,3,4,5,6,7
console.log(number.join('-'));//1-2-3-4-5-6-7
console.log(number.pop(),number);//remove last item
console.log(number.push('8'),number);//appends

console.log(number.shift());//remove first element delete from a array
console.log(number);

console.log(number.unshift('1'));//add first element to a array
console.log(number);

let vegtable=['tomoto','ginger','bdvbjdbj'];
let allAcp=number.concat(vegtable);
console.log(allAcp);//['1','2','3','4','5','6','8','tomoto','giegr','bdd']
console.log(allAcp.slice(1,5));//['2','3','4','5']
console.log(allAcp.reverse());//reverse no
console.log(allAcp.sort());//arrange a value
console.log(allAcp.sort(function(a,b){return a-b}));//sort is ascending order
console.log(allAcp.sort(function(a,b){return b-a}));//sort is decending order

*/
/*
let capArray=new Array();
for(let i=1;i<10;i++){
   capArray.push(i);
}
console.log(capArray);
*/
//---Object---
/*
let schlName={
    name:'punitha arullaper',
    place:'Avudaiyanoor',
    pincode:627808,
    studenInfo: function(){
        return this.name +'\n' + this.place;
    }
}
//console.log(schlName.name);
schlName.name='TDTA';
console.log(schlName.name);
schlName.pincode++;
console.log(schlName.pincode);
console.log(schlName.studenInfo());

*/

//---Conditioals control flows (if else)
/*
let no2=prompt('enter a no');
if((no2>18 && no2<35)){
    status='fitness';
    console.log(status);
}
else{
    status='not fitness';
    console.log(status);
}

*/

