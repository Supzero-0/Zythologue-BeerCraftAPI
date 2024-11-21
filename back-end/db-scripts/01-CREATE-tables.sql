DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

-- Création de la table Users
CREATE TABLE Users (
    id_user SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table Breweries
CREATE TABLE Breweries (
    id_brewery SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table Beers
CREATE TABLE Beers (
    id_beer SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    abv FLOAT CHECK (abv >= 0 AND abv <= 20),
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    id_brewery INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_brewery) REFERENCES Breweries (id_brewery) ON DELETE CASCADE
);

-- Création de la table Favorites
CREATE TABLE Favorites (
    id_user INT NOT NULL,
    id_beer INT NOT NULL,
    PRIMARY KEY (id_user, id_beer),
    FOREIGN KEY (id_user) REFERENCES Users (id_user) ON DELETE CASCADE,
    FOREIGN KEY (id_beer) REFERENCES Beers (id_beer) ON DELETE CASCADE
);

-- Création de la table Reviews
CREATE TABLE Reviews (
    id_review SERIAL PRIMARY KEY,
    id_user INT NOT NULL,
    id_beer INT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_user) REFERENCES Users (id_user) ON DELETE CASCADE,
    FOREIGN KEY (id_beer) REFERENCES Beers (id_beer) ON DELETE CASCADE
);

-- Création de la table Photos
CREATE TABLE Photos (
    id_photo SERIAL PRIMARY KEY,
    id_beer INT NOT NULL,
    url TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_beer) REFERENCES Beers (id_beer) ON DELETE CASCADE
);

-- Création de la table Categories
CREATE TABLE Categories (
    id_category SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table BeerCategories (relation many-to-many entre Beers et Categories)
CREATE TABLE BeerCategories (
    id_beer INT NOT NULL,
    id_category INT NOT NULL,
    PRIMARY KEY (id_beer, id_category),
    FOREIGN KEY (id_beer) REFERENCES Beers (id_beer) ON DELETE CASCADE,
    FOREIGN KEY (id_category) REFERENCES Categories (id_category) ON DELETE CASCADE
);

-- Création de la table Ingredients
CREATE TABLE Ingredients (
    id_ingredient SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table BeerIngredients (relation many-to-many entre Beers et Ingredients)
CREATE TABLE BeerIngredients (
    id_beer INT NOT NULL,
    id_ingredient INT NOT NULL,
    PRIMARY KEY (id_beer, id_ingredient),
    FOREIGN KEY (id_beer) REFERENCES Beers (id_beer) ON DELETE CASCADE,
    FOREIGN KEY (id_ingredient) REFERENCES Ingredients (id_ingredient) ON DELETE CASCADE
);