const { Activity, Country } = require('../db');
const axios = require('axios');
const data = require('../../countries.json')

// const createActivity = async (name, dificulty, duration, season, countryID) => {
    

//     //const newActivity = await Activity.create(name, dificulty, duration, season);
//     //await newActivity.setCountries(countryID);
//     //return newActivity;
//     // const newActivity = await Activity.create(
//     //     name,
//     //     dificulty,
//     //     duration,
//     //     season,
//     // );
//     // await newActivity.addCountries(countryID);
//     // return newActivity;
    
// // }

const createActivity = async (name, dificulty, duration, season, country) => {

    const axios = require('axios');

const saveCountriesToDatabase = async () => {
  try {

   
    const response = await axios.get('https://rest-countries.up.railway.app/v3/all');
    const countries = response.data;

    for (const country of countries) {

       await Country.upsert({
            id: country.cca3,
            name: country.name.common,
            continent: country.region,
            area: parseInt(country.area, 10),
            population: country.population,
            capital: country.capital || null,
            flag: country.flags[0],
            subregion: country.subregion || null,
            poblation: country.population,

        });
    }

    console.log('Datos de países guardados en la base de datos');
  } catch (error) {
    console.error('Error al guardar los datos de los países:', error);
  }
};

// Llama a la función para guardar los datos de los países en la base de datos
saveCountriesToDatabase();

    let countryID;

    if(source === 'api') {
        const countryResponse = await axios.get(`https://rest-countries.up.railway.app/v3/alpha/${country}`);
        const countryData = countryResponse.data;
        countryID = countryData[0].cca3;
        console.log(countryID)
    } else {
        const countryData = await Country.findOne({
            where: { name : country}
            
        });
        countryID = countryData.id;
    }
        

        const countrySelect = await Country.findAll({
        where: { name : country }
    });
    
    
    


    const repetActivity = await Activity.findOne({
        where: {
            name: name,
            dificulty: dificulty,
            duration: duration,
            season: season,
        }
    });



    if(!repetActivity) {
        const newActivity = await Activity.create({
            name,
            dificulty,
            duration,
            season,
        
        })
    const activiyCountry = await newActivity.addCountry(countryID);
    return activiyCountry;
    } else {
        const activiyCountry = await repetActivity.addCountry(countryID);
        return activiyCountry;
    }



}


        

module.exports = createActivity;