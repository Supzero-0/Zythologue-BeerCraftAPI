# BeerCraft API

This directory contains the API for managing beers and breweries. The API is built using Express and TypeScript, and it includes routes for managing users, breweries, beers, ingredients, categories, reviews, favorites, and photos.

## Project Initialization

To initialize the project, follow these steps:

1. Initialize the project with npm:

   ```bash
   npm init -y
   ```

2. Install the necessary dependencies:

   ```bash
   npm install express pg dotenv swagger-jsdoc swagger-ui-express body-parser
   ```

3. Install the development dependencies:

   ```bash
   npm install --save-dev typescript ts-node @types/node @types/express @types/body-parser @types/swagger-jsdoc @types/swagger-ui-express jest @types/jest supertest @types/supertest
   ```

## Running the API

To run the API, use the following command:

```bash
npm start
```

This command starts the API server using nodemon, which automatically restarts the server when file changes are detected.

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

This command runs the test suite using Jest.

## Environment Configuration

The project uses environment variables to configure the database connection and other settings. The environment variables are defined in the following files:

- `.env`: Default environment variables for development.
- `.env.test`: Environment variables for testing.

### Example .env File

```properties
DB_USER=user
DB_HOST=postgres-container
DB_DATABASE=PostgreSQLdb
DB_PASSWORD=password
DB_PORT=5432

POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=PostgreSQLdb
DATABASE_URL=postgres://user:password@db:5432/PostgreSQLdb
```

### Example .env.test File

```properties
DB_USER=test_user
DB_HOST=localhost
DB_DATABASE=test_database
DB_PASSWORD=test_password
DB_PORT=5433

POSTGRES_USER=test_user
POSTGRES_PASSWORD=test_password
POSTGRES_DB=test_database
DATABASE_URL=postgres://test_user:test_password@localhost:5433/test_database
```

## API Documentation

The API documentation is generated using Swagger. To access the documentation, navigate to the following URL in your browser:

```
http://localhost:3000/api/v1/api-docs
```

## Installed Packages

The following packages are installed in this project:

### Dependencies

- `express`: Web framework for Node.js
- `pg`: PostgreSQL client for Node.js
- `dotenv`: Loads environment variables from a `.env` file
- `swagger-jsdoc`: Generates Swagger documentation from JSDoc comments
- `swagger-ui-express`: Serves Swagger UI for API documentation
- `body-parser`: Middleware for parsing request bodies

### Development Dependencies

- `typescript`: TypeScript language support
- `ts-node`: TypeScript execution environment for Node.js
- `@types/node`: TypeScript definitions for Node.js
- `@types/express`: TypeScript definitions for Express
- `@types/body-parser`: TypeScript definitions for body-parser
- `@types/swagger-jsdoc`: TypeScript definitions for swagger-jsdoc
- `@types/swagger-ui-express`: TypeScript definitions for swagger-ui-express
- `jest`: JavaScript testing framework
- `@types/jest`: TypeScript definitions for Jest
- `supertest`: HTTP assertions for testing Express applications
- `@types/supertest`: TypeScript definitions for supertest
