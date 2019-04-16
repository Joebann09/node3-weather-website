const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/b331b5370d7c43706d5700aa5caa18ea/'+lat+','+long+'?units=us&lang=en'
    
    request.get({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error){
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} The high for today is ${body.daily.data[0].temperatureHigh} and the low for today is ${body.daily.data[0].temperatureLow}. It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability*100}% chance of rain.`)
        }
    })
}

module.exports = forecast