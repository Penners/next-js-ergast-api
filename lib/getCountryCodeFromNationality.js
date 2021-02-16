var CountryQuery = require('country-query')

const getCountryCodeFromNationality = (nationality) => {

    // shame this only works in like 80% of cases, french is difficult
    const countryCode = CountryQuery.find('demonym', nationality)

    console.log(countryCode)

    const { cca2 } = countryCode

    return cca2
}

export default getCountryCodeFromNationality