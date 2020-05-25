const request = require('postman-request')
const geocode = (address, callback) => {
    address = encodeURIComponent(address)
    const url = ('https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidWRheWEwNCIsImEiOiJja2FtM2EzdHMwMnhsMnNwZnd5eGxncjl3In0.uFvUDHi0YJJ2xns-12kHiQ&limit=1')

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather app!')
        } else if (response.body.features.length == 0) {
            callback('Unable to find location')
        } else {
            const lat = response.body.features[0].center[1]
            const long = response.body.features[0].center[0]
            const location = response.body.features[0].place_name
            const data = {
                Latitude: lat,
                Longitude: long,
                location: location
            }
            callback('', data)
        }
    })
}


module.exports = {
    geocode: geocode
}