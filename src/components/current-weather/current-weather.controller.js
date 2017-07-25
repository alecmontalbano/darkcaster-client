/*jshint esversion:6*/
CurrentController.$inject = ['WeatherService', 'images']; //magic for us

function CurrentController(weather){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;
  //functions
  this.search = function search(){
    weather.getCurrently(this.lat, this.lon)
           .then(currentWeather => this.weatherData = currentWeather);
  };
}
module.exports = CurrentController;
