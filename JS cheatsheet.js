// comment
/* multi-line comment */

primitives: number, string, boolean, undefined, null
falsy values: undefined, null, 0, '', NaN
typeof(var);
isNaN(input);

== : equality
=== : equality & type coersion

// Variables (function scoped)
var firstName, lastName;
firstName = "Homer";
// unassigned variable == 'undefined' value/datatype
// absence of value == 'null' value/obj datatype

// Variables (block scoped)
let firstName = 'john';
const year = 1990;

{
	let a = 1;
	const b = 2;
}

// Strings
var str = "id: " + "%id%";
str.length;
str.charAt(0);
str.toUpperCase();
str.substring(0,5);
str.replace('%id%', id);
parseInt(str)
parseFloat(str)

str.startsWith('str');
str.includes('str');
str.repeat(numT);

console.log(`My name is ${name}.`);

// Arrays
var arr = new Array(3)
arr = [1, 2, 3];
arr[0] = "foo";
arr.length();
arr.indexof("hello");
arr.slice(0, 5);
arr.sort();
arr.reverse();
arr.findIndex(e => );
arr.find(e => );
arr = Array.from(list);

arr.push("world");    //add to end
arr.unshift("hello"); //add to begin
arr.pop();            // remove from end
arr.shift();          // remove from begin

for (var i = 0; i < arr.length; i++) { }
for (var e of arr) { }
arr.forEach(function(currEle, idx, arr) {} );

arr.map(function(currEle, idx, arr) {} );
arr.map(e => e - 1);
arr.map((e, i) => { return e + i; })

// Map
const map = new Map();
map.set(k, v);
map.size;
map.has(k)
map.delete(k)
map.forEach((v, k) => {} );
map.for(let [k, v] of map.entries()) { }

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

// Error handling
function foo() {
	try {
		bar();
	} catch(e) {
		alert("ERROR");
	}
}

// Functions
// Function declaration
function foo(param1, param2) {
	return param1 + param2;
}

// Function expression
var foo = function(param1, param2) {
	return param1 + param2;
}

// IIFE (Immediately Invoked Function Expression)
// (used for data hiding/modularization)
(function(param1, param2) {
	return param1 + param2;
})(1, 2); // () in beginning tricks the parser to thinking it's an expression (not decl)

// Objects
// Anonymous object
var john = {
    name: 'John',
    greet: function() {
        return "My name is " + this.name;
    }
};

john.name;
john['name'];
john.greet();
john.name = "Sunny";
john.age = 22;
delete john.age;

// Function (obj) constructor
var Person = function(name, age) {
	this.name = name;
	this.age = age;
}

// Function prototype (inherited by all)
Person.prototype.calcAge = function() {
	console.log(2018 - this.age);
}
Person.prototype.lastName = 'Smith';

var john = new Person('john', 20);
john.calcAge();
john.lastName;
john.__proto__ === Person.prototype

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

// Classses
class SubClass extends Superclass {
	constructor() { super(); }
	methodName() { }
	static method() { }
}

// Destructuring objects
const [name, age] = ['john', 26];
john = {
	first: 'john',
	last: 'smith'
}
const {first, last} = obj;
const {first: var1, last: var2} = obj;

// Spread op (splat)
foo(...arr)
[...arr, ...arr2]

// Rest param
function foo(...arr) { }
foo(1,2,3,4);
function foo(bar, ...arr) {}

// Console / dialog interactions
console.log("Hello World");
console.info(john);
alert('Hey!');
var input = prompt('Enter something:');
var choice = confirm('ok?');

// DOM manipulation
document.querySelector('#id').textContent = 'content';
document.getElementById('id').textContent = 'content';
document.querySelector('.class').innerHTML = '<em>content</em>';
document.querySelectorAll('field1, field2'); // select multiple DOM elements

// add/remove HTML
document.querySelector('.class').insertAdjacentHTML('beforeend', html)
ele.parentNode.removeChild(ele);

// hide/show/change ele
document.getElementById('id').style.display = 'none';
ele.style.display = 'block';
ele.src = 'dice.png'; // change image
ele.className = 'active'; // change class

// add/remove/toggle CSS classes
document.querySelector('.class').classList.remove('active')
document.querySelector('.class').classList.add('active')
document.querySelector('.class').classList.toggle('active')

// Event listener
document.querySelector('.class').addEventListener('click', function(event) { 
	event.target; // event triggerer
	event.keyCode;
});

//////////////////////////////// 
//void
//<a href="JavaScript:void(0);" ondblclick="alert('Well done!')">Double Click Me!</a>

//create cookie
document.cookie = "myContents=cookie experiment; expires=Mon, 18 Feb 2013 12:00:00 UTC; path=/";
//print cookie
document.write(document.cookie);
document.write(document.cookie.split("=")[1])
//delete cookie
document.cookie = "myContents=cookie experiment; expires=Fri, 01 Jan 2000 12:00:00 UTC; path=/";

// Popup window
function basicPopup(url) {
	popupWindow = window.open(url,'popUpWindow','height=500,width=500,left=100,top=100',
	resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes);
}

//redirect
function redirectTo(sUrl) {
	window.location = sUrl
}
