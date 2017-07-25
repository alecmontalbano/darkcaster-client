/*jshint esversion:6*/
HourController.$inject = ['WeatherService', 'images']; //magic for us


function HourController(weather, images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;
  //functions
  this.search = function search(){
    weather.getHourly(this.lat, this.lon)
           .then(hourWeather => this.weatherData = hourWeather);
  };
}
module.exports = HourController;
