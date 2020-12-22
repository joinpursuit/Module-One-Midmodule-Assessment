/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/

//function isNumber(n) {
  //if (n === Number) {
    //return "n is a number"
  //} 


function isNumber(n) {
  if (n <= 0 || n>0) {
    console.log ("n is a number")
    
}
console.log(isNumber(5))


/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(t) {
  if (t>2){
    return "value is truthy"
}
console.log(isTruthy(t))

module.exports = {
  isNumber,
  isTruthy
}
