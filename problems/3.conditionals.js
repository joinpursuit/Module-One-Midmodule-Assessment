/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise
* @param {number} temp - The current temperature
* @returns {string} - A message about the temperature
*/
function temperatureMessage(temp) {
if (temp <32) {
  return "It's freezing!"
} else {
  return "It's alright"
}
}

/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise. The implementation must use a ternary.
* @param {number} temp - The current temperatur
* @returns {string} - A message about the temperature
*/
function temperatureMessageUsingTernary(temp) {
  temp < 32 ? "It's freezing" : "It's alright"
}


/** Returns "You are a senior" if the age is 65 or older, "You are an adult" if the age is 18 or older, and "You are a minor" otherwise.
* @param {number} age - The age of the user
* @returns {string} - A message about their age
*/
function ageMessage(age) {
  let message = " "
if (age < 18) {
  message = "You are a minor"
} else if (age >= 18 && age >65) {
  message = "You are and adult"
} else {
  message = "You are a senior"
}
return message
}

module.exports = {
  temperatureMessage,
  temperatureMessageUsingTernary,
  ageMessage
}
