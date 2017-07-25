/*jshint esversion:6*/
MinuteController.$inject = ['WeatherService', 'images']; //magic for us


function MinuteController(weather, images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;
  //functions
  this.search = function search(){
    weather.getMinutely(this.lat, this.lon)
           .then(minuteWeather => this.weatherData = minuteWeather);
  };
}
module.exports = MinuteController;
