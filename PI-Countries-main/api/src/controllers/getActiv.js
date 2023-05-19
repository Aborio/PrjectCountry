const { Activity } = require('../db');

const getActive = async (req, res) => {
    const activ = await Activity.findAll({ attributes: ['name']});
    return activ;
}

module.exports = getActive;