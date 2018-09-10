// Event listener for retrieving the weather forecast
// **** Learn more jquery functions ****
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
        console.log(data);
    });

    // Parse JSON

    // Display data
    // console.log(data.query);
    // console.log(data.query.results.channel.astronomy.sunrise.val());
});