import { Router } from "express";
import { breweriesController } from "../controllers/breweriesController";

export const router = Router();

// Create a new brewery
router.post("/brewery", breweriesController.post);

// Read all breweries
router.get("/breweries", breweriesController.get);

// Read a single brewery by ID
router.get("/brewery/:id", breweriesController.getById);

// Update a brewery by ID
router.put("/brewery/:id", breweriesController.put);

// Delete a brewery by ID
router.delete("/brewery/:id", breweriesController.delete);
