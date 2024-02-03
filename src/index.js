// JavaScript Conditions:

/** Task: 1
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case if y less than 10
 * or multiplication in case of greater or equal than 10
 * result assign to z1 and z2 variables accordingly
 * Task A - if else - z1 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 * Task B - ternary operator - z2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
 function taskA(x, y) {
  let z1;
  //PLACE YOUR CODE BETWEEN THIS LINE:
  if (y < 10) {
    z1 = x + y;
  } else {
    z1 = x * y;
  }
  //AND THIS ONE:
  return z1;
}

function taskB(x, y) {
  
  //PLACE YOUR CODE BETWEEN THIS LINE:
    let z2 = (y < 10) ? (x + y) : (x * y);
  //AND THIS ONE:
  return z2;
}

/** Task: 2
 * The system receives 3 params - operator, alpha, beta.
 * Operator can have 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on the passed operator param.
 * Assign result to task2 variable
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 */

function calc(operator, alpha, beta) {
  let task2;
  //PLACE YOUR CODE BETWEEN THIS LINE:
     switch (operator) {
       case "add":
        task2 = alpha + beta;
        break;
       case "subtract":
        task2 = alpha - beta;
        break;
       case "multiply":
        task2 = alpha * beta;
        break;
        case "divide":
        task2 = alpha / beta;
        break;
        default:
        task2 = "Invalid operator";
      }
  //AND THIS ONE:
  return task2;

}

/**
 * Task: 3
 * Write the logic that will calculate the amount of discount
 * considering the 'ransom' amount
 * Rules are the following:
 * - 0    - 350:  0
 * - 351  - 1350: 15
 * - 1351 - 2700: 30
 * - 2701 - 6500: 45
 * assign the result to the 'discount' variable
 */

function calculateDiscount(ransom) {
  let discount;
  //PLACE YOUR CODE BETWEEN THIS LINE:
  if (ransom >= 0 && ransom <= 350) {
      discount = 0;
    } else if (ransom <= 1350) {
      discount = 15;
    } else if (ransom <= 2700) {
      discount = 30;
    } else if (ransom <= 6500) {
      discount = 45;
    } else {
      discount = "Invalid ransom amount";
    }
  //AND THIS ONE:
  return discount;
}

// JavaScript Loops:

/** Task: 1
 * implement factorial algorithm using for, while, do..while operators
 * assign the result to corresponding variable
 * for -> forFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * while -> whileFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * do..while -> doFactorial: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while
 */
 let forFactorial, whileFactorial, doFactorial;
 const n = 10; // 10! = 3628800

 // For Loop
  let forResult = 1;
  for (let i = 2; i <= n; i++) {
      forResult *= i;
  }
  forFactorial = forResult;

  // While Loop
  let whileResult = 1;
  let whileIterator = 2;
  while (whileIterator <= n) {
      whileResult *= whileIterator;
      whileIterator++;
  }
  whileFactorial = whileResult;

  // Do-While Loop
  let doResult = 1;
  let doIterator = 2;
  do {
      doResult *= doIterator;
      doIterator++;
  } while (doIterator <= n);
  doFactorial = doResult;

 
/** Task: 2
  * return the concatenated string from an array of substring
  * assign the result to variable 'str'
  * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  */
 let str;
 const substr = ['I', ' love', ' JS'];
 let result = '';
  for (const sub of substr) {
    result += sub;
  }
  str = result;

 
/** Task: 3
  * calculate a total of income of certain person
  * assign the result to the variable 'totalIncome'
  * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
  */
  const personIncomes = {
  salary: 1985,
  rent: -600,
  interestOnDeposit: 250,
  otherExpences: -300
  };

  let sum = 0;
  for (const key in personIncomes) {
   sum += personIncomes[key];
  }
  let totalIncome = sum;


module.exports = {
  taskA,
  taskB,
  calc,
  calculateDiscount,
  forFactorial,
  whileFactorial,
  doFactorial,
  str,
  totalIncome,
};
