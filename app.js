
function funcOne(){
    console.log("hello");
    console.log(5+7);
}
funcOne();

let numOne = 7;
let numTwo = 3;

function addTwoNums(){
    console.log(numOne + numTwo);
}

addTwoNums();

function addTwoNumsV2(a,b){
    console.log(a+b);
}
addTwoNumsV2(numOne,numTwo);

function greetingByExcitement(name) {
    let upperCaseName = name.toUpperCase();
    //console.log(upperCaseName);
    return upperCaseName;
}

let screamingName = greetingByExcitement("buddy");
console.log(`Hello! ${screamingName}!`);

function makeSandwich(bread, meat, sauce, veggie){
    console.log(`Bread: ${bread}, Meat: ${meat}, Sauce: ${sauce}, Veggie: ${veggie}`);

};

let thisParticularSandwich = makeSandwich("wheat", "salami", "mayo", "olives");
