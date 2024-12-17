# BeerCraft API Project

This project sets up a PostgreSQL database for beer enthusiasts, with tables for users, breweries, beers, ingredients, categories, reviews, favorites, and photos. The SQL scripts to create the tables and insert fixture data are executed automatically when the Docker container is launched.

## Prerequisites

- Docker
- Docker Compose

## Project Initialization

To initialize the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Create a `.env` file in the file api/ with the following content:

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

## Launching the Container

To launch the PostgreSQL container with Docker Compose, execute the following command:

```bash
docker-compose up -d
```

This command starts the container in the background.

## Stopping the Container

To stop the container, execute the following command:

```bash
docker-compose down
```

## Accessing PostgreSQL

To access PostgreSQL from your local machine, use the following connection information (as indicated in the .env.example file):

- Host: `localhost`
- Port: `5432`
- User: `user`
- Password: `password`
- Database: `database`

You can use a PostgreSQL client like `psql` or a graphical interface like DBeaver to connect to the database.

### Example Connection with psql

```bash
psql -h localhost -p 5432 -U user -d database
```

Enter the password `password` when prompted.

## API Documentation

The API documentation is generated using Swagger. To access the documentation, navigate to the following URL in your browser:

```
http://localhost:3000/api/v1/api-docs
```

## SQL Scripts

The SQL scripts located in the `back-end/db-scripts` directory are executed automatically when the container is launched. The following files are included:

- `01-CREATE-tables.sql`: Creates the necessary tables for the database.
- `02-CREATE-functions.sql`: Inserts fixture data into the tables.
- `03-CREATE-triggers.sql`: Inserts fixture data into the tables.
- `04-INSERT-fixtures.sql`: Inserts fixture data into the tables.

These scripts are mounted in the container at `/docker-entrypoint-initdb.d/`, allowing PostgreSQL to execute them automatically during database initialization.

## Table Structure

The following tables are created:

- `Users`
- `Breweries`
- `Beers`
- `Favorites`
- `Reviews`
- `Photos`
- `Categories`
- `BeerCategories`
- `Ingredients`
- `BeerIngredients`

## Remarks

- Ensure that Docker and Docker Compose are installed on your machine before running the commands.
- The SQL scripts are executed only once during the initial container setup. If you want to re-execute the scripts, you need to delete the PostgreSQL data volume or recreate the container.
