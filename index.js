
var apiKEY = "&appid=aaa7cded5f11ed8e1f2f7f4d424dc56d"

// console.log('is javascript connected');
// $(document).on("ready", function () { <---not working and causes failure

// GETTING the weather when clicking functionality
$("#getWeather").on("click", function () {
    var city = $("input").val();
    console.log(city);
    currentWeather(city)
    // weeklyForecast(city)
});

// function that will run once button is clicked
function currentWeather(searchValue) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + apiKEY
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("response", response) 
        $("#fiveDayForecast").empty();
        // for loop
        for (let i = 0; i < response.list.length; i=i+8) {
            // $("#fiveDayForecast").append(`${response.list[i]}`)
        console.log(response.list[i])
        console.log(response.list[i].main.temp, response.list[i].wind.speed,response.list[i].main.humidity, response.list[i].weather[0].main,response.list[i].weather[0].icon)
        var k = response.list[i].main.temp
            $("#fiveDayForecast").append(`<div class="card">
                <h5>${response.list[i].dt_txt}</h5>
                <p>Temperature: ${Math.round(((k-273.15)*1.8)+32)} °F</p>
                <p>Humidity: ${response.list[i].main.humidity}%</p>
                <p>Wind Speed: ${response.list[i].wind.speed}
                <img src="https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}.png" />
            </div>`)
        var cityData = response.list[i].main.humidity
        // var windSpeed = response.list[i].wind.speed
        // var clouds = response.list[i].weather[0].main
        // var date = response.list[i].weather[0].icon
        var displayData = $("<p>").text("Humidity: " + cityData);
        // var displayData = $("<p>").text("Humidity: " + cityData, "Wind Speed: " + windSpeed, "Clouds: " + clouds, "Date: " + date);
        $("#Humidity").append(displayData);
        // $("#Wind Speed").append(displayData);
        // $("#Clouds").append(displayData);
        // $("#Date").append(displayData);
        };

    })
};