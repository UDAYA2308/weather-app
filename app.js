const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const location = process.argv[2]

if (location) {
    geocode.geocode(location, (error, { Latitude, Longitude, location } = {}) => {
        if (error)
            return console.log(error)

        forecast(Latitude, Longitude, (error, forecastdata) => {
            if (error)
                return console.log(error)
            console.log(location)
            console.log(forecastdata)
        })
    })
} else {
    console.log('Please provide location')
}