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
// typeof
console.log(typeof num);
console.log(typeof(num), '-------------------------');
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
console.log(Number("10"));
console.log(Number("x1000"));
console.log(parseInt("x1000"));
console.log(parseInt("1000x"));
console.log(parseInt("1000 xyz")); // 1000
console.log(parseInt("10.1010")); // 10
console.log(parseInt("10,1010")); // 10
console.log(parseFloat("10.1010"), parseFloat(10,10101), parseFloat("10 123"), parseFloat("100 xyz"), parseFloat("x 1000"));
console.log(10+undefined, 10%null)
console.log(10==10, 10===10, 10=='10', 10==='10', 0==null, 0===null, 0==undefined, 0 === undefined);
let first ="First";
let last = "Last";
let full = "          First       Last         ";
let arr1 = "qwe,rty.uiop/asd:fgh:"
let arr = first.split("");
console.log(first.concat(last));
console.log(first + last);
console.log(first.length, last.length);
console.log(first.toLowerCase(), last.toUpperCase());
console.log(first.toUpperCase(), last.toUpperCase());
// slice
console.log(first.slice(1,3), full.trim()); // from the index to untill the to index - It doesn't change the original arrray
console.log(first.slice(0,1), ' ============');
// splice
console.log(first.split('').splice(0,3));
console.log(arr.splice(0,3));   // splice works only on array. it cuts or adds elements to array from index to no of elements, -  it changes the original array by removing the spliced elements and returns the spiced elements
console.log(arr)
console.log(arr.splice(0,0,"a","b","c"),  arr); // here am adding three elemets at the beginning of the array and not removing any. it returns [] empty array unless i remove any. it adds new elemets to the original array
console.log(arr.splice(0,8,"z"), arr);
console.log(arr.splice(1,8,"a"), arr); // practice more by changing the numbers
// split
console.log(full.split(''));
console.log(full.trim().split(''));
console.log(arr1.trim().split(':'));
console.log(arr1.trim().split(','));
// join
console.log(arr,"qwertyui", arr.join('')); // join works on arrays. you can join the elements based on specific symbols or spaces or any characters
console.log(arr.join(' '));
console.log(arr.join('?'));
console.log(arr.join('-'));
console.log(first.includes('f'));
console.log(first.includes('F'));
console.log(first.includes('Fist'));
console.log(first.includes('First'));
console.log(arr.includes('a'));
console.log(arr, arr.includes('a'));
let cash = 100;
// toString()
console.log(cash, cash.toString());
console.log(cash, String(cash));
console.log(cash, ''+cash);
// null check
let val= null;
let val1;
if(val === null) console.log("null check true");
else console.log("null check false");
if(val1 == null) console.log("null check true");
else console.log("null check false");
let label = 'c';
switch (label) {
    case 'a': console.log('a'); break;
    case 'b': console.log('b'); break;
    case 'c': console.log('c'); break;
    case 'd': console.log('d'); break;
    case 'e': console.log('e'); break;
    case 'f': console.log('f'); break;
    default: console.log("Default logic");
}
let val2 = 100
for( let i=0; i<100; i++) val2+=i;
console.log(val2, ' => val2');
console.log(99*50);
let j =0, sum = 0;
while(j<50) {
sum+=j++;
}
console.log(sum, ' ==> sum');
let x = 1;
do {
    sum+=x++;
} while(x<50)
console.log(sum, ' =====do while sum')
let greet = ['h', 'e', 'l', 'l', 'o'];
console.log(greet[2])
let nums = [10,20,13,1,2,3,4,5,6];
let nums2 = [30,31,32,33,34,35,36];
console.log(nums.push(7), nums);
console.log(nums.pop(), nums);
console.log(nums.shift(), nums);
console.log(nums.unshift(10), nums);
console.log(nums.includes(20));
console.log(nums.slice(1,3));
console.log(nums, nums.splice(1,3), nums.push(20),nums);
console.log(nums.sort(), nums)
console.log(nums.concat(nums2));
