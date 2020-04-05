// comment
/* multi-line comment */
console.log(`My name is ${name}.`);

// primitives: number, string, boolean, undefined, null, symbol
// falsy values: undefined, null, 0, '', NaN
typeof(var);
myList instanceof Array;
isNaN(input);

// == : equality
// === : equality & type coersion
eval("4+5"); -> 9

// Variables (function scoped)
var firstName, lastName;
firstName = "Homer";
// unassigned variable == 'undefined' value/datatype
// absence of value == 'null' value/obj datatype

// Variables (block scoped, can't use before assigned)
let firstName = 'john'; //replaces var
const year = 1990;

let a = 1;
{
	const a = 2; //OK: block scoped
}

// Strings
var str = "a " + "b";
str.length;
str.charAt(0);
str.toUpperCase();
str.substring(0,5);
str.replace('a', 'foo');
parseInt(str)
parseFloat(str)

str.startsWith('str');
str.includes('str');
str.repeat(numT);
str.split(" ");
for (const c of str) { };
[...str].forEach(c => );

// Arrays
var arr = new Array(3);
arr = [1, 2, 3];
arr[0] = "foo";
arr.length
arr.indexof("hello");
arr.slice(begin, end); // new copy portion of arr
arr.splice(begin, deleteCount, e); // remove/add elems from arr
arr.sort();
arr.reverse();
arr.includes(e);
arr.findIndex(e => );
arr.find(e => );
arr.join(' ');
arr = Array.from(iterable/str, e => );
arr.concat(arr2); // ret new arr

arr.push("world");    //add to end
arr.unshift("hello"); //add to begin
arr.pop();            // remove from end
arr.shift();          // remove from begin

for (var i = 0; i < arr.length; i++) { }
for (var e of arr) { }
arr.forEach(function(currEle, idx, arr) { } );
arr.forEach(e => { })
arr.filter(e => e.length > 2);

arr.map(function(currEle, idx, arr) {} );
arr.map(e => { });
arr.map((e, i) => { return e + i; })
arr.reduce((acc, cur) => {
  return acc++;
}, start);

// Map (retains keys in insertion order)
let map = new Map();
map = new Map(Object.entries(obj));
map.set(k, v);
map.get(k);
map.has(k);
map.delete(k);

map.size;
map.keys();
map.entries();
map.clear();
for(let [k, v] of map) { };
map.forEach((v, k) => { } );

// Set
let set = new Set([1,2,3]);
set.add(e);
set.has(e);
set.delete(e):
set.size;
set.clear();

set.forEach(e => {});

// If/else
if (a > b) { }
else { }

// Switch
switch (color)
{
	case "red":
		break;
	default:
		break;
}

var age = 20
switch(true) 
{
	case age < 13:
		break;
}

// Functions
// Is an object, with invocable code

// Function statement (doesn't return anything)
function foo(param1, param2) {
	return param1 + param2;
}

// Function expression (returns created fn obj)
var foo = function(param1, param2) {
	return param1 + param2;
}
// func only does one thing, and return. Can omit {} and 'return'
var foo = (param1, param2) => param1 + param2;

// IIFE (Immediately Invoked Function Expression)
// (used for data hiding (var safety) /modularization)
// () before FUNCTION keyword tricks parser into thinking it's an expression (not statement)
(function(param1, param2) {
	return param1 + param2;
})(1, 2); // () in the end executes it

// Async function
const fn = id => {
	return new Promise( (resolve, reject) => {
		setTimeout( (idx) => {
			resolve([idx,1,2,3]);
		}, 1500, id);
	});
};

fn().then(arr => {
	return arr[0];
}).catch(error => {
	console.log('err');
});

async function fn2() {
  // blocks until resolved
  const ids = await fn(1);
  // returns another promise
  return ids[0];
}

// Import/export modules
export default 'foo bar baz'; //1 (default exports)
export const add = (a,b) => a+b; //2 (named exports)

import anyVarName from './views/searchView'; //1
import { add as a, mult as b, ID} from './views/searchView'; //2
import * as searchView from './views/searchView'; //2

// Error handling
function foo() {
	try {
		bar();
	} catch(e) {
		alert("ERROR");
	}
}

// Objects
// Object literal (anonymous)
var john = {
  name: 'John',
  greet: function() {
    return "My name is " + this.name;
  }
};

'name' in john;  //  T/F
john.name;
john['name'];
john.name = "Sunny";
john.greet();
john.age = 22;
delete john.age;
Object.keys(john).forEach((key) => console.log(key, obj[key]))

