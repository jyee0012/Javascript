;

(function () {
  "use strict";

  /**
   * Simple weather display application for demonstrating AJAX for JSON and
   * best practices for JavaScript development.  The script makes use of the 
   * Yahoo! weather API.
   */

  /**
   * Displays a weather forecast for a given location.
   * @param {Object[]} data - The array of forecast weather objects.
   * @param {Object} el - The DOM element reference for display.
   */
  var displayForecast = function displayForecast(data, el) {
    var output = '<ul>';

    for (var i = 0, len = data.length; i < len; i += 1) {
      var _data$i = data[i],
          day = _data$i.day,
          date = _data$i.date,
          high = _data$i.high,
          low = _data$i.low;
      output += "<li>".concat(day, " ").concat(date, " : hi| ").concat(high, " , low| ").concat(low, "</li>");
    }

    output += '</ul>';
    el.innerHTML = output;
  };
  /**
   * Displays the current weather for a given location.
   * @param {Object[]} data - The array of forecast weather objects.
   * @param {Object} el - The DOM element reference for display.
   * @param {boolean} showForecast - Whether to display the forecast or not
   */


  var displayWeather = function displayWeather(data, el, showForecast) {
    var loc = el.querySelector('.details>.location'),
        date = el.querySelector('.details>.date'),
        conditions = el.querySelector('.details>.conditions'),
        temp = el.querySelector('.details>.temp'),
        sunrise = el.querySelector('.details>.sunrise'),
        sunset = el.querySelector('.details>.sunset'),
        forecast = el.querySelector('.forecast'); // display the current weather data

    loc.innerHTML = "".concat(data.location.city, ", ").concat(data.location.region);
    date.innerHTML = data.lastBuildDate.split(' ').splice(0, 3).join(' ');
    conditions.innerHTML = data.item.condition.text;
    temp.innerHTML = data.item.condition.temp;
    sunrise.innerHTML = data.astronomy.sunrise;
    sunset.innerHTML = data.astronomy.sunset;

    if (!!showForecast) {
      // display the forecast
      displayForecast(data.item.forecast, forecast);
    }
  }; // Event listener for retrieving a weather forecast


  document.querySelector('.frm.weather').addEventListener('submit', function (e) {
    e.preventDefault();
    var location = e.target.querySelector('[name=location]').value,
        query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"".concat(location, "\") and u=\"c\"&format=json&env=store/datatables.org/alltableswithkeys");
    fetch("https://query.yahooapis.com/v1/public/yql?q=".concat(query)).then(function (data) {
      return data.json();
    }) // see Response.json() in the Fetch API spec
    .then(function (json) {
      json = json.query.results.channel; //console.log(json);
      //displayWeather(json, document.querySelector('.weather-display'), true);

      document.querySelector('.weather-display').innerHTML = Handlebars.templates['projects'](json[0]);
    });
  });
})();
