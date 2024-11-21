import { Router } from "express";
import { beersController } from "../controllers/beersController";

export const router = Router();

// Create a new beer
router.post("/beer", beersController.post);

// Read all beers
router.get("/beers", beersController.get);

// Read a single beer by ID
router.get("/beer/:id", beersController.getById);

// Update a beer by ID
router.put("/beer/:id", beersController.put);

// Delete a beer by ID
router.delete("/beer/:id", beersController.delete);
