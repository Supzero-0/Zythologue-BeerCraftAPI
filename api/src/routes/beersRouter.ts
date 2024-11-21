import { Router } from "express";
import { beersController } from "../controllers/beersController";

export const router = Router();

/**
 * @swagger
 * /beer:
 *   post:
 *     summary: Create a new beer
 *     tags: [Beers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BeerRequestBody'
 *     responses:
 *       201:
 *         description: The beer was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BeerResponseBody'
 *       500:
 *         description: Some server error
 */
router.post("/beer", beersController.post);

/**
 * @swagger
 * /beers:
 *   get:
 *     summary: Get all beers
 *     tags: [Beers]
 *     responses:
 *       200:
 *         description: List of all beers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BeerResponseBody'
 *       500:
 *         description: Some server error
 */
router.get("/beers", beersController.get);

/**
 * @swagger
 * /beer/{id}:
 *   get:
 *     summary: Get a beer by ID
 *     tags: [Beers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The beer ID
 *     responses:
 *       200:
 *         description: The beer description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BeerResponseBody'
 *       500:
 *         description: Some server error
 */
router.get("/beer/:id", beersController.getById);

/**
 * @swagger
 * /beer/{id}:
 *   put:
 *     summary: Update a beer by ID
 *     tags: [Beers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The beer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BeerRequestBody'
 *     responses:
 *       200:
 *         description: The beer was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BeerResponseBody'
 *       500:
 *         description: Some server error
 */
router.put("/beer/:id", beersController.put);

/**
 * @swagger
 * /beer/{id}:
 *   delete:
 *     summary: Delete a beer by ID
 *     tags: [Beers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The beer ID
 *     responses:
 *       204:
 *         description: The beer was successfully deleted
 *       500:
 *         description: Some server error
 */
router.delete("/beer/:id", beersController.delete);
