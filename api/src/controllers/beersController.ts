import { Request, Response } from "express";
import { beersModel } from "../models/beersModel";

export const beersController = {
  // Logic to get all beers
  get: async (res: Response) => {
    try {
      const beers = await beersModel.get();
      res.status(200).json(beers);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  },
  getById: (req: Request, res: Response) => {
    // Logic to get a beer by ID
    res
      .status(200)
      .json({ message: `Details of beer with ID: ${req.params.id}` });
  },
  post: (req: Request, res: Response) => {
    // Logic to create a new beer
    res.status(201).json({ message: "Beer created successfully" });
  },
  put: (req: Request, res: Response) => {
    // Logic to update a beer by ID
    res
      .status(200)
      .json({ message: `Beer with ID: ${req.params.id} updated successfully` });
  },
  delete: (req: Request, res: Response) => {
    // Logic to delete a beer by ID
    res
      .status(200)
      .json({ message: `Beer with ID: ${req.params.id} deleted successfully` });
  },
};
