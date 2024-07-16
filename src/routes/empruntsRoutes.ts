import { Router } from 'express';
import EmpruntController from '../controllers/empruntsController';
import verifyToken from '../middlewares/verifyToken';

const router = Router();
const empruntController = new EmpruntController();

router.post('/', verifyToken, (req, res) => empruntController.createEmprunt(req, res));
router.put('/:id', verifyToken, (req, res) => empruntController.updateEmprunt(req, res));

export default router;