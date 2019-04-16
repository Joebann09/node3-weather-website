const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoiam9lYmFubjA5IiwiYSI6ImNqdWF4eG10bjA3cXEzeW9nZTFjZ2x1bGQifQ.UCqCLU5vN3G6q7ccTv3fiQ&limit=1'

    request.get({ url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0){
            callback('Unable to connect to find location. Try again with different search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1], 
                longitude: body.features[0].center[0], 
                location: body.features[0].place_name
            })
        }
    })
}


module.exports = geocode