const {Country} = require('../db.js');
const axios = require('axios');

const cleanArray = (array) => {  //Esto genera un aray, con los datos que necesito de la api
    return array.map(elem => {
      return {
        name: elem.name.common,
        id: elem.cca3,
        flag: elem.flags[1],
        continent: elem.continents[0],
        capital: elem.capital,
        subregion: elem.subregion,
        area: elem.area,
        population: elem.population,
      };
    });
  };

const getCountryByName = async (name) => { // aca encuenttra lo solicitado por name, tanto en la api, como en la base de datos.
    const country = await Country.findAll({where: {name}});

    const apiCountryRaw = ( await axios.get(`https://restcountries.com/v3/name/${name}`)).data;

    const apiCountry = cleanArray(apiCountryRaw);

    const filterApi = apiCountry.filter((c) => c.name === name);




    return [...filterApi, ...country]
}

module.exports = getCountryByName;