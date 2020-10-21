/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
  return typeof val === 'number'
}

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) {
  return !!val
}

/** Takes in a string, coverts it to an integer and doubles it.  Returns NaN if the string is not able to be converted to a number.

* @param {string} str - The input string
* @returns {number} - The string converted to a number and doubled
*/
function doubleStr(str) {
  return Number(str) * 2
}

module.exports = {
  isNumber,
  isTruthy,
  doubleStr
}
