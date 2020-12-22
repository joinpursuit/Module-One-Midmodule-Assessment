/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
if( val = number){
  return val
}
console.log(isNumber(3))
}

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) {
if(val){
  return val
}
}


module.exports = {
  isNumber,
  isTruthy
}
