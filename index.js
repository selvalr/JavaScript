/*
    const place = "hello";
    const work = "world";
*/
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
let num2='1.50'
console.log(parseFloat('1.00'));
console.log(parseFloat('1.50'));
console.log(parseFloat('ABC'));