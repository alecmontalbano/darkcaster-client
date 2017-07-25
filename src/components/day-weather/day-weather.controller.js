/*jshint esversion:6*/
DayController.$inject = ['WeatherService', 'images']; //magic for us


function DayController(weather){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;
  //functions
  this.search = function search(){
    weather.getDaily(this.lat, this.lon)
           .then(dayWeather => this.weatherData = dayWeather);
  };
}
module.exports = DayController;
