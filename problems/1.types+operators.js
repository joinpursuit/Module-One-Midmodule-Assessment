/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
console.log(typeof val)
if (typeof val === number)
return val 
else "not a number"

}

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) {
if(val === true)

return typeof val
}


module.exports = {
  isNumber,
  isTruthy
}
