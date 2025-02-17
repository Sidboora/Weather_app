const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic2lkYm9vcmExOTk4IiwiYSI6ImNrYTc0eTAyNDBna2syenBiZWg4aGFucmQifQ.PcNXIG8qL0poiBU4cYE9GQ&limit=1'

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)}
        //  else if (response.features.length === 0) {
        //     callback('Unable to find location. Try another search.', undefined)
        
         else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
})
}

module.exports = geocode