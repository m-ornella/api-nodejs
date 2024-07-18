// Import the 'express' module
import express, { Request, Response, Router } from 'express';
import auteurRoutes from './routes/auteursRoutes';
import livreRoutes from './routes/livresRoutes';
import empruntRoutes from './routes/empruntsRoutes';
import rechercheRoutes from './routes/rechercheRoutes';

import verifyToken from './middlewares/verifyToken';
import Auteur from './models/auteur';
import Livre from './models/livre';



Auteur.associate();
Livre.associate();


const app = express();
const router = Router();

app.use(express.json());

const port = 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Node.js + Express!!!!');
});



app.use('/api', router);
router.use('/auteurs', verifyToken,  auteurRoutes);
router.use('/livres', verifyToken,  livreRoutes);
router.use('/emprunt', verifyToken,  empruntRoutes);
router.use('/recherche', verifyToken, rechercheRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});