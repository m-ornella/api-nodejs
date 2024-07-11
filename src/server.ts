// Import the 'express' module
import express, { Request, Response, Router } from 'express';
import auteurRoutes from './routes/auteursRoutes';
import livreRoutes from './routes/livresRoutes';
// import { verifyToken } from './middlewares/verifyToken';
import Auteur from './models/auteur';
import Livre from './models/livre';
import sequelize from './database'; 


Auteur.associate();
Livre.associate();


sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
}).catch((error: Error) => {
  console.error('Error creating database & tables:', error);
});

const app = express();
const router = Router();

app.use(express.json());

const port = 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Node.js + Express!!!!');
});

// router.use(verifyToken);


app.use('/api', router);
router.use('/auteurs', auteurRoutes);
router.use('/livres', livreRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});