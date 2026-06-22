const convertToCelsius = function(temperatureInFahrenheit) {
  return Number((((temperatureInFahrenheit-32)*5)/9).toFixed(1));
};  

const convertToFahrenheit = function(temperatureInCelsius) {
  return Number((((temperatureInCelsius*9)/5)+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
