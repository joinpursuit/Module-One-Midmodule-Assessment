/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
  if (val === 1) {
    console.log('true')
  } else {
    console.log('false')
  }
}

isNumber()

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) {
  if (val === '') {
    console.log('falsy')
  } else {
    console.log('truthy')
  }
}

isTruthy()


module.exports = {
  isNumber,
  isTruthy
}
