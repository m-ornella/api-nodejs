// Import the 'express' module
import express, { Request, Response } from 'express';
import auteurRoutes from './routes/auteursRoutes';
import livreRoutes from './routes/livresRoutes';



const app = express();

app.use(express.json())


const port = 8000;


app.get('/', (req, res) => {
  // Send a response to the client
  res.send('Hello, TypeScript + Node.js + Express!');
});

// Authors endpoints
app.get('/auteurs', auteurRoutes);
app.get('/auteurs/:id', auteurRoutes);
app.post('/auteurs', auteurRoutes);
app.put('/auteurs/:id', auteurRoutes);
app.delete('/auteurs/:id', auteurRoutes);

// Books endpoints
app.get('/livres', livreRoutes);
app.get('/livres/:id', livreRoutes);
app.get('/livres/:id/quantite', livreRoutes);
app.post('/livres', livreRoutes);
app.put('/livres/:id', livreRoutes);
app.delete('/livres/:id', livreRoutes);


app.listen(port, () => {
  
  console.log(`Server is running on http://localhost:${port}`);
});
