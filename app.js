const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

/*
function funcOne() {
    console.log("hello");
    console.log(5 + 7);
}
funcOne();

let numOne = 7;
let numTwo = 3;

function addTwoNums() {
    console.log(numOne + numTwo);
}

addTwoNums();

function addTwoNumsV2(a, b) {
    console.log(a + b);
}
addTwoNumsV2(numOne, numTwo);

function greetingByExcitement(name) {
    let upperCaseName = name.toUpperCase();
    //console.log(upperCaseName);
    return upperCaseName;
}

let screamingName = greetingByExcitement("buddy");
console.log(`Hello! ${screamingName}!`);

function makeSandwich(bread, meat, sauce, veggie) {
    console.log(`Bread: ${bread}, Meat: ${meat}, Sauce: ${sauce}, Veggie: ${veggie}`);

};

let thisParticularSandwich = makeSandwich("wheat", "salami", "mayo", "olives");
*/


console.log("Grade Calculator");
//! Grade Calculator
//? Create a program that calculates the average grade from an array of grades and determines the corresponding letter grade.

//TODO Define an Array: Define an array containing a list of grades.
//TODO Create a Function: Create a function to calculate the average of the grades.
//TODO Create Another Function: Create another function to determine the letter grade based on the average.
//TODO Use if-else Statements: Use if-else statements inside the function to determine the letter grade.
//* Output Results: Use console.log to display the average grade and the corresponding letter grade.

let gradesArray = [60, 70, 80, 90, 95];
//console.log(gradeAverage(gradesArray));
let averageScore = gradeAverage(gradesArray);
console.log(averageScore);
letterGrade(averageScore);

function gradeAverage(input) {
    //console.log(input);
    let gradeTotal = 0;
    for (i = 0; i < input.length; i++) {
        gradeTotal = gradeTotal + input[i];
    }
    let averageGrade = gradeTotal / input.length;
    return averageGrade;
};

function letterGrade(num) {
    if (num >= 90) {
        console.log("A");
    } else if (num >= 80) {
        console.log("B");
    } else if (num >= 70) {
        console.log("C");
    } else if (num >= 60) {
        console.log("D");
    } else {
        console.log("F");
    };

};
console.log("************************************************************");
console.log("Bank Account Manager")
//! Bank Account Manager
//? Create a program that allows a user to manage a simple bank account, including depositing, withdrawing, and checking the balance.
//TODO Define Variables: Start with a balance variable.
//TODO Create Functions: Create functions to deposit money, withdraw money, and check the balance.
//TODO Use if-else Statements: Use if-else statements to ensure the withdrawal amount does not exceed the balance.
//* Output Results: Use console.log to display the updated balance after each operation.

let balance = 0;
let deposit = 5.85;
let withdraw = 2.00;

depositFunc(deposit);
console.log(formatter.format(balance));
withdrawFunc(withdraw);
console.log(formatter.format(balance));
withdrawFunc(withdraw);
console.log(formatter.format(balance));
withdrawFunc(withdraw);
console.log(formatter.format(balance));
depositFunc(deposit);
console.log(formatter.format(balance));
depositFunc(deposit);
console.log(formatter.format(balance));
withdrawFunc(withdraw);
console.log(formatter.format(balance));
console.log(balanceCheck());

function depositFunc(amt) {
    balance = balance + amt;
    return formatter.format(balance);
};

function withdrawFunc(amt) {
    if (amt > balance) {
        console.log("Not enough money in account");
    } else {
        balance = balance - amt;
        return formatter.format(balance);
    };
};

function balanceCheck() {
    return formatter.format(balance);
};
console.log("************************************************************");
console.log("Simple To-Do List")
//! Simple To-Do List
//? Create a program that allows the user to add and display tasks in a to-do list.

//TODO Define an Array: Define an array to store the tasks.
//TODO Create Functions: Create functions to add a task and display the to-do list.
//TODO Use if-else Statements and Loops: Use if-else statements and loops within the functions to handle the tasks.
//* Output Results: Use console.log to display the to-do list after each operation.

//! BONUS: Be able to remove a task o.o

let taskArray = ["task1", "task2", "task3"];

console.log(taskArray);

addTask("task4");

console.log(taskArray);

removeTask(taskArray[1]);
removeTask("task1");

console.log(taskArray);

function addTask(newTask) {
    taskArray.push(newTask);
    return taskArray;
}

function removeTask(item) {
    for (i = 0; i < taskArray.length; i++) {
        if (taskArray[i] == item) {
            taskArray[i] = "done";
        }
    }

};

console.log("************************************************************");
console.log("Temperature Converter")
//! Temperature Converter
//? Create a program that converts temperatures between Celsius, Fahrenheit, and Kelvin.

//TODO Define Variables: Allow the user to input a temperature value and the unit they want to convert from.
//TODO Create Functions: Create functions to convert between Celsius, Fahrenheit, and Kelvin.
//? (Hint: There will be two arguements temperature value and unit letter (Celsius, Farenheit, Kelvin))
//? ex. If I provide 25 and "C" I want the Kelvin and Farenheit temperature

//* KelvinToCelsius conversion:
//* kelvinNum - 273.15

//* celsiusToKelvin:
//* celsiusNum + 273.15

//* fahrenheitToCelsius:
//* (fahrenheit - 32) * 5/9

//* celsiusToFahrenheit:
//* (celsius * 9/5) + 32

let tempKelvin = 0;
let tempCelsius = 0;
let tempFahrenheit = 0;

toKelvin(25, "f")
toKelvin(25, "c")
toKelvin(25, "k")
toKelvin(25, "p")

function toKelvin(temp, type) {
    let upperType = type.toUpperCase();

    if (upperType == "C") {
        tempCelsius = temp;
        tempKelvin = temp + 273.15;
        tempFahrenheit = (temp * 1.8) + 32;
        console.log("Celsius: " + tempCelsius);
        console.log("Fahrenheit: " + tempFahrenheit);
        console.log("Kelvin: " + tempKelvin);


    } else if (upperType == "F") {
        tempFahrenheit = temp;
        tempCelsius = (temp - 32) * 5 / 9;
        tempKelvin = tempCelsius + 273.15;
        console.log("Celsius: " + tempCelsius);
        console.log("Fahrenheit: " + tempFahrenheit);
        console.log("Kelvin: " + tempKelvin);

    } else if (upperType == "K") {
        tempKelvin = temp;
        tempCelsius = temp - 273.15;
        tempFahrenheit = (tempCelsius * 1.8) + 32;
        console.log("Celsius: " + tempCelsius);
        console.log("Fahrenheit: " + tempFahrenheit);
        console.log("Kelvin: " + tempKelvin);
    } else {
        console.log("That is not a known unit of measurement");
    }

};