/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise
* @param {number} temp - The current temperature
* @returns {string} - A message about the temperature
*/
function temperatureMessage(temp) {
  let temp = 37
  if (temperatur>23){
console.log("It's really freezing")
  }else{
    console.log("It's alright")
  }

}

/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise. The implementation must use a ternary.
* @param {number} temp - The current temperatur
* @returns {string} - A message about the temperature
*/
function temperatureMessageUsingTernary() {
  let temp =37
  temp<=24 ? console.log("It's really freezing"):console.log("It's alright")

}


/** Returns "You are a senior" if the age is 65 or older, "You are an adult" if the age is 18 or older, and "You are a minor" otherwise.
* @param {number} age - The age of the user
* @returns {string} - A message about their age
*/
function ageMessage(age) {
let age1 =65
let age2=18
if (age1 < 70 ){ 
  console.log("You are an adult")
} 
if (age2<19){
  console.log("You are a minor" )
}
return[("age1", "age2")]
}

module.exports = {
  temperatureMessage,
  temperatureMessageUsingTernary,
  ageMessage
}
