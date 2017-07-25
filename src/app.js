/*jshint esversion:6*/
const angular = require('angular');

//services
const WeatherService = require('./services/weather.service');

//components
const WeatherComponent = require('./components/weather/index');

//create our application
angular.module('darkcaster-client', []); //setter syntax

angular.module('darkcaster-client') //getter syntax
       .factory('WeatherService', WeatherService)
       .component('currentWeather', WeatherComponent)
       .component('minuteWeather', WeatherComponent);
