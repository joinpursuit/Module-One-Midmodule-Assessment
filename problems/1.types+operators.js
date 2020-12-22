/** Takes in an value and returns if it is a number
 * @param {any} val - The input value
 * @returns {boolean} - Is val a number
 */
function isNumber(val) {

    return (typeof val === 'number')

}

isNumber()

/** Takes in a value and returns whether it is truthy
 * @param {any} val - The input value
 * @returns {boolean} - Is val truthy
 */
function isTruthy(val) {

    if (typeof val !== 'number') { return true } else { return false }

}

isTruthy()


module.exports = {
    isNumber,
    isTruthy
}