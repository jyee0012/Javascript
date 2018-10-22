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
    el.innerHTML = Handlebars.templates['project'](data);
  };
  /**
   * Setup Register Helper from Handlebars for temperature
   */


  var tempVar = 'c';
  Handlebars.registerHelper('temperature', function (value) {
    if (tempVar == 'c') {
      return value + '°C'; // &#176 == °
    } else {
      return value + '°F';
    }
  });
  Handlebars.registerPartial('forecastPartial', '{{day}} {{date}} : hi| {{high}} , low| {{low}}'); // Event listener for retrieving a weather forecast

  document.querySelector('.frm.weather').addEventListener('submit', function (e) {
    e.preventDefault();
    var tempRadios = document.getElementsByName('temperature');

    for (var i = 0; i < tempRadios.length; i++) {
      if (tempRadios[i].checked) {
        tempVar = tempRadios[i].value;
      }
    }

    var location = e.target.querySelector('[name=location]').value,
        query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"".concat(location, "\") and u=\"").concat(tempVar, "\"&format=json&env=store/datatables.org/alltableswithkeys");
    fetch("https://query.yahooapis.com/v1/public/yql?q=".concat(query)).then(function (data) {
      return data.json();
    }) // see Response.json() in the Fetch API spec
    .then(function (json) {
      json = json.query.results.channel; //console.log(json);

      displayWeather(json, document.querySelector('.weather-display')); //document.querySelector('.weather-display').innerHTML = Handlebars.templates['projects'](json[0]);
    });
  });
})();
