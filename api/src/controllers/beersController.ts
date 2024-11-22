import { Request, Response } from "express";
import { beersModel } from "../models/beersModel";
import {
  BeerRequestBody,
  BeerResponseBody,
} from "../interfaces/beerInterfaces";

export const beersController = {
  // Logic to get all beers
  get: async (
    req: Request<void>,
    res: Response<BeerResponseBody[] | { message: string }>
  ) => {
    try {
      const beers = await beersModel.get();
      res.status(200).json(beers);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  },
  getById: async (
    req: Request<{ id: string }>,
    res: Response<BeerResponseBody | { message: string }>
  ) => {
    // Logic to get a beer by ID
    try {
      const beer = await beersModel.getById(parseInt(req.params.id));
      res.status(200).json(beer);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  },
  post: async (
    req: Request<{}, {}, BeerRequestBody>,
    res: Response<BeerResponseBody | { message: string }>
  ) => {
    // Logic to create a new beer
    try {
      const { name, description, abv, price, id_brewery } = req.body;
      const newBeer = await beersModel.post(
        name,
        description,
        abv,
        price,
        id_brewery
      );
      res.status(201).json(newBeer);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  },
  put: async (
    req: Request<{ id: string }, {}, BeerRequestBody>,
    res: Response<BeerResponseBody | { message: string }>
  ) => {
    // Logic to update a beer by ID
    try {
      const { name, description, abv, price, id_brewery } = req.body;
      const updatedBeer = await beersModel.put(
        parseInt(req.params.id),
        name,
        description,
        abv,
        price,
        id_brewery
      );
      res.status(200).json(updatedBeer);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  },
  delete: async (
    req: Request<{ id: string }>,
    res: Response<void | { message: string }>
  ) => {
    // Logic to delete a beer by ID
    try {
      await beersModel.delete(parseInt(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  },
};
