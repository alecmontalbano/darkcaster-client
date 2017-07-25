/*jshint esversion:6*/
const angular = require('angular');

//services
const WeatherService = require('./services/weather.service');

//components
const CurrentWeatherComponent = require('./components/current-weather');
const MinuteWeatherComponent = require('./components/minute-weather');
const HourWeatherComponent = require('./components/hour-weather');
const DayWeatherComponent = require('./components/day-weather');

//create our application
angular.module('darkcaster-client', []); //setter syntax

angular.module('darkcaster-client') //getter syntax
       .factory('WeatherService', WeatherService)
       .component('currentWeather', CurrentWeatherComponent)
       .component('minuteWeather', MinuteWeatherComponent)
       .component('hourWeather', HourWeatherComponent)
       .component('dayWeather', DayWeatherComponent);
