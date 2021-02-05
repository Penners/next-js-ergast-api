var CountryQuery = require('country-query')

const getCountryCodeFromNationality = (nationality) => {

    // yup that's right were reverse geo-coding the event location so I can fetch the country flags from an API using the isoAlpha2 code
    const countryCode = CountryQuery.find('demonym', nationality)

    console.log(countryCode)

    const { cca2 } = countryCode

    return cca2
}

export default getCountryCodeFromNationality