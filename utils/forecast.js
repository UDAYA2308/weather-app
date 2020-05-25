const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dac82d5b47b0a993572c994661db2c66&query=' + latitude + ',' + longitude + '&units=m'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (response.body.error) {
            callback.log("Unable to find location", undefined)
        } else {
            const current_degree = response.body.current.temperature
            const feel_like = response.body.current.feelslike
            const data = response.body.current.weather_descriptions[0] + '\nThe temperature is ' + current_degree + '. It feels like ' + feel_like
            callback(undefined, data)
        }
    })

}

module.exports = forecast