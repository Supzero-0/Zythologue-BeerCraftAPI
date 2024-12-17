import { Router } from "express";
import { beersController } from "../controllers/beersController";

export const router = Router();

/**
 * @swagger
 * /beers:
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
router.post("/", beersController.post);

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
router.get("/", beersController.get);

/**
 * @swagger
 * /beers/{id}:
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
router.get("/:id", beersController.getById);

/**
 * @swagger
 * /beers/{id}:
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
router.put("/:id", beersController.put);

/**
 * @swagger
 * /beers/{id}:
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
router.delete("/:id", beersController.delete);
