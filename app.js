const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=dac82d5b47b0a993572c994661db2c66&query=37.8267,-122.4233&units=s'
request({ url: url, json: true }, (error, response) => {
    const current_degree = response.body.current.temperature
    const feel_like = response.body.current.feelslike
    console.log('the temperature is %s .It feels like %s', current_degree, feel_like)
})