// Import the 'express' module
import express, { Request, Response, Router } from 'express';
import auteurRoutes from './routes/auteursRoutes';
import livreRoutes from './routes/livresRoutes';
import verifyToken from './middlewares/verifyToken';
import Auteur from './models/auteur';
import Livre from './models/livre';
import AuteurLivre from './models/auteur_livre';


Auteur.associate();
Livre.associate();


const app = express();
const router = Router();

app.use(express.json());

const port = 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Node.js + Express!!!!');
});

// router.use(verifyToken);


app.use('/api', router);
router.use('/auteurs', verifyToken, auteurRoutes);
router.use('/livres', verifyToken, livreRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});