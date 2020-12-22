/** Logs a custom greeting to the console in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {null}
*/
function logGreeting() {
  let greeting = "Hello Avery"
  console.log(greeting)
}


/** Returns a custom greeting string in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {string} - The custom greeting
*/
function greeting() {

let greet = "Hello"
   return greet + " " + " name!"
}

let customGreet = greeting("Avery")


console.log(customGreeting)


/** Adds a number to a global variable called globalCount
 * Access globalCount like this: global.globalCount
* @param  {number} val - The number to add to globalCount
* @returns {null}
* @modifies {global.globalCount}
*/


var x = 3;

//adding global variable

function incrementGlobalCount() {

x = 10;
//adding 10 to global variable 3, can use 'x' again because it's local not global
}

return x + x;

/** Multiplies three numbers
* @param {number} firstNum - The first number
* @param {number} secondNum - The second number
* @param {number} thirdNum - The third number
* @returns {number} - The product of the three numbers
*/
function multiply() {

return sum(firstNum, secondNum, thirdNum)
}

module.exports = {
  logGreeting,
  greeting,
  incrementGlobalCount,
  multiply
}
