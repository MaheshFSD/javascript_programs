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
let nums3 = [10,5,4,1,3,2];
console.log(nums.push(7), nums);
console.log(nums.pop(), nums);
console.log(nums.shift(), nums);
console.log(nums.unshift(10), nums);
console.log(nums.includes(20));
console.log(nums.slice(1,3));
console.log(nums, nums.splice(1,3), nums.push(20),nums);
console.log(nums.sort(), nums)  // Sort sorts by alphabetically.. it works on strings only.
console.log(nums.concat(nums2));
console.log(nums.reverse()); // reverse() changes the original array. to Reversed() doesn't. it's safest way to reverse the elelments
console.log(nums3.sort((a,b)=>a-b));  // to make it work on numbers use a compare function 
console.log(nums3.sort((a,b)=>b-a));  // For descending order ----- Sort changes the original Array but not toSorted()- it's safest way to sort elements without changing original Array.
let one = 1;
let obj = {
    name: 'Full Name',
    age: 25,
    position: 'Developer',
    newObj: {
        newAge: 30,
    },
    10: 'ten', 
};
console.log(obj['age'], obj.age, obj.newObj.newAge, obj['newObj']['newAge']);
console.log(Object.keys(obj).length);
console.log(obj[10], 'bracket notation value');
for(let x of nums3) console.log(x, ' =======Single element iteration using FOR OF');
for(let key in obj) console.log(obj[key], ' ==========Object iteration through FOR IN');
obj.gender = 'Male'; // Adding a key value to object
delete obj[10]; // Deleting a key value in object
console.log(obj, ' ========= obj ==');

hello() // We can call this before declaring it also.
// Function declaration
function hello() { // anonymous function
    console.log("Hello...");
}

// greetings(); Cannot access before initialization
// Function Expression
let greetings = function() {
    console.log("Greetings...");
}
var x1;
console.log(x1)
x1 = 20
console.log(x1)
var x1 = 30;
console.log(x1)

console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean({}))
console.log(Boolean(1))

let sayHi = () => {
    return "Hello from arrow";
}
let sayHi1 = () => "Hello from Arrow1"
const sayHiName = name => `Hello ${name}`;
console.log(sayHi());
console.log(sayHi1());
console.log(sayHiName('John'));
const arr2 = new Array(40); // creates array of 40 undefined elements
const arr3 = [40]; // creates array with element 40
console.log(arr2, arr3); // result : [ <40 empty items> ] [ 40 ]
// 1 way to find the variable is an array or not using Array.isArray()
console.log(Array.isArray(arr3), Array.isArray(obj)) // to know a variable is an array use isArray() or instanceof
// the other way is using instanceof() 
console.log(arr3 instanceof Array, obj instanceof Array) 
// using toString() on an array 
let fruits = ['apple', 'mango', 'banana', 'banana', 'papaya']
console.log(fruits.toString()); // toString() converts array to comma separated string.
console.log(fruits.at(3)); // returns the element present at the index provided..
delete fruits[0];
console.log(fruits); // delete on arrays produce undefined holes in the indexes result - [ <1 empty item>, 'mango', 'banana', 'papaya' ]
console.log(fruits.copyWithin(3,0)); // copyWithin works only on available elemets only and you can copy any element to a destination index
console.log(fruits.copyWithin(3,0,3)) // it will not change the array length. it copies from elements of from index(0) to till the to index(3)
let arr4 = [ 1,['x','y','z',['a','b',['c','d']]],5,[6,7]];
let obj2 = {
    first: 'G',
    last: 'mahesh',
    age: 26,
}
console.log(arr4.flat().flat().flat()); // flat will be used to change the 2 dimentional array to single dimentional array
console.log(fruits.indexOf('banana')+1)
console.log(fruits.lastIndexOf('banana'));
console.log(fruits.includes('papaya'));
// console.log(fruits.find('banana'));
const nums4 = [31,22,45,22,1,3,6,7,3,13,432,55];
console.log(nums4.find(x => x >400)) // here find founds the first occurance of the element that matches the condition.
// fill Array eith default values 
let arr5 = []
arr5.fill(0);
console.log(arr5)
arr5 = [true,false, undefined, null, 1, 'Hello', 10.1];
arr5.fill(0);
console.log(arr5);
arr5.fill(true);
console.log(arr5);
arr5.fill(false);
console.log(arr5)
let arr6 = new Array(10);
arr6.fill(10);
console.log(arr6);
let arr7 = new Array(5).fill('$')
console.log(arr7);
console.log(nums4.findIndex(x => x > 31));
console.log(nums4.findLastIndex(x => x > 31));
console.log(nums4.findLast(x=>x>55))
console.log(obj.age);
let obj3 = {
    f: 'first',
    l: 'last',
    a: 28,
    details: function (age) {
        console.log(this.a, this.f,this.l, age);
    }
}
obj3.details(25);
if(typeof document !== 'undefined')
console.log(document);
 let element1 = document.getElementById('item')
 console.log(element1);
 let ele2 = document.getElementsByClassName('newTooltip')
 console.log(ele2);
 let ele3 = document.getElementsByTagName('h1');
 console.log(ele3);
 let ele4 = document.querySelector('#container')
 console.log(ele4, '=========');
 let ele5 = document.querySelector('.tooltip')
 let ele7 = document.querySelector('.newTooltip')
 console.log(ele5, '=========');
 let ele6 = document.querySelectorAll('.newTooltip')
 console.log(ele6, '======6==');
 console.log(ele7.parentNode, ' 0000000');
 console.log(ele5.childNodes, ' 1111111');
 console.log(ele7.nextElementSibling, ' 3333333');
 const ele8 = document.querySelector('.tooltipText');
 console.log(ele8.previousElementSibling, ' 222222')
const ele9 = document.querySelector('.changeText');
// ele9.innerHTML = 'CSS welcome';
const ele10 = document.querySelector('.domClass');
ele10.innerHTML = 'I changed Text Here. It is in color Blue.'
ele10.style.color = 'red';
ele10.style.backgroundColor = 'white'
ele10.style.border = '5x solid white';
ele10.style.fontStyle = 'sansSerif';
// let ele11 = document.getElementsByTagName('body');
// console.log(ele11, ' kkkkkkkkkkkk');
document.body.style.backgroundColor = 'white';
let div1 = document.createElement('div');
div1.classList.add('newDivClass');
div1.innerHTML = 'The last Div Experiment';
document.body.appendChild(div1);
div1.classList.remove('newDivClass');
let div2 = document.createElement('div');
div2.setAttribute('id', 'ginal-div');
div2.innerHTML = 'Hello Last';
let bdy = document.querySelector('body');
bdy.appendChild(div2);
div2.setAttribute('id', 'lastDiv');
div2.setAttribute('class', 'lastDivClass');
div2.id = 'lastDiv';
div2.class = 'lastDivClass';
let p = document.createElement('p');
p.innerHTML = "I am Newly created";
// p.insertBefore
div2.insertAdjacentElement('beforebegin', p);

function clickToListen() {
    console.log('I am clicked after listening.....')
}
let btnL = document.getElementById('listenBtn');
btnL.addEventListener('click', function(){
    console.log("finally listened");
})
btnL.addEventListener('click', clickToListen);