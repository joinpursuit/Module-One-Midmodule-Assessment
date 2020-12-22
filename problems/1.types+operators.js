/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {

  if (typeof val === "number")
  {
    return true
  }else 
  {
    return false
  }

}
isNumber()
console.log(isNumber(-5))

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) 
{

   let other = val
   console.log('ingreso ' + other)
  switch(other)
  {
    case typeof other === "boolean"       : return other;    break;
    case typeof other === "number"        : return true;   break;
    case typeof other === "string"        : return true;   break;
    case typeof other === "undefined"     : return false;  break;
  //   // case typeof val === ""        : return true;  break;
  //   // case  0         : return false; break;
  //   // case null       : return false; break;  
  //   // case undefined  : return false; break;
  //   // case NaN        : return false; break;
  //   // case 'NaN'      : return false; break;
  //   // case Infinity   : return true;  break;
  //   // default         : return true;  break;
  }

}

isTruthy()
console.log(isTruthy(7))

module.exports = {
  isNumber,
  isTruthy
}
