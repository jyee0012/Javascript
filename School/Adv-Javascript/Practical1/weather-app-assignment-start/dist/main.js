;

(function () {
  /**
   * Simple weather display application for demonstrating AJAX for JSON and
   * best practices for JavaScript development.  The script makes use of the 
   * Yahoo! weather API.
   *
   * param {object} $ - jQuery dependency (or compatible API such as zepto)
   */
  'use strict';
  /**
   * Displays a weather forecast for a given location.
   * @param {Object[]} data - The array of forecast weather objects.
   * @param {Object} location - The document reference to the display DOM element.
   */

  var displayForecast = function displayForecast(data, location) {
    var output = '<ul>',
        i,
        len;

    for (i = 0, len = data.length; i < len; i += 1) {
      var _data$i = data[i],
          day = _data$i.day,
          date = _data$i.date,
          high = _data$i.high,
          low = _data$i.low;
      output += "<li>".concat(day, " ").concat(date, ": hi| ").concat(high, ", low| ").concat(low, "</li>");
    }

    output += '</ul>';
    location.innerHTML = output;
  };
  /**
   * Displays the current weather conditions for a given location.
   * @param {Object} data - The weather data object.
   * param {Object} el - The jQuery reference to the display DOM element.
   * @param {boolean} showForecast - Whether to display the forecast or not
   */


  var displayWeather = function displayWeather(data, showForecast) {
    var loc = document.querySelector('.details>.location'),
        date = document.querySelector('.details>.date'),
        conditions = document.querySelector('.details>.conditions'),
        temp = document.querySelector('.details>.temp'),
        sunrise = document.querySelector('.details>.sunrise'),
        sunset = document.querySelector('.details>.sunset'),
        forecast = document.querySelector('.forecast'); // display the current weather data

    loc.innerHTML = "".concat(data.location.city, ",  ").concat(data.location.region);
    date.innerHTML = data.lastBuildDate.split(' ').splice(0, 3).join(' ');
    conditions.innerHTML = data.item.condition.text;
    temp.innerHTML = data.item.condition.temp;
    sunrise.innerHTML = data.astronomy.sunrise;
    sunset.innerHTML = data.astronomy.sunset;

    if (!!showForecast) {
      // display the forecast
      displayForecast(data.item.forecast, forecast);
    }
  };
  /**
   * Send an AJAX request and return the result parsed as a JSON object
   * @param {string} url - The URL for the desired resource.
   * @returns {Promise} Promise represents the parsed JSON  
   */


  var fetchJSON = function fetchJSON(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', function (evt) {
        switch (xhr.status) {
          case 200:
            try {
              resolve(JSON.parse(xhr.response));
            } catch (err) {
              var e = new Error("Could not parse result: ".concat(err, "."));
              reject(e);
            }

            break;

          default:
            reject("Error retrieving user data: ".concat(xhr.status, " - ").concat(xhr.statusText, "."));
        }
      });
      xhr.addEventListener('error', function (evt) {
        reject('Error retrieving user data.');
      });
      xhr.open('get', url);
      xhr.send(null);
    });
  };
  /**
   * Retrieves weather data from yahoo API based on provided location text
   * @param {Object} e - The event of submitting the form 
   */


  var getWeatherData = function getWeatherData() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (e == null) return;
    var location = e.target.querySelector('[name=location]').value,
        query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"".concat(location, "\") and u=\"c\""),
        endpoint = "https://query.yahooapis.com/v1/public/yql?q=".concat(query, "&format=json&env=store/datatables.org/alltableswithkeys"); // fetchJSON(endpoint)

    fetch(endpoint).then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Request Failed"); // Promise.reject(`Request failed.`);
      }
    }).then(function (data) {
      displayWeather(data.query.results.channel, true);
    }).catch(function (err) {
      document.querySelector('.error-catch').innerHTML = err;
    });
  }; // Event listener for retrieving a weather forecast


  document.querySelector('.frm.weather').addEventListener('submit', function (e) {
    e.preventDefault();
    getWeatherData(e);
  });
})();