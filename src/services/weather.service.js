/*jshint esversion:6*/
const weatherData = require('../../mocks/weather.json');
WeatherService.$inject = [];

function WeatherService(){
  return {
    //label       function name
    getCurrently: getCurrently
  };
  function getCurrently(){
    return weatherData.currently;
  }
}

module.exports = WeatherService;
