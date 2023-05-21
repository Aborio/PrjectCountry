const { Activity, Country } = require('../db');

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
    const activiyCountry = await newActivity.addCountry(countrySelect);
    return activiyCountry;
    } else {
        const activiyCountry = await repetActivity.addCountry(countrySelect);
        return activiyCountry;
    }



}


        

module.exports = createActivity;