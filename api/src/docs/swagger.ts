import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Beer API",
      version: "1.0.0",
      description: "API for managing beers and breweries",
    },
    servers: [
      {
        description: "Production",
        url: "https://zythologue-beercraftapi-production.up.railway.app/api/v1",
      },
      {
        description: "Development",
        url: "http://localhost:3000/api/v1",
      },
    ],
    components: {
      schemas: {
        BeerRequestBody: {
          type: "object",
          required: ["name", "description", "abv", "price", "id_brewery"],
          properties: {
            name: {
              type: "string",
              description: "Name of the beer",
            },
            description: {
              type: "string",
              description: "Description of the beer",
            },
            abv: {
              type: "number",
              description: "Alcohol by volume",
            },
            price: {
              type: "number",
              description: "Price of the beer",
            },
            id_brewery: {
              type: "integer",
              description: "ID of the brewery",
            },
          },
        },
        BeerResponseBody: {
          type: "object",
          properties: {
            id_beer: {
              type: "integer",
              description: "ID of the beer",
            },
            name: {
              type: "string",
              description: "Name of the beer",
            },
            description: {
              type: "string",
              description: "Description of the beer",
            },
            abv: {
              type: "number",
              description: "Alcohol by volume",
            },
            price: {
              type: "number",
              description: "Price of the beer",
            },
            id_brewery: {
              type: "integer",
              description: "ID of the brewery",
            },
            created_at: {
              type: "string",
              format: "date-time",
              description: "Creation date",
            },
            updated_at: {
              type: "string",
              format: "date-time",
              description: "Last update date",
            },
          },
        },
        BreweryRequestBody: {
          type: "object",
          required: ["name", "country"],
          properties: {
            name: {
              type: "string",
              description: "Name of the brewery",
            },
            country: {
              type: "string",
              description: "Country of the brewery",
            },
          },
        },
        BreweryResponseBody: {
          type: "object",
          properties: {
            id_brewery: {
              type: "integer",
              description: "ID of the brewery",
            },
            name: {
              type: "string",
              description: "Name of the brewery",
            },
            country: {
              type: "string",
              description: "Country of the brewery",
            },
            created_at: {
              type: "string",
              format: "date-time",
              description: "Creation date",
            },
            updated_at: {
              type: "string",
              format: "date-time",
              description: "Last update date",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);
