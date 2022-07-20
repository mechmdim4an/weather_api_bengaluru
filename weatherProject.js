//jshint esversion:6

const { response } = require("express");
const express = require("express");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=6c145019ec1e7349e309372ff8dfeddd&units=metric";
    
    https.get(url, function (response) {
        console.log(response.statusCode); // refresh localhost/3000 the page you get 200 on HyperTerminal then it is good to go.
        response.on("data", function (data) {
            const weatherData = JSON.parse(data); // full data generated
            // console.log(weatherData); // refresh localhost/3000 the page you get 200 on HyperTerminal then it will give you JSON data.
            //Now make data compact to requirement 
            const weatherDescription = weatherData.weather[0].description;
            const temp = weatherData.main.temp;
            // console.log("Temperature of Bengaluru is :" + temp+"degrees Celcius."); similarly description etc. can done....
            const icon = weatherData.weather[0].icon
            const imageURL = " http://openweathermap.org/img/wn/"+icon+"@2x.png";
            //for multiple responses instead of res.send(); we do write res.write();...... finally we full res will be execute by res.send(); 
            res.write("<p>The weather is currently "+weatherDescription+ "!</p>");  
            res.write("<h1>The temperature of Bengaluru is : " + temp + " degrees Celcius.</h1>");
            res.write("<img src="+imageURL+">");
            res.send();
        });
    });
});


app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});




