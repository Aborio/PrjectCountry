const axios = require("axios");
const { Country, Activity } = require("../db");

const getCountryById = async (id) => {
    try {
        let api = await axios.get(`https://rest-countries.up.railway.app/v3/alpha/${id}`);
        api = api.data[0];
        console.log(api)
        api = {
          id: api.cca3,
          name: api.name.common,
          flag: api.flags[1],
          continent: api.continents[0],
          capital: api.capital,
          region: api.region,
          area: api.area,
          population: api.population,
          activity: api.activities ? api.activities : null,
        
        };

        // ver bien
        return api;
      
    } catch (error) {
      console.log(error.message);
    }
  };

module.exports = getCountryById;