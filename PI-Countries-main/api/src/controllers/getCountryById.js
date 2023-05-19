const {Country} = require('../db.js');
const axios = require('axios');

const getCountryById = async (id, source) => {
    const data = source === 'api' ? 
    ( await axios.get(`https://restcountries.com/v3/alpha/${id}`)).data : Country.findByPk(id);
    

    return data;
}


module.exports = getCountryById;