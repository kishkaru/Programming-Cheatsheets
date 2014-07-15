/*
multi-line comment
*/

//variables
var firstName, lastName;
var firstName = "Homer", lastName = "Simpson";
// empty variables = 'undefined' value
// no value = null
typeof(firstName);

//strings
var concat = "one" + "two";
concat.length;
concat.charAt(0);
concat.indexOf("one");
concat.toUpperCase();
concat.substring(0,5);

//functions
function displayMessage(firstName) {
    alert("Hello " + firstName + ", hope you like JavaScript functions!")
	return "this is a return";
}

//if-else
function analyzeColor(myColor) {
	if (myColor == "Blue") {
		alert("Just like the sky!");
		}
	else if (myColor == "Red") {
		alert("Just like shiraz!");
	}
	else {
		alert("Suit yourself then...");
	}
}

//switch
function analyzeColor2(myColor) {
	switch (myColor)
	{
	case "Blue":
		alert("Just like the sky!");
		break
	case "Red":
		alert("Just like shiraz!");
		break
	default:
		alert("Suit yourself then...");
	}
}

//while-loop
var myBankBalance = 0;
while (myBankBalance <= 10) {
	document.write("Right now, my bank balance is $" + myBankBalance + "<br />");
	myBankBalance ++;
}

//for-loop
for (myBankBalance = 0; myBankBalance <= 10; myBankBalance++) {
document.write("My bank balance is $" + myBankBalance + "<br />");
}

//error handling
function showBankBalance() {
  try
    {
    alert("My bank balance is $" + myBankBalance);
    }
  catch(err)
    {
    alert("Sorry, an error has occurred.");
    }
}

//array
var arr = new Array(3)
var nums = []; //empty array
arr[0] = "What are JavaScript arrays";
arr.sort();
arr.reverse();
arr.concat(y,z); //where y and z are other arrays
arr.slice(0,5);
arr.push("world");
arr.unshift("hello");
arr.pop();
arr.shift();

//3x3 2-D array
var arr2 = new Array(3)
for (i=0; i < 3; i++)
	arr2[i]=new Array(3)

//objects
var obj = new Object();
var person = {
    name: "Joe",
    greet: function() {
        return "My name is "+ this.name;
    }
};
person.name;
person.greet();
person.name = "Sunny";
person.age = 22;
delete person.age;

var propName;
for (propName in test) {
    document.write(propName);
} 

//output to html page
document.write("JavaScript is not Java");

//escape characters
document.write("They call it an \"escape\" character");

//void
//<a href="JavaScript:void(0);" ondblclick="alert('Well done!')">Double Click Me!</a>

//create cookie
document.cookie = "myContents=cookie experiment; expires=Mon, 18 Feb 2013 12:00:00 UTC; path=/";
//print cookie
document.write(document.cookie);
document.write(document.cookie.split("=")[1])
//delete cookie
document.cookie = "myContents=cookie experiment; expires=Fri, 01 Jan 2000 12:00:00 UTC; path=/";

	
//inner html (change html values)
function Msg1(){
  document.getElementById('myText').innerHTML = 'Thanks!';
}
function Msg2(){
  document.getElementById('myText').innerHTML = 'Try message 1 again...';
}

// Popup window
function basicPopup(url) {
	popupWindow = window.open(url,'popUpWindow','height=500,width=500,left=100,top=100',
	resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes);
}

//redirect
function redirectTo(sUrl) {
	window.location = sUrl
}

//dialog boxes
alert('Hey!');
confirm('Are you sure?');
prompt('Please enter:', 'something');