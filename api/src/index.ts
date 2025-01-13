import express, { Application } from "express";
import cors from "cors";
import { router as beersRouter } from "./routes/beersRouter";
import { router as breweriesRouter } from "./routes/breweriesRouter";
import { testDBConnection } from "./config/db";
import swaggerUi from "swagger-ui-express";
import { swaggerDocs } from "./docs/swagger";

const app: Application = express();
const port = process.env.NODE_ENV === "test" ? 3001 : 3000;

app.use(
  cors({
    origin: "http://localhost:5174", // Frontend URL
  })
);

// Middleware pour parser les requêtes en JSON
app.use(express.json());

// Middleware pour parser les requêtes POST en URL-encoded
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
  const isDBConnected = await testDBConnection();
  if (!isDBConnected) {
    console.error(
      "❌ API non démarrée : impossible de se connecter à la base de données"
    );
    process.exit(1); // Arrête le processus avec une erreur
  }

  app.listen(port, () => {
    console.log(`🚀 API en cours d'exécution sur ${port}`);
  });
};

if (process.env.NODE_ENV !== "test") {
  startServer();
}

const version = "v1";
const path = `/api/${version}`;

// Route de test
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Routes de l'API
app.use(`${path}/beers`, beersRouter);
app.use(`${path}/breweries`, breweriesRouter);

// Documentation Swagger
app.use(`${path}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { app };
