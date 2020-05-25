const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const location = process.argv[2]

if (location) {
    geocode.geocode(location, (error, data) => {
        if (error)
            return console.log(error)

        forecast(data.Latitude, data.Longitude, (error, forecastdata) => {
            if (error)
                return console.log(error)
            console.log(data.location)
            console.log(forecastdata)
        })
    })
} else {
    console.log('Please provide location')
}