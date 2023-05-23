const { Router } = require('express');
const getAll = require('../controllers/getAll.js');
const createActivity = require('../controllers/createActivity.js');
const getActive = require('../controllers/getActiv.js');
const getCountryById = require('../controllers/getCountryById.js');
const getCountryByName = require('../controllers/getNameCountry.js');
const {login} = require('../controllers/login.js');
const e = require('express');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
router.get('/countries', async (req, res) => {
    try {
        const countries = await getAll();
        res.status(200).json(countries);
    }
    catch (error) {
        res.status(400).json({error: 'No se pudo obtener los paises'});
    }
});

router.get('/countries/name', async (req, res) => {
    const { name } =  req.query;

    try {
        const country = await getCountryByName(name);
        if(!country) {
            res.status(400).json({error: 'No se encontro el pais'});
        }
        res.status(200).json(country);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
});


router.get('/countries/:id', async (req, res) => {
    const {id} = req.params;
    const source = isNaN(id) ? 'api' : 'db';
    
    try {
            
            if(!id || id.length > 3) {
                res.status(400).json({error: 'No se ingreso un id o es invalido'});
                return;
            }
            const country = await getCountryById(id, source);
            if(!country) {
                res.status(400).json({error: error.message});
                return;
            }
            res.status(200).json(country);

        }
        catch (error) {
            res.status(400).json({error: error.message});
        }
});



router.post('/activities', async (req, res) => {
    //agregar esa actividad a un pais donde el countryID es igual
    const {name, dificulty, duration, season, country} = req.body;
    try {
        const newActivity = await createActivity(name, dificulty, duration, season, country, source = 'api');
        console.log(newActivity)
        res.status(201).json('Actividad creada con exito');
    }
    catch (error) {
        res.status(400).json({error: error.message});
        
    }
});


router.get('/activities', async (req, res) => {
    try {
        const activities = await getActive();
        res.status(200).json(activities);
        }
        catch (error) {
            res.status(400).json({error: 'No se pudo obtener las actividades'});
        }
});

router.get('/login', login);


// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
