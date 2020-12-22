/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise
* @param {number} temp - The current temperature
* @returns {string} - A message about the temperature
*/
function temperatureMessage() {

if (temp < 32) {
console.log("It's freezing!");
} else {
  console.log("It's alright")
}

}

/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise. The implementation must use a ternary.
* @param {number} temp - The current temperatur
* @returns {string} - A message about the temperature
*/
function temperatureMessageUsingTernary() {

var temp = 32

var itsCold = temp < 32 ? "It's freezing!" : "It's Alright"

}


/** Returns "You are a senior" if the age is 65 or older, "You are an adult" if the age is 18 or older, and "You are a minor" otherwise.
* @param {number} age - The age of the user
* @returns {string} - A message about their age
*/
function ageMessage() {

var whatAreYou = age > 18 ? "You are an Adult" : age <= 65 "You are a senior" 

}

module.exports = {
  temperatureMessage,
  temperatureMessageUsingTernary,
  ageMessage
}
