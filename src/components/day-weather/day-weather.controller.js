/*jshint esversion:6*/
const clearDay = require('../../images/clear-day.svg');
MainController.$inject = ['WeatherService']; //magic for us


function MainController(weather){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = {
    'clear-day': clearDay
  };
  //functions
  this.search = function search(){
    weather.getDaily(this.lat, this.lon)
           .then(dayWeather => this.weatherData = dayWeather);
  };
}
module.exports = MainController;
