console.log("Hello");
console.warn("Hello Warnijng")
console.error("Hello Error");
console.table({name:"MAhesh", age: 20});
console.log("clearing the console");


// variables 
let a;
console.log(a); 
console.log("hello"); 
console.log("first");
console.clear();

console.log("hello"); 
console.log("first");

let num = 10;
let num1 = 9.656;
console.log(typeof num);
console.log(typeof(num));
console.log(3**2);
console.log(3**4);
console.log(++num,num--,num++,--num,++num,num++,num--,--num);
console.log(typeof num.toString());
console.log(num1.toExponential());
let num2 = num1.toExponential(0);
console.log(num1.toExponential(0), num2, Number(num2), +num2);
console.log(num1.toExponential(2));
console.log(num1.toExponential(4));
console.log(num1.toExponential(1/100)); // gives only 10
console.log(num1.toFixed()) // 10
console.log(num1.toFixed(0)) // 10
console.log(num1.toFixed(1/10)) // 10
console.log(num1.toFixed(5));
console.log(num1.toPrecision());
console.log(num1.toPrecision(2));
console.log(num1.toPrecision(4));
console.log(num1.toPrecision(6));
console.log(num1.valueOf());
console.log("100".valueOf());
console.log("asdfg".valueOf());
console.log([1,2,34,].valueOf());
console.log(Number(num1));
console.log(parseInt(num1));
console.log(parseFloat(num1));
console.log(Number("x10"))
