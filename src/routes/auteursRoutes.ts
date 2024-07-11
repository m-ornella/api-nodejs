import { Router } from 'express';
import AuteurController from '../controllers/auteursController';

const router = Router();
const auteurController = new AuteurController();

router.post('/', (req, res) => auteurController.createAuteur(req, res));
router.get('/', (req, res) => auteurController.getAuteurs(req, res));
router.get('/:id', (req, res) => auteurController.getAuteurById(req, res));
router.put('/:id', (req, res) => auteurController.updateAuteur(req, res));
router.delete('/:id', (req, res) => auteurController.deleteAuteur(req, res));

export default router;