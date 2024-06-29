////JAVASCRIPT ASSIGNMENT -1 ///
//  Q1. Write a script to greet your website visitor using JS alert box. (Welcome to 
// Our Website)
alert("Welcome to  Our website");

// Q2. Write a script to display message on your web page. (Error! Please Enter a 
// valid password
alert("Error! Please Enter a valid password");
// Q3 .Write a script to display message on your web page: (Hint : Use line break)
alert("Hint : Use line break");

// Q4. Write a script to display messages in sequence (3 Alert)
alert("alert one");
alert("alert Two");
alert("alert three");

// Q5. Make use of alerts in your new/existing HTML & CSS project
let answe = document.getElementById("answer")
alert("html connected alert");
console.log(answe);

//Q6 .Practice placement of element in following sections of your project in 
// exercise 5: 
// a. Head 
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)
alert("This is an alert before the page's HTML.");
alert("This is an alert inside the page's HTML.");
alert("This is an alert after the page's HTML.");


// Q7. Declare a variable called username
let userName = "username"
console.log(userName);

// Q8. Declare a variable called myName & assign to it a string that represents 
// your Full Name
let myName = ''
let pro = prompt('enter you full name ')
if (pro.value === '') {
    myName.classList.add("add");
}
console.log(pro);


//Q9. Write script to 
// a) Declare a JS variable, titled message. 
// b) Assign “Hello World” to variable message 
// c) Display the message in alert box.
let message;
message = "hello world";
alert(message);

//Q10.Write a script to save student’s bio data in JS variables and show the data in 
//alert boxes

let studentname = "sawera tahir:"
let studentRollnumber = 129777
let studentemail = "@sawera42gmail.com :"
let studentcity = "karachi: "
let studentAge = 22

alert("studentname:" + studentname + "studentRollnumber:" + studentRollnumber + "studentemail:" + studentemail + "studentcity:" + studentcity + ' studentAge ' + studentAge )



//Q11 . Declare a variable called email and assign to it a string that represents your 
//Email Address(e.g. example@example.com). Show the blow mentioned 
//message in an alert box.(Hint: use string concatenation
let email = "";
let writeEmail = prompt("enter your Email");
if (writeEmail.value === '') {
    email.classList.add('email');
    alert(writeEmail)
}
console.log(writeEmail);
alert(writeEmail);


// Q12 . 12.Write a script to display this in browser through JS
let  display = "hello this is content disply"
let  head = document.createElement("h1");
head.textContent = display
document.body.appendChild(head)
console.log(head);


//Q13.Store following string in a variable and show in alert and browser through JS 

 let store = ''
let   page = prompt("enter a  string value ")
if(page.value === ''){
page.classList.add("store")
alert(page);
}
console.log(page)
alert(page);


//Q14.Declare a variable called age & assign to it your age. Show your age in an 
// alert box.
let age = ''
let agenum = prompt(" enter you age ");
if(agenum.value === ''){
agenum.classList.add('age')
alert(writeage);
}

alert(agenum);
document.write(agenum)
console.log(agenum);

// 15.Declare & initialize a variable to keep track of how many times a visitor has 
// visited a web page. Show his/her number of visits on your web page. For 
// example: “You have visited this site N times”.

 let visits = localStorage.getItem('visits') ||  7 ;
  visits++
  localStorage.setItem("visitis" , visits);
  document.write(`you have visted this site ${visits} times`);


// 16.Declare a variable called birthYear & assign to it your birth year. Show the 
// following message in your browser:

let birthYear = 2002;
document.write(`my brith year ${birthYear} .`)


 

//Q17.A visitor visits an online clothing store www.xyzClothing.com . Write a script 
//to store in variables the following information: a. Visitor’s name b. Product 
//title c. Quantity i.e. how many products a visitor wants to order Show the 
//following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ 
//Clothing store”


let visitorName = "John Doe";
        let productTitle = "T-shirt";
        let quantity = 5;
        var messages = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store";
 document.write(messages)
        
 
 //Q18.Declare 3 variables in one statement.
let a = "one" , b = "two" , c = "three" 
document.write(a)
console.log(a)


 //Q19.Declare 5 legal & 5 illegal variable name

// legal variable

 var firstName = "sawera";
var nub = 30;
var user_id = 12345;
var $price = 99.99;
var _privateVar = "secret";

// Illegal variable names (commented out to prevent errors)
// let 1stPlace = "Gold";
// let user-name = "JohnDoe";
// let  var = "variable";
// var user name = "John Doe";
// var if = true;
//let 2ilegal = ''
//let -ilegal = 24 ;

 


//Q20.Display this in your browser 
//a) A heading stating “Rules for naming JS variables” 
//b) Variable names can only contain __$app____, ______, ______ and ______. For 
//example $my_1stVariable 
//c) Variables must begin with a ______, ______ or _____. For example 
//$name, _name or name 
//d) Variable names are case-sensitive.____ 
//e) Variable names should not be JS ________
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable</p>");
document.write("<p>Variables must begin with a letter, underscore (_) or dollar sign ($). For example $name, _name or name</p>");
document.write("<p>Variable names are case-sensitive</p>");
document.write("<p>Variable names should not be JavaScript reserved keywords</p>");



//Q21.Write a program that take two numbers & add them in a new variable. 
//Show the result in your browse

var number1 = 5;
var number2 = 10;

var result = number1 + number2 ;
var paragraph = document.createElement('p');

paragraph.textContent = "The result of adding " + number1 + " and " + number2 + " is: " + result;
document.body.appendChild(paragraph);


//Q22.Repeat task21 for subtraction, multiplication, division & modulu


let num1 = 10
let num2 = 5
document.write("num1 -  num2 = " , "", num1 -  num2);// subraction 
document.write("num1 *  num2 = " , "", num1 *  num2); // multiple
document.write(" num1  /  num2 =" , "", num1 /  num2 ); // divide
document.write (" num1  **   num2 = " , "",  num1 **  num2) //exponentiation
document.write(" num1  %   num2 =",  "", num1 %  num2); //modulu



//Q23.Do the following using JS Mathematic Expressions 
//a. Declare a variable. 
//b. Show the value of variable in your browser like “Value after variable 
//declaration is: ??”. 
//c. Initialize the variable with some number. 
//d. Show the value of variable in your browser like “Initial value: 5”. 
//e. Increment the variable. 
//f. Show the value of variable in your browser like “Value after 
//increment is: 6”. 
//g. Add 7 to the variable. 
//h. Show the value of variable in your browser like
// i Decrement the variable. 
//j. Show the value of variable in your browser like “Value after 
//decrement is: 12”. 
//k. Show the remainder after dividing the variable’s value by 3. 
//l. Output : “The remainder is : 0

 let save ;

 let  like = document.createElement('h2');
like.textContent = 'Value after variable declaration is:' + like ;
document.body.appendChild(like);

save = 5

let h3 = document.createElement('h3')
h3.textContent  = ' initial valuue ' + save;
document.body.appendChild(h3);

save++;
 let  h4 = document.createElement('h3')
 h4.textContent = 'value after increement is : ' + save;
 document.body.appendChild(h4);
 save += 7;


let  h5 = document.createElement('h4');
h5.textContent = "Value after adding 7 is: " + save;
document.body.appendChild(h5);

save--;
let h6 = document.createElement('h4')
h6.textContent = 'value after decrement ' + save ;
document.body.appendChild(h6);

let remainder = save % 3;
let h7 = document.createElement('h4')
h7.textContent = 'after dividing the variable’s value ' + remainder;
document.body.appendChild(h7)



//24.Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a 
//variable & calculate the cost of buying 5 tickets to a movie.
 let onemovieticket = 600 ;
  let cost = onemovieticket * 5 ;
  document.write(`All movie tickets `  + cost);


//25.Write a script to display multiplication table of any number in your brower
  

var number = prompt("Enter a number to display its multiplication table:");


number = parseInt(number);


if (!isNaN(number)) {
    var header = document.createElement('h2');
    header.textContent = "Multiplication Table of " + number;
    document.body.appendChild(header);
    var list = document.createElement('ul');

    
    for (var i = 1; i <= 10; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = number + " x " + i + " = " + (number * i);
        list.appendChild(listItem);
    }


    document.body.appendChild(list);
} else {
    
    var errorMessage = document.createElement('p');
    errorMessage.textContent = "Please enter a valid number.";
    document.body.appendChild(errorMessage);
}




