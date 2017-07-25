/*jshint esversion:6*/
const weatherData = require('../../mocks/weather.json');
WeatherService.$inject = ['$http'];

function WeatherService($http){
  const baseUrl = 'https://frozen-journey-54599.herokuapp.com/weather/';
  return {
    //label       function name
    getCurrently: getCurrently,
    getMinutely: getMinutely,
    getHourly: getHourly,
    getWeekly: getWeekly
  };
  function getCurrently(lat, lon){
    const url= `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response => {
                  return response.data.currently;
                });
  }
  function getMinutely(lat, lon){
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response => {
                  return response.data.minutely;
                });
  }
  function getHourly(lat, lon){
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response => {
                  return response.data.hourly;
                });
  }
  function getWeekly(lat, lon){
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response => {
                  return response.data.weekly;
                });
  }
}

module.exports = WeatherService;
