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
const displayForecast = (data, location) => {
    let output = '<ul>',
        i,
        len;

    for (i = 0, len = data.length; i < len; i += 1) {
        let {day, date, high, low} = data[i]; 
        output += `<li>${day} ${date}: hi| ${high}, low| ${low}</li>`;
    }

    output += '</ul>';

    location.innerHTML = output;
}

/**
 * Displays the current weather conditions for a given location.
 * @param {Object} data - The weather data object.
 * param {Object} el - The jQuery reference to the display DOM element.
 * @param {boolean} showForecast - Whether to display the forecast or not
 */
const displayWeather = (data, showForecast) => {
    const loc = document.querySelector('.details>.location'),
        date = document.querySelector('.details>.date'),
        conditions = document.querySelector('.details>.conditions'),
        temp = document.querySelector('.details>.temp'),
        sunrise = document.querySelector('.details>.sunrise'),
        sunset = document.querySelector('.details>.sunset'),
        forecast = document.querySelector('.forecast');

    // display the current weather data
    loc.innerHTML = (`${data.location.city},  ${data.location.region}`);
    date.innerHTML = (data.lastBuildDate.split(' ').splice(0, 3).join(' '));
    conditions.innerHTML = (data.item.condition.text);
    temp.innerHTML = (data.item.condition.temp);
    sunrise.innerHTML = (data.astronomy.sunrise);
    sunset.innerHTML = (data.astronomy.sunset);

    if (!!showForecast) {
        // display the forecast
        displayForecast(data.item.forecast, forecast);
    }
}
/**
 * Send an AJAX request and return the result parsed as a JSON object
 * @param {string} url - The URL for the desired resource.
 * @returns {Promise} Promise represents the parsed JSON  
 */
const fetchJSON = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('load', (evt) => {
            switch (xhr.status) {
                case 200:
                    try {
                        resolve(JSON.parse(xhr.response));
                    } catch (err) {
                        let e = new Error(`Could not parse result: ${err}.`);
                        reject(e);
                    }
                    break;
                default:
                    reject(`Error retrieving user data: ${xhr.status} - ${xhr.statusText}.`);
            }
        });
        xhr.addEventListener('error', (evt) => {
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
const getWeatherData = (e = null) =>{
    if (e == null) return;     
    const location = e.target.querySelector('[name=location]').value,
        query = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}") and u="c"`,
        endpoint = `https://query.yahooapis.com/v1/public/yql?q=${query}&format=json&env=store/datatables.org/alltableswithkeys`; 
        // fetchJSON(endpoint)
        fetch(endpoint)
        .then(response =>{
            if(response.ok) { 
                return response.json();
            }
            else {
                throw new Error(`Request Failed`);
                // Promise.reject(`Request failed.`);
            }
        })

        .then(data => {displayWeather(data.query.results.channel, true)})
        .catch(err => {document.querySelector('.error-catch').innerHTML = err});
};


// Event listener for retrieving a weather forecast
document.querySelector('.frm.weather').addEventListener('submit', (e) => {
    e.preventDefault();
    let useAPI = false;
    if (useAPI) {
        getWeatherData(e);
    }
    else {
        fetchJSON("weather-data.json")
        .then(data => {displayWeather(data.query.results.channel, true)})
        .catch(err => {document.querySelector('.error-catch').innerHTML = err});
    }
});