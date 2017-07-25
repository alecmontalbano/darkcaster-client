/*jshint esversion:6*/
const htmlTemplate = require('./weather.html');
const Controller = require('./weather.controller');

const WeatherComponent = {
  template: htmlTemplate,
  controller: Controller
};

module.exports = WeatherComponent;
