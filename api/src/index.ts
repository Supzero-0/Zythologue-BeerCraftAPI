import express, { Application } from 'express';
import { router as beersRouter } from './routes/beers';

const app: Application = express();
const port = 3000;

const version = 'v1';
const path = `/api/${version}`;

// Route de test
app.get("/", (req, res) => {
  res.send('Hello, world!');
});

// Routes de l'API
app.use(`${path}/beers`, beersRouter);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});