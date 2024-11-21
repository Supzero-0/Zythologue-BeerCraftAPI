import { Request, Response } from "express";
import { breweriesModel } from "../models/breweriesModel";
import {
  BreweryRequestBody,
  BreweryResponseBody,
} from "../interfaces/breweryInterfaces";

export const breweriesController = {
  // Logic to get all breweries
  get: async (
    req: Request<void>,
    res: Response<BreweryResponseBody[] | { message: string }>
  ) => {
    try {
      const breweries = await breweriesModel.get();
      res.status(200).json(breweries);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  },
  getById: async (
    req: Request<{ id: string }>,
    res: Response<BreweryResponseBody | { message: string }>
  ) => {
    // Logic to get a brewery by ID
    try {
      const brewery = await breweriesModel.getById(parseInt(req.params.id));
      res.status(200).json(brewery);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  },
  post: async (
    req: Request<{}, {}, BreweryRequestBody>,
    res: Response<BreweryResponseBody | { message: string }>
  ) => {
    // Logic to create a new brewery
    try {
      const { name, country } = req.body;
      const newbrewery = await breweriesModel.post(name, country);
      res.status(201).json(newbrewery);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  },
  put: async (
    req: Request<{ id: string }, {}, BreweryRequestBody>,
    res: Response<BreweryResponseBody | { message: string }>
  ) => {
    // Logic to update a brewery by ID
    try {
      const { name, country } = req.body;
      const updatedbrewery = await breweriesModel.put(
        parseInt(req.params.id),
        name,
        country
      );
      res.status(200).json(updatedbrewery);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  },
  delete: async (
    req: Request<{ id: string }>,
    res: Response<void | { message: string }>
  ) => {
    // Logic to delete a brewery by ID
    try {
      await breweriesModel.delete(parseInt(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  },
};
