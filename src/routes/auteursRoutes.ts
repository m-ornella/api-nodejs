import { Router } from 'express';
import AuteurController from '../controllers/auteursController';

const router = Router();
const auteurController = new AuteurController();

router.post('/auteurs', (req, res) => auteurController.createAuteur(req, res));
router.get('/auteurs', (req, res) => auteurController.getAuteurs(req, res));
router.get('/auteurs/:id', (req, res) => auteurController.getAuteurById(req, res));
router.put('/auteurs/:id', (req, res) => auteurController.updateAuteur(req, res));
router.delete('/auteurs/:id', (req, res) => auteurController.deleteAuteur(req, res));

export default router;