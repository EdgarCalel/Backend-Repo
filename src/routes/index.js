const { Router } = require('express');

const router = Router();

// importaciones
const { CreateTime, searchRegistros } = require('../controllers/TimePerson.controller');

// Routes
router.post('/time', CreateTime)
router.get('/all', searchRegistros)


module.exports = router;
