const geoRev = require('geo-reverse')

const getCountryCode = ({lat, long}) => {

    // yup that's right were reverse geo-coding the event location so I can fetch the country flags from an API using the isoAlpha2 code
    const countryCode = geoRev.country(parseFloat(lat), parseFloat(long ))

    const [{ isoAlpha2 }] = countryCode

    return isoAlpha2
}

export default getCountryCode