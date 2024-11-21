import { Request, Response } from 'express';

export const beersController = {
    get: (req: Request, res: Response) => {
        // Logic to get all beers
        res.status(200).json({ message: 'List of all beers' });
    },
    getById: (req: Request, res: Response) => {
        // Logic to get a beer by ID
        res.status(200).json({ message: `Details of beer with ID: ${req.params.id}` });
    },
    post: (req: Request, res: Response) => {
        // Logic to create a new beer
        res.status(201).json({ message: 'Beer created successfully' });
    },
    put: (req: Request, res: Response) => {
        // Logic to update a beer by ID
        res.status(200).json({ message: `Beer with ID: ${req.params.id} updated successfully` });
    },
    delete: (req: Request, res: Response) => {
        // Logic to delete a beer by ID
        res.status(200).json({ message: `Beer with ID: ${req.params.id} deleted successfully` });
    }
};