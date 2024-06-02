const express = require('express');
const livresController = require('../controllers/livresController');

const router = express.Router();

router.post('/livres', livresController.createLivre);
router.get('/livres', livresController.getLivres);
router.get('/:id', livresController.getLivreById);
router.put('/:id', livresController.updateLivre);
router.delete('/:id', livresController.deleteLivre);

export default router;