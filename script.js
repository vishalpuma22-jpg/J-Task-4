console.log("========== PART 1: FUNCTIONS AND PARAMETERS ==========");

// 1. Welcome function
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();


// 2. Student details
function studentDetails(name, age, cgpa) {
    console.log("Name:", name, "Age:", age, "CGPA:", cgpa);
}
studentDetails("Bhavya", 21, 8.5);
studentDetails("Vidhya", 22, 9.0);


// 3. Calculate student fee
function calculateFee(fee) {
    return fee;
}
let studentFee = calculateFee(200000);
console.log("Student Fee:", studentFee);


// 4. Discount calculation
function discount(percent) {
    let fee = 200000;
    let discountAmount = fee * percent / 100;
    let finalFee = fee - discountAmount;
    console.log("Discount:", discountAmount);
    console.log("Final Fee:", finalFee);
}
discount(10);


// 5. Student form with default parameter
function studentForm(name, age, disability = "no") {
    console.log("Name:", name, "Age:", age, "Disability:", disability);
}
studentForm("Bhavya", 21, "yes");
studentForm("Vidhya", 22, "no");
studentForm("Vishal", 23);


// ========== PART 2: FUNCTION TYPES AND SCOPE ==========

// 6. Named function
function displayMessage(message) {
    console.log(message);
}
displayMessage("This is a named function");


// 7. Anonymous function
const printName = function(name) {
    console.log("Name:", name);
};
printName("Bhavya");


// 8. Arrow function
const printNumber = (number) => {
    console.log("Number:", number);
};
printNumber(100);


// 9. var, let, and const scope
function checkScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log("Inside block - var:", a);
        console.log("Inside block - let:", b);
        console.log("Inside block - const:", c);
    }

    console.log("Outside block - var:", a);

    // let and const cannot be accessed outside the if block.
}
checkScope();


// 10. Predict the output
console.log("Value before declaration:", value);
var value = 10;
console.log("Value after assignment:", value);


// ========== PART 3: CALLBACK AND HIGHER-ORDER FUNCTIONS ==========

// 11. Pass second() as a callback to first()
function second() {
    console.log("Second function executed");
}

function first(callback) {
    console.log("First function executed");
    callback();
}
first(second);


// 12. Add two numbers and call a callback
function add(callback, a, b) {
    console.log("Sum:", a + b);
    callback(a, b);
}

function showNumbers(a, b) {
    console.log("Numbers:", a, b);
}
add(showNumbers, 10, 5);


// 13. Subtraction function as a callback
const sub = (num1, num2) => {
    console.log("Subtraction:", num1 - num2);
};

add(sub, 20, 8);


// 14. Multiplication with callback
function multiply(callback, a, b) {
    console.log("Multiplication:", a * b);
    callback(a, b);
}

multiply(showNumbers, 6, 4);


// 15. Division function as a callback
function divide(num1, num2) {
    if (num2 === 0) {
        console.log("Cannot divide by zero");
    } else {
        console.log("Division:", num1 / num2);
    }
}

function calculate(callback, a, b) {
    callback(a, b);
}
calculate(divide, 20, 4);


// 16. Higher-order function with a student's name
function studentCallback(callback) {
    callback("Bhavya");
}

studentCallback(function(name) {
    console.log("Student Name:", name);
});


// ========== PART 4: GENERATOR FUNCTIONS ==========

// 17. Cashback generator
function* cashbackGenerator() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

for (const offer of cashbackGenerator()) {
    console.log(offer);
}


// 18. Call next() three times
function* offerGenerator() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

const offers = offerGenerator();

console.log(offers.next());
console.log(offers.next());
console.log(offers.next());


// 19. Generator with five discount messages
function* discountMessages() {
    yield "5% discount";
    yield "10% discount";
    yield "15% discount";
    yield "20% discount";
    yield "25% discount";
}

for (const message of discountMessages()) {
    console.log(message);
}


// 20. Generator with three student names
function* studentNames() {
    yield "Bhavya";
    yield "Vidhya";
    yield "Vishal";
}

for (const name of studentNames()) {
    console.log("Student:", name);
}


// 21. Generator with four yield statements
function* fourValues() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}

const numbers = fourValues();

console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log("After consuming values:", numbers.next());


// ========== PART 5: CURRYING AND UNCURRYING ==========

// 22. Normal add function with three parameters
function addThree(a, b, c) {
    console.log("Sum of three numbers:", a + b + c);
}
addThree(5, 10, 15);


// 23. Curried add function using nested functions
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            console.log("Curried sum:", a + b + c);
        };
    };
}


// 24. Call the curried function with 5, 10, and 15
curriedAdd(5)(10)(15);


// 25. Curried product discount calculator
function productPrice(price) {
    return function(discountPercent) {
        return function(quantity) {
            let total = price * quantity;
            let discountAmount = total * discountPercent / 100;
            let finalPrice = total - discountAmount;

            console.log("Product Price:", price);
            console.log("Quantity:", quantity);
            console.log("Discount:", discountAmount);
            console.log("Total Discounted Price:", finalPrice);

            return finalPrice;
        };
    };
}

productPrice(1000)(10)(3);


// 26. Normal and curried functions comparison
function normalCalculation(a, b, c) {
    return a + b + c;
}

function curriedCalculation(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log("Normal result:", normalCalculation(5, 10, 15));
console.log("Curried result:", curriedCalculation(5)(10)(15));


// ========== PART 6: IIFE, RETURN, AND MIXED PRACTICE ==========

// 27. IIFE with product name and discount
(function(productName, discountPercent) {
    console.log(
        `${productName} is on sale with ${discountPercent}% discount!`
    );
})("Laptop", 20);


// 28. Function returning a number
function getNumber() {
    return 100;
}

let returnedNumber = getNumber();
console.log("Returned Number:", returnedNumber);


// 29. Function returning student's marks
function getMarks(marks) {
    return marks;
}

let studentMarks = getMarks(95);
console.log("Student Marks:", studentMarks);


// 30. Student fee calculator using a default parameter,
// callback function, and return value
function studentFeeCalculator(
    fee = 200000,
    callback = (amount, percent) => amount * percent / 100,
    discountPercent = 10
) {
    let discountAmount = callback(fee, discountPercent);
    let finalFee = fee - discountAmount;

    return finalFee;
}

const calculateDiscount = (amount, percent) => {
    return amount * percent / 100;
};

let finalStudentFee = studentFeeCalculator(
    200000,
    calculateDiscount,
    10
);

console.log("Original Student Fee: 200000");
console.log("Discount Percentage: 10%");
console.log("Final Student Fee:", finalStudentFee);

console.log("========== ALL 30 QUESTIONS COMPLETED ==========");