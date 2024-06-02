// Import the 'express' module
import express, { Request, Response } from 'express';
import auteurRoutes from './routes/auteursRoutes';


// Create an Express application
const app = express();

app.use(express.json())

// Set the port number for the server
const port = 3000;

// Define a route for the root path ('/')
app.get('/', (req, res) => {
  // Send a response to the client
  res.send('Hello, TypeScript + Node.js + Express!');
});

// Authors endpoints
app.get('/auteurs', auteurRoutes);
app.get('/auteurs/:id', auteurRoutes);
app.post('/auteurs', auteurRoutes);
app.put('/auteurs/:id', auteurRoutes);

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});
