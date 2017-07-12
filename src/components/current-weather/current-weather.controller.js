/*jshint esversion:6*/
const clearDay = require('../../images/clear-day.svg');
MainController.$inject = ['WeatherService']; //magic for us


function MainController(weather){
  this.message = 'hello from angular';
  this.imageLookup = {
    'clear-day': clearDay
  };
  this.weatherData = weather.getCurrently();

}
module.exports = MainController;
