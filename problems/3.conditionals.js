/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise
* @param {number} temp - The current temperature
* @returns {string} - A message about the temperature
*/
function temperatureMessage(temp) {
  let temp = 45
  if(temp > 32) {
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
  let temp = 45 
  if (temp < 32 ? "It's freezing!" : "It's alright") {
    return temperatureMessageUsingTernary(temp)
  }
  
}


/** Returns "You are a senior" if the age is 65 or older, "You are an adult" if the age is 18 or older, and "You are a minor" otherwise.
* @param {number} age - The age of the user
* @returns {string} - A message about their age
*/
function ageMessage(age) {
  age = userAge
  if (userAge >= 65) {
    return "You are a senior"
  } else if (userAge >= 18) {
    return "You are an adult"
  }
  else "You are a minor"
}

console.log(userAge)

module.exports = {
  temperatureMessage,
  temperatureMessageUsingTernary,
  ageMessage
}
