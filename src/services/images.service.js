/*jshint esversion:6*/
const clearDay = require('../images/clear-day.svg');
const clearNight = require('../images/clear-night.svg');
const Rain = require('../images/rain.svg');
const Snow = require('../images/snow.svg');
const Sleet = require('../images/sleet.svg');
const Wind = require('../images/wind.svg');
const Fog = require('../images/fog.svg');
const Cloudy = require('../images/cloudy.svg');
const partlyCloudyDay = require('../images/partly-cloudy-day.svg');
const partlyCloudyNight = require('../images/partly-cloudy-night.svg');
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
