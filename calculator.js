/** 7$ Tasks
 Create an object named calculator with methods add, subtract, and multily#
 Imlement the calculate method in the calculator object, which takes an oeration ('add', 'subtract', or
'multily') and two numbers#
 Use call to erform an addition oeration using the calculate method#
 Use aly to erform a multilication oeration using the calculate method with arguments as an array#
 Create another object named discountCalculator with a discount ercentage roerty and a method
alyDiscount#
 Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and
can be reused.    */



const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    calculate(operation, a, b) {
        return this[operation](a, b);
    }
};

const addResult = calculator.calculate.call(calculator, 'add', 10, 5);
console.log('Addition Result:', addResult);

const multiplyResult = calculator.calculate.apply(calculator, ['multiply', 10, 5]);
console.log('Multiplication Result:', multiplyResult);

const discountCalculator = {
    discountPercentage: 10,
    applyDiscount(amount) {
        return amount - (amount * this.discountPercentage / 100);
    }
};

const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);

const discountedPrice = calculateDiscount(100);
console.log('Discounted Price:', discountedPrice);

/**   output
Addition Result: 15
Multiplication Result: 50
Discounted Price: 90
 */
