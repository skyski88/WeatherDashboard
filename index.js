
var apiKEY = "&appid=aaa7cded5f11ed8e1f2f7f4d424dc56d"

// console.log('is javascript connected');
// $(document).on("ready", function () { <---not working and causes failure

// GETTING the weather when clicking functionality
$("#getWeather").on("click", function () {
    var city = $("input").val();
    // console.log('proof of click function');
    console.log(city);
    searchWeather(city);
});

// function that will run once button is clicked
function searchWeather(searchValue) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=aaa7cded5f11ed8e1f2f7f4d424dc56d"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var column = $("<div>").addClass("col-md-2")
        var weatherData = $("<p>").text(response.theCurrentWeather)
        // for loop
        for (let i = 0; i < response.list[i].main; i++) {
        console.log(response.list[i]);
        var cityData = (response.list[i]);
        var displayData = $("<p>").text("Humidity: " + cityData);
        $("#humidity").append(displayData);
        };

    })
};