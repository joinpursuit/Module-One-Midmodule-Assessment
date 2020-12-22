/** Logs a custom greeting to the console in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {null}
*/
function logGreeting(name) {
  console.log("Hello " + name + "!" )
}

logGreeting("Avery")


/** Returns a custom greeting string in the form "Hello Avery!"
* @param {string} name - The name of the user to greet
* @returns {string} - The custom greeting
*/
function greeting(name) {
  return ("Hello " + name + "!" )
  
}

console.log(greeting("Avery")


/** Adds a number to a global variable called globalCount
 * Access globalCount like this: global.globalCount
* @param  {number} val - The number to add to globalCount
* @returns {null}
* @modifies {global.globalCount}
*/
function incrementGlobalCount(val) {
  val = val + 1 
 console.log(val)
}
incrementGlobalCount(5)

/** Multiplies three numbers
* @param {number} firstNum - The first number
* @param {number} secondNum - The second number
* @param {number} thirdNum - The third number
* @returns {number} - The product of the three numbers
*/
function multiply(firstNum, secondNum, thirdNum) {
  return (firstNum * secondNum * thirdNum)

 }
 console.log(multiply(2, 2, 2))
 



module.exports = {
  logGreeting,
  greeting,
  incrementGlobalCount,
  multiply
}
