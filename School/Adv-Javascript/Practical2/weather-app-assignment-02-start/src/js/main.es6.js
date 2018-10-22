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
const displayForecast = (data, el) => {
    let output = '<ul>';

    for (let i = 0, len = data.length; i < len; i += 1) {
        let {day, date, high, low} = data[i];
        output += `<li>${day} ${date} : hi| ${high} , low| ${low}</li>`;
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
const displayWeather = (data, el, showForecast) => {
    el.innerHTML = Handlebars.templates['project'](data);
};

/**
 * Setup Register Helper from Handlebars for temperature
 */
let tempVar = 'c'
Handlebars.registerHelper('temperature', (value) => {
    if (tempVar == 'c') {
        return value + '°C'; // &#176 == °
    }
    else {
        return value + '°F';
    }
});  
/**
 * Handlebar Partials:
 * "I couldn't get it working, but i did discover that to use partials during runtime you have to create your own functions to use the partial"
 * this is where i found information: "https://github.com/gruntjs/grunt-contrib-handlebars/issues/49"
 * here is an example and where to get basic handlebars examples: "https://www.sitepoint.com/a-beginners-guide-to-handlebars/"
 */ 
// Handlebars.registerPartial('forecastPartial', '{{day}} {{date}} : hi| {{high}} , low| {{low}}');

// Event listener for retrieving a weather forecast
document.querySelector('.frm.weather').addEventListener('submit', (e) => {
    e.preventDefault();

    let tempRadios = document.getElementsByName('temperature');
    for(let i = 0; i < tempRadios.length; i++){    
        if (tempRadios[i].checked) {
            tempVar = (tempRadios[i].value);
        }
    }

    let location = e.target.querySelector('[name=location]').value,
        query = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}") and u="${tempVar}"&format=json&env=store/datatables.org/alltableswithkeys`;
    

    fetch(`https://query.yahooapis.com/v1/public/yql?q=${query}`)
        .then(data => data.json()) // see Response.json() in the Fetch API spec
        .then(json => {
            json = json.query.results.channel;
            //console.log(json);
            displayWeather(json, document.querySelector('.weather-display'));
            //document.querySelector('.weather-display').innerHTML = Handlebars.templates['projects'](json[0]);
    });
});