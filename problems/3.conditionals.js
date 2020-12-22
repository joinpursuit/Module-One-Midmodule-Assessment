/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise
* @param {number} temp - The current temperature
* @returns {string} - A message about the temperature
*/
function temperatureMessage(temp) {
  let weather = ""
  if (temp < 32) {
    weather = "It's freezing!"
  }
  else {
    weather = "It's alright"
  }
  return weather
}

/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise. The implementation must use a ternary.
* @param {number} temp - The current temperatur
* @returns {string} - A message about the temperature
*/
function temperatureMessageUsingTernary(temp) {
  return temp < 32 ? "It's freezing!" : "It's alright"
}


/** Returns "You are a senior" if the age is 65 or older, "You are an adult" if the age is 18 or older, and "You are a minor" otherwise.
* @param {number} age - The age of the user
* @returns {string} - A message about their age
*/
function ageMessage(age) {
  state = ""
  if (age >= 65) {
    state = "You are a senior"
  }
  else if (age >= 18) {
    state = "You are an adult"
  }
  else {
    state = "You are a minor"
  }
  return state
}

module.exports = {
  temperatureMessage,
  temperatureMessageUsingTernary,
  ageMessage
}
