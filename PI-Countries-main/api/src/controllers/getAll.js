const {Country} = require('../db.js');
const axios = require('axios');

const getAll = async (req, res) => {
    const contries = await Country.findAll();
    const apiCountries = (await axios.get('https://restcountries.com/v3.1/all')).data;
    const cleanApiCountries = apiCountries.map((c) => {
        return {
            name: c.name.common,
            id: c.cca3,
            flag: c.flags.png,
            continent: c.continents[0],
            capital: c.capital,
            subregion: c.subregion,
            region: c.region,
            area: c.area,
            population: c.population,
        }
    }
    );
    return [...contries, ...cleanApiCountries];

}



module.exports = getAll;
