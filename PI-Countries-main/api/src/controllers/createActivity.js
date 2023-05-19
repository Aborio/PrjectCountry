const { Activity } = require('../db');

const createActivity = async (name, dificulty, duration, season, countryID) => {
    //const newActivity = await Activity.create(name, dificulty, duration, season);
    //await newActivity.setCountries(countryID);
    //return newActivity;
    const newActivity = await Activity.create(
        name,
        dificulty,
        duration,
        season,
    );
    await newActivity.addCountries(countryID);
    return newActivity;
    
}

module.exports = createActivity;