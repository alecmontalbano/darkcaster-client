/*jshint esversion:6*/
const htmlTemplate = require('./current-weather.html');
const currentController = require('./current-weather.controller');

const CurentWeatherComponent = {
  template: htmlTemplate,
  controller: currentController
};

module.exports = CurentWeatherComponent;
