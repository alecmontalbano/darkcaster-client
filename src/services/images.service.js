/*jshint esversion:6*/
const clearDay = require('../images/clear-day.svg');
const clearNight = require('../images/clear-day.svg');
const Rain = require('../images/clear-day.svg');
const Snow = require('../images/clear-day.svg');
const Sleet = require('../images/clear-day.svg');
const Wind = require('../images/clear-day.svg');
const Fog = require('../images/clear-day.svg');
const Cloudy = require('../images/clear-day.svg');
const partlyCloudyDay = require('../images/clear-day.svg');
const partlyCloudyNight = require('../images/clear-day.svg');
const missingImage = require('../images/missing.png');

ImageService.$inject = [];

function ImageService(){
  const imageLookup = {
    'clear-day': clearDay,
    'clear-night': clearNight,
    'rain': Rain,
    'snow': Snow,
    'sleet': Sleet,
    'wind': Wind,
    'fog': Fog,
    'cloudy': Cloudy,
    'partly-cloudy-day': partlyCloudyDay,
    'partly-cloudy-night': partlyCloudyNight
  };
  return {
    lookup: imageLookup,
    missing: missingImage
  };
}

module.exports = ImageService;
