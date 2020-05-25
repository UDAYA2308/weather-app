const request = require('postman-request')
const geocode = require('./utils/geocode')
    // const url = 'http://api.weatherstack.com/current?access_key=dac82d5b47b0a993572c994661db2c66&query=37.8267,-122.4233&units=s'
    // request({ url: url, json: true }, (error, response) => {
    //     if (error) {
    //         console.log("Unable to connect to weather service!")
    //     } else if (response.body.error) {
    //         console.log("Unable to find location")
    //     } else {
    //         const current_degree = response.body.current.temperature
    //         const feel_like = response.body.current.feelslike
    //         console.log('The temperature is %s .It feels like %s', current_degree, feel_like)
    //     }
    // })

// const geoCode_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidWRheWEwNCIsImEiOiJja2FtM2EzdHMwMnhsMnNwZnd5eGxncjl3In0.uFvUDHi0YJJ2xns-12kHiQ&limit=1'
// request({ url: geoCode_url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to mapbox service!")
//     } else if (response.body.features.length == 0) {
//         console.log("Unable to find location")
//     } else {
//         const lat = response.body.features[0].center[1]
//         const long = response.body.features[0].center[0]
//         console.log('Latitude: %s Longitude: %s', lat, long)

//     }
// })


geocode.geocode('Los angels', (error, data) => {
    console.log('Error', error)
    console.log(data)
})