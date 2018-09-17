// Event listener for retrieving the weather forecast
// **** Learn more jquery functions ****
(function ($) {
    'use strict';
function fahrenheitCelsius(fahrenheit){
    return Math.round((fahrenheit - 32) / 1.8);
};
function displayWeather(data){
    console.log(data);
    var locationText = document.querySelector('.location'),
    dateText = document.querySelector('.date'),
    conditionsText = document.querySelector('.conditions'),
    currentTempText = document.querySelector('.temp'),
    sunriseText = document.querySelector('.sunrise'),
    sunsetText = document.querySelector('.sunset'),
    forecast = document.querySelector('.forecast'),
    forecastList = document.createElement('ul');

    locationText.innerHTML = data.location.city + ', ' + data.location.region + ', ' + data.location.country;
    dateText.innerHTML = data.item.condition.date;
    conditionsText.innerHTML = data.item.condition.text;
    currentTempText.innerHTML = fahrenheitCelsius(data.item.condition.temp) + ' &#176C';
    sunriseText.innerHTML = data.astronomy.sunrise;
    sunsetText.innerHTML = data.astronomy.sunset;

    for (var i = 0; i < data.item.forecast.length;i++) {
        var currentForecast = data.item.forecast[i],
        currentForecastItem = document.createElement('li');
        
        currentForecastItem.textContent = currentForecast.day + ' ' + currentForecast.date + ': High: ' + currentForecast.high + ' Low: ' + currentForecast.low + ' / Conditions: ' + currentForecast.text; 
        console.log(currentForecastItem);
        forecastList.appendChild(currentForecastItem);
    }
    forecast.appendChild(forecastList);
};

$('.frm.weather').on('submit', function(evt){
    // good times......?
    evt.preventDefault();
    // error checking
    var input = $(evt.target).find('[name=location]').val();
    if (input == null || $.trim(input).length == 0)
    {
        input = 'edmonton, ab';
    }
    // Build query 
    // get the location
    // declare required vars
    var location = input, 
    query = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location +'")',
    endpoint = 'https://query.yahooapis.com/v1/public/yql?q=' + query + '&format=json&env=store://datatables.org/alltableswithkeys';

    // Get the data
    // send the request
    $.getJSON(endpoint,function (data){
        // reduce to only require data
        data = data.query.results.channel;
        //  display the weather
        displayWeather(data);
    });
    // Parse JSON

    // Display data
    // console.log(data.query);
    // console.log(data.query.results.channel.astronomy.sunrise.val());
});
}(jQuery));