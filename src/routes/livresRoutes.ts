import LivreController from '../controllers/livresController';

const express = require('express');

const router = express.Router();
const livreController = new LivreController();

router.post('/livres', livreController.createLivre);
router.get('/livres', livreController.getLivres);
router.get('/livres/:id', livreController.getLivreById);
router.put('/livres/:id', livreController.updateLivre);
router.delete('livres/:id', livreController.deleteLivre);

export default router;