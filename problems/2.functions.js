/** Logs a custom greeting to the console in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {null}
*/
function logGreeting(name) {
  let name = Nora
  console.log("Hello ${name}!")
}


/** Returns a custom greeting string in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {string} - The custom greeting
*/
function greeting(name) {
  return "Hello " + "name" + "!"
}
console.log(greeting(Nora))


/** Adds a number to a global variable called globalCount
 * Access globalCount like this: global.globalCount
* @param  {number} val - The number to add to globalCount
* @returns {null}
* @modifies {global.globalCount}
*/

function incrementGlobalCount(n) {
  let global = n++
}

/** Multiplies three numbers
* @param {number} firstNum - The first number
* @param {number} secondNum - The second number
* @param {number} thirdNum - The third number
* @returns {number} - The product of the three numbers
*/
function multiply(n1, n2, n3) {
 firstNumber = n1
 secondNum = n2
 thirdNum = n3
return n1*n2*n3
}
console.log(multiply(n1 ,n2, n3))

module.exports = {
  logGreeting,
  greeting,
  incrementGlobalCount,
  multiply
}
