/*jshint esversion:6*/
MainController.$inject = ['WeatherService']; //magic for us

function MainController(weather){
  this.message = 'hello from angular';
  this.weatherData = weather.getCurrently();
}
module.exports = MainController;
