import { Router } from "express";
import { breweriesController } from "../controllers/breweriesController";

export const router = Router();

/**
 * @swagger
 * /breweries:
 *   post:
 *     summary: Create a new brewery
 *     tags: [Breweries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BreweryRequestBody'
 *     responses:
 *       201:
 *         description: The brewery was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BreweryResponseBody'
 *       500:
 *         description: Some server error
 */
router.post("/", breweriesController.post);

/**
 * @swagger
 * /breweries:
 *   get:
 *     summary: Get all breweries
 *     tags: [Breweries]
 *     responses:
 *       200:
 *         description: List of all breweries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BreweryResponseBody'
 *       500:
 *         description: Some server error
 */
router.get("/", breweriesController.get);

/**
 * @swagger
 * /breweries/{id}:
 *   get:
 *     summary: Get a brewery by ID
 *     tags: [Breweries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The brewery ID
 *     responses:
 *       200:
 *         description: The brewery description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BreweryResponseBody'
 *       500:
 *         description: Some server error
 */
router.get("/:id", breweriesController.getById);

/**
 * @swagger
 * /breweries/{id}:
 *   put:
 *     summary: Update a brewery by ID
 *     tags: [Breweries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The brewery ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BreweryRequestBody'
 *     responses:
 *       200:
 *         description: The brewery was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BreweryResponseBody'
 *       500:
 *         description: Some server error
 */
router.put("/:id", breweriesController.put);

/**
 * @swagger
 * /breweries/{id}:
 *   delete:
 *     summary: Delete a brewery by ID
 *     tags: [Breweries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The brewery ID
 *     responses:
 *       204:
 *         description: The brewery was successfully deleted
 *       500:
 *         description: Some server error
 */
router.delete("/:id", breweriesController.delete);

router.get("/:id/beers", breweriesController.getBeersByBrewery);
