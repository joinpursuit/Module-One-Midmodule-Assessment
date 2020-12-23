/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
  let ifNumber = typeof (val) === "number" || false
  return (ifNumber || false)
}

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) {
  let ifTruthy = (val) === true || false
  if (ifTruthy === true){
      return ("Truthy")
  }
else {
  return "Falsey"
}
}


module.exports = {
  isNumber,
  isTruthy
}