// Destructuring objects
const [name, age] = ['john', 26];
const {name, greet} = john;
const {name: var1, greet: var2} = john;

// Spread op: expand arr/obj
arr = [1,2];
foo(...arr); // foo(1,2)
[...arr, ...arr2]; //merge arrays
const newObj = {...oldObj} // pull out properties

// Rest param: merge into arr (accept unlimited extra args)
function foo(...arr) { } // args turns into an array
foo(1,2,3,4); // arr = [1,2,3,4]
function foo(bar, ...arr) { }
foo(1,2,3,4); // bar = 1, arr = [2,3,4]

// Function (obj) constructor
// returns fn that constructs obj
var Person = function(name, age) {
	this.name = name;
	this.age = age;
}
// `new` creates empty obj, Person fn fills it in
var jane = new Person('jane', 25);
jane instanceof Person

// Function prototype (defined once, inherited by all objs)
// `prototype` property of a function, only used after `new` keyword
Person.prototype.calcAge = function() {
	console.log(2018 - this.age);
}
Person.prototype.lastName = 'Smith';

var john = new Person('john', 20);
john.calcAge();
john.lastName;
john.__proto__ === Person.prototype
john.hasOwnProperty('age');

var personProto = {
	calcAge: function() {
		console.log(2018 - this.age);
	}
};

var john = Object.create(personProto, {
	name: { value: 'john' },
	age: { value: '20' }
});

// Method borrowing
john.presention.call(emily, 'foo', 'bar');
john.presention.apply(emily, ['foo', 'bar']);
john.presention.bind(emily, 'friendly'); // currying (preset arguments)

// Classses (ES6)
class SubClass extends Superclass {
	constructor() { 
		super();
    this.property = 'value';
	}
	methodName() { }
	static method() { }
}

// Classes (ES7)
class SomeClass {
	property = 'value';
  methodName = () => { }
}

// Console / dialog interactions
console.log("Hello World");
console.info(john);
alert('Hey!');
var input = prompt('Enter something:');
var choice = confirm('ok?');

// Popup window
function basicPopup(url) {
	popupWindow = window.open(url,'popUpWindow','height=500,width=500,left=100,top=100',
	resizable='yes',scrollbars='yes',toolbar='yes',menubar='no',location='no',directories='no', status='yes');
}

// DOM selectors
document.querySelector('#id')
document.querySelector('.btn link') // "link" child of "btn" parent
document.querySelector('a[href*="${id}"'); // sel via CSS element
document.querySelectorAll('field1, field2') // sel multiple DOM elements
document.getElementById('id')

// DOM manipulation
ele.textContent = 'content';
ele.innerHTML = '<em>content</em>';
ele.setAttribute('href', ''); // set attr
ele.src = 'dice.png'; // change image
ele.dataset.goto

// add/remove CSS classes
ele.classList.add('active')
ele.classList.remove('active')
ele.classList.toggle('active')
ele.className = 'active'; // change class

// hide/show elem
ele.style.display = 'none';
ele.style.display = 'block';

// add/remove HTML
ele.insertAdjacentHTML('beforeend', html)
ele.parentNode.removeChild(ele); // del curr elem
ele.innerHTML = ''; // del all child elems

// Event listener
ele.addEventListener('click', function(event) {
  event.preventDefault(); // don't refresh page
  event.keyCode;
  
  event.target; // event triggerer
  event.target.closest('.btn'); // event is a child of ele
  event.target.matches('.btn *'); // event is any child of ele
});

window.addEventListener('hashChange', fn)
window.location.hash

// JSON
JSON.stringify(obj); // to json
JSON.parse(jsonStr); // from json

// HTTP API
fetch('url')
.then(result => {
	return result.json();
})
.then(resultJson => {
	console.log(resultJson);
})
.catch(error => {} );

import axios from 'axios';
const api = axios.create({ baseURL: 'http://my.api.com' });
const response = await api.get(`/users?id=${this.id}`, { params: args });
const response = await api.post(url, post_body, { headers: { 'Content-Type': 'application/json' };

// Redirect
function redirectTo(sUrl) {
	window.location = sUrl
}

// Persist data
// store inside browser (avail to client only)
localStorage.setItem('id', 'foo');
localStorage.getItem('id');
localStorage.removeItem('id');

// Cookie: sent to server on every HTTP request
document.cookie = "myContents=cookie experiment; expires=Mon, 18 Feb 2013 12:00:00 UTC; path=/";
// print cookie
document.write(document.cookie.split("=")[1])
// delete cookie
document.cookie = "myContents=cookie experiment; expires=Fri, 01 Jan 2000 12:00:00 UTC; path=/";
