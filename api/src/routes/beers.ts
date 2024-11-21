import { Router } from 'express';
import { Request, Response } from 'express';

export const router = Router();

// Create a new beer
router.post('/', (req: Request, res: Response) => {
    // Logic to create a new beer
    res.send('Beer created successfully');
});

// Read all beers
router.get('/', (req: Request, res: Response) => {
    // Logic to get all beers
    res.send('List of all beers');
});

// Read a single beer by ID
router.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    // Logic to get a beer by ID
    res.send(`Details of beer with ID: ${id}`);
});

// Update a beer by ID
router.put('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    // Logic to update a beer by ID
    res.send(`Beer with ID: ${id} updated successfully`);
});

// Delete a beer by ID
router.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    // Logic to delete a beer by ID
    res.send(`Beer with ID: ${id} deleted successfully`);
});

