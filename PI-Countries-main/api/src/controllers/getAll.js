const {Country, Activity} = require('../db.js');
const axios = require('axios');


const getAll = async (req, res) => {
  try {
    let api = await axios.get("https://rest-countries.up.railway.app/v3/all");  //aca generamos la api, y despues estamos generando la copia en la base de datos
    api = api.data?.map((e) => {
  
      return {
        id: e.cca3,
        name: e.name.common,
        flag: e.flags[0] || e.flags[1],
        continent: e.continents,
        capital: e.capital,
        subregion: e.subregion,
        area: e.area,
        population: e.population,
      };
    });

    let bdd = await Country.findAll();
    if (!bdd.length) {
      await Country.bulkCreate(api);
    }
    let db = await Country.findAll({
      include: {
        model: Activity,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    db = db.map((e) => {

      return {
        id: e.id,
        name: e.name,
        flag: e.flag,
        continent: e.continent,
        capital: e.capital,
        subregion: e.subregion,
        area: e.area,
        population: e.population,
        activity: e.activities?.map((el) => el.name),
      };
    });
    return db;
  } catch (error) {
    console.log(error.message);
  }
};





module.exports = getAll;
