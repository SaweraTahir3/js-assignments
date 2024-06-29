// JAVASCRIPT ASSIGNMENT-2 
//Q1. Write a program to take a number in a variable, do the required 
// arithmetic to display the following result in your browser:
let a = 10;
document.write(`value = ${a}  <br>`);
++a;
document.write(`this value of  ++a is = ${a} <br>`);
document.write(`now this value ++a = ${a}  <br>`);
document.write(`   this ++a value ${a} <br>`)
a++
document.write(` now this value a++ = ${a}  <br>`);

--a;
document.write(` this value of --a = ${a}  <br>`);
document.write(` this value of is  = ${a}  <br>`);


a--;

document.write(` this value of is =  ${a}  <br>`);


//Q2. What will be the output in variables a, b & result after execution of 
//the following script: var a = 2, b = 1; var result = --a - --b + ++b + b-
//-; 
//Explain the output at each stage: 
//--a; 
//--a - --b; 
//--a - --b + ++b; 
//--a - --b + ++b + b--;
 


var a1 = 2, b = 1;
var result = --a1 - --b + ++b + b--;
--a; // Pre-decrement: a is decremented by 1 before it is used.
--a - --b;
--a - --b + ++b;
--a - --b + ++b;
--a - --b + ++b + b--;
document.write('answer 2nd question '+ result )




// Q3. Write a program that takes input a name from user & greet the 
// user. 
let userName = prompt("Please enter your name:");
if (userName) {
    alert("Hello, " + userName + "! Nice to meet you.");
} else {
    alert("Hello, guest! Nice to meet you.");

}



//Q4 . Write a program to take input a number from user & display its 
//multiplication table on your browser. If user does not enter a new 
//number, multiplication table of 5 should be displayed by default. 



    var userInput = prompt("Enter a number to display its multiplication table (or leave blank for table of 5):");

    
    var number = parseInt(userInput);
    if (isNaN(number) || userInput === "") {
        number = 5;
    }

    
    var header = document.createElement('h2');
    header.textContent = "Multiplication Table of " + number;
    document.body.appendChild(header);


    var table = document.createElement('table');

    
    var headerRow = document.createElement('tr');
    var headerCell1 = document.createElement('th');
    headerCell1.textContent = "Multiplicand";
    var headerCell2 = document.createElement('th');
    headerCell2.textContent = "Multiplier";
    var headerCell3 = document.createElement('th');
    headerCell3.textContent = "Product";

    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    headerRow.appendChild(headerCell3);
    table.appendChild(headerRow);

    // Generate the multiplication table
    for (var i = 1; i <= 10; i++) {
        var row = document.createElement('tr');

        var cell1 = document.createElement('td');
        cell1.textContent = number;
        var cell2 = document.createElement('td');
        cell2.textContent = i;
        var cell3 = document.createElement('td');
        cell3.textContent = number * i;

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        table.appendChild(row);
    }

    // Append the <table> element to the body of the HTML document
    document.body.appendChild(table)


//Q5. 
//a) Take three subjects name from user and store them in 3 different 
//variables. 
//b) Total marks for each subject is 100, store it in another variable. 
//c) Take obtained marks for first subject from user and stored it in 
//different variable. 
//d) Take obtained marks for remaining 2 subjects from user and store 
//them in variables. 
//e) Now calculate total marks and percentage and show the result in 
//browser like this. (Hint: user table)

let sub_1 = prompt("Enter subject 1"); 
let sub_2 = prompt("Enter subject 2"); 
let sub_3 = prompt("Enter subject 3"); 

// b) Total marks for each subject is 100, store it in another variable.

let total = 100;

// c) Take obtained marks for first subject from user and stored it in different variable.
alert("Enter marks of subject 1");
let marks_1 = parseInt(prompt());

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.

alert("Enter marks of subject 2");
let marks_2 = parseInt(prompt());

alert("Enter marks of subject 3");
let marks_3 = parseInt(prompt());

// e) Now calculate total marks and percentage and show the result in  browser like this. (Hint: user table)

let total_marks = marks_1 + marks_2 + marks_3;

document.write(`<br><br> <table style=" height="400" border="1" celpadding="6" celspacing="2"  >
  
  <tr>
  
  <th>&nbsp;&nbsp;&nbsp;&nbsp;       Subject       &nbsp;&nbsp;&nbsp;&nbsp;</th>
  <th>&nbsp;&nbsp;&nbsp;&nbsp;         Total          &nbsp;&nbsp;&nbsp;&nbsp;</th>
  <th>&nbsp;&nbsp;&nbsp;&nbsp;          Obt Marks        &nbsp;&nbsp;&nbsp;&nbsp;</th>
  <th>&nbsp;&nbsp;&nbsp;&nbsp;            Percentage               &nbsp;&nbsp;&nbsp;&nbsp;</th>
  
  </tr>
  

  <tr align="center">
  <td>${sub_1}</td>
  <td>${total}</td>
  <td>${marks_1}</td>
  <td>${(marks_1 / total) * 100}%</td>
  
  </tr>
  
  <tr align="center">
  <td>${sub_2}</td>
  <td>${total}</td>
  <td>${marks_2}</td>
  <td>${(marks_2 / total) * 100}%</td>
  
  </tr>
  
  <tr align="center">
  <td>${sub_3}</td>
  <td>${total}</td> 
  <td>${marks_3}</td>
  <td>${(marks_3 / total) * 100}%</td>
  
  </tr>
  <tr align="center">
  
  <td colspan="2">300</td>
  <td>${total_marks}</td>
  <td>${((total_marks / 300) * 100).toFixed(2)}</td>
  
  </tr>

  </table>`);


