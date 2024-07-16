import { Router } from 'express';
import RechercheController from '../controllers/rechercheController';
import verifyToken from '../middlewares/verifyToken';

const router = Router();
const rechercheController = new RechercheController();

router.get('/:mots', verifyToken, (req, res) => rechercheController.search(req, res));

export default router;
