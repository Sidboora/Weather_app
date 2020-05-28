const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b09a84dc6c2ad15be1e70c69e2011186&query='+ latitude + ',' + longitude

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)}
        // else if (response.body.current==0) {
        //     callback('Unable to find location', undefined)
        // } 
        else {
            callback(undefined,  ' It is currently ' + response.body.current.temperature+ ' degrees out.')
        }
    })
}

module.exports = forecast