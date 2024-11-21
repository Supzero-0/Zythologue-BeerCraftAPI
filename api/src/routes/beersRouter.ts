import { Router } from 'express';
import { beersController } from '../controllers/beersController';

export const router = Router();

// Create a new beer
router.post('/', beersController.post);

// Read all beers
router.get('/', beersController.get);

// Read a single beer by ID
router.get('/:id', beersController.getById);

// Update a beer by ID
router.put('/:id', beersController.put);

// Delete a beer by ID
router.delete('/:id', beersController.delete);

