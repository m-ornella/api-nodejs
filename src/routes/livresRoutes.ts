import express from 'express';
import LivreController from '../controllers/livresController';
// import { verifyToken } from '../middlewares/verifyToken';


const router = express.Router();
const livreController = new LivreController();

// router.use(verifyToken);

router.post('/', livreController.createLivre);
router.get('/', livreController.getLivres);
router.get('/:id', livreController.getLivreById);
router.get('/:id/quantite', livreController.getQuantiteLivreById);
router.put('/:id', livreController.updateLivre);
router.delete('/:id', livreController.deleteLivre);

export default router;