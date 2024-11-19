-- Désactiver temporairement les contraintes de clé étrangère
SET session_replication_role = 'replica';

-- Vider toutes les tables
TRUNCATE TABLE BeerIngredients, BeerCategories, Reviews, Favorites, Photos, Beers, Ingredients, Categories, Breweries, Users RESTART IDENTITY CASCADE;

-- Réactiver les contraintes de clé étrangère
SET session_replication_role = 'origin';

-- Fixtures Users
INSERT INTO Users (first_name, last_name, email, password, created_at)
VALUES 
('Jean', 'Dupont', 'jean.dupont@example.com', 'password123', CURRENT_TIMESTAMP),
('Marie', 'Curie', 'marie.curie@example.com', 'radiation42', CURRENT_TIMESTAMP),
('Albert', 'Einstein', 'albert.einstein@example.com', 'relativity21', CURRENT_TIMESTAMP),
('Camille', 'Claudel', 'camille.claudel@example.com', 'sculpture01', CURRENT_TIMESTAMP),
('Victor', 'Hugo', 'victor.hugo@example.com', 'lesmiserables', CURRENT_TIMESTAMP),
('Simone', 'de Beauvoir', 'simone.beauvoir@example.com', 'existentialism', CURRENT_TIMESTAMP),
('Georges', 'Sand', 'georges.sand@example.com', 'authorship', CURRENT_TIMESTAMP),
('Paul', 'Verlaine', 'paul.verlaine@example.com', 'poetry45', CURRENT_TIMESTAMP),
('Romain', 'Rolland', 'romain.rolland@example.com', 'nobel1915', CURRENT_TIMESTAMP),
('Émile', 'Zola', 'emile.zola@example.com', 'naturalism', CURRENT_TIMESTAMP),
('Sarah', 'Bernhardt', 'sarah.bernardt@example.com', 'theater101', CURRENT_TIMESTAMP),
('Claude', 'Monet', 'claude.monet@example.com', 'impression1', CURRENT_TIMESTAMP),
('Frida', 'Kahlo', 'frida.kahlo@example.com', 'mexico123', CURRENT_TIMESTAMP),
('Pablo', 'Picasso', 'pablo.picasso@example.com', 'cubism42', CURRENT_TIMESTAMP),
('Salvador', 'Dalí', 'salvador.dali@example.com', 'surrealism77', CURRENT_TIMESTAMP),
('Henri', 'Matisse', 'henri.matisse@example.com', 'color123', CURRENT_TIMESTAMP),
('Vincent', 'van Gogh', 'vincent.vangogh@example.com', 'sunflower01', CURRENT_TIMESTAMP),
('Auguste', 'Rodin', 'auguste.rodin@example.com', 'thinker1988', CURRENT_TIMESTAMP),
('Blaise', 'Alaise', 'blaise.alaise@example.com', 'rigolo99', CURRENT_TIMESTAMP),
('René', 'Descartes', 'rene.descartes@example.com', 'cogito1', CURRENT_TIMESTAMP);


-- Fixtures Breweries
INSERT INTO Breweries (name, country, created_at)
VALUES
('Brasserie des Montagnes', 'France', CURRENT_TIMESTAMP),
('Bière de la Vallée', 'Belgique', CURRENT_TIMESTAMP),
('La Micro du Soleil', 'Canada', CURRENT_TIMESTAMP),
('L’Abbaye Dorée', 'Belgique', CURRENT_TIMESTAMP),
('Brasseurs de Provence', 'France', CURRENT_TIMESTAMP),
('BrewLab Artisan', 'États-Unis', CURRENT_TIMESTAMP),
('Cerveza de Oro', 'Mexique', CURRENT_TIMESTAMP),
('The Hop Haven', 'Angleterre', CURRENT_TIMESTAMP),
('Ale Masters', 'Écosse', CURRENT_TIMESTAMP),
('Fjord Brewing Co.', 'Norvège', CURRENT_TIMESTAMP),
('Brasserie du Moulin', 'France', CURRENT_TIMESTAMP),
('Hoppy Horizons', 'Australie', CURRENT_TIMESTAMP),
('Lager Legends', 'Allemagne', CURRENT_TIMESTAMP),
('The Pale Pioneers', 'Irlande', CURRENT_TIMESTAMP),
('La Cuvée des Amis', 'France', CURRENT_TIMESTAMP),
('Bière de Montmartre', 'France', CURRENT_TIMESTAMP),
('Brews & Co.', 'États-Unis', CURRENT_TIMESTAMP),
('Trappist Masters', 'Belgique', CURRENT_TIMESTAMP),
('Bière d’Azur', 'France', CURRENT_TIMESTAMP),
('Golden Grain Brewery', 'Canada', CURRENT_TIMESTAMP);

-- Fixture Beers
INSERT INTO Beers (name, description, abv, price, id_brewery, created_at)
VALUES
('Blonde des Montagnes', 'Bière blonde légère et fruitée.', 5.2, 4.50, 1, CURRENT_TIMESTAMP),
('Triple d’Abbaye', 'Bière triple au goût puissant.', 9.5, 6.00, 4, CURRENT_TIMESTAMP),
('IPA du Soleil', 'India Pale Ale avec notes d’agrumes.', 6.5, 5.20, 3, CURRENT_TIMESTAMP),
('Lager Dorée', 'Lager douce et maltée.', 4.8, 3.80, 13, CURRENT_TIMESTAMP),
('Stout des Highlands', 'Stout robuste avec saveurs de café.', 7.5, 5.50, 9, CURRENT_TIMESTAMP),
('Pale Ale Tropicale', 'Bière rafraîchissante avec notes exotiques.', 5.0, 4.70, 12, CURRENT_TIMESTAMP),
('Cuvée des Moines', 'Bière ambrée avec arômes caramélisés.', 7.0, 6.30, 4, CURRENT_TIMESTAMP),
('Hoppy Sunrise', 'Bière houblonnée au goût frais.', 6.0, 5.00, 6, CURRENT_TIMESTAMP),
('Porter Norvégienne', 'Porter avec notes de chocolat.', 8.0, 5.90, 10, CURRENT_TIMESTAMP),
('Blanche des Fjords', 'Bière blanche légère.', 4.5, 4.00, 10, CURRENT_TIMESTAMP),
('Amber Horizon', 'Bière ambrée avec saveurs épicées.', 6.2, 5.30, 12, CURRENT_TIMESTAMP),
('Dark Knight Stout', 'Stout noir intense.', 9.0, 6.50, 6, CURRENT_TIMESTAMP),
('Bière de Montmartre', 'Blonde légère au goût floral.', 5.3, 4.90, 16, CURRENT_TIMESTAMP),
('Hoppy IPA', 'IPA bien houblonnée.', 7.0, 5.80, 2, CURRENT_TIMESTAMP),
('Saison d’Azur', 'Saison douce avec notes fruitées.', 6.2, 5.40, 19, CURRENT_TIMESTAMP),
('Golden Lager', 'Lager traditionnelle.', 4.8, 4.20, 13, CURRENT_TIMESTAMP),
('Brune de Provence', 'Bière brune riche.', 6.9, 5.80, 5, CURRENT_TIMESTAMP),
('Tropical Delight', 'IPA fruitée aux notes d’ananas.', 5.8, 5.10, 6, CURRENT_TIMESTAMP),
('La Cuvée du Moulin', 'Bière blonde artisanale.', 6.0, 5.40, 11, CURRENT_TIMESTAMP),
('Lager Artisanale', 'Lager classique revisitée.', 4.9, 4.30, 7, CURRENT_TIMESTAMP);

-- Fixtures Ingredients
INSERT INTO Ingredients (name, type, created_at)
VALUES
('Malt Pilsner', 'Malt', CURRENT_TIMESTAMP),
('Houblon Citra', 'Houblon', CURRENT_TIMESTAMP),
('Levure Saison', 'Levure', CURRENT_TIMESTAMP),
('Malt Cara', 'Malt', CURRENT_TIMESTAMP),
('Houblon Cascade', 'Houblon', CURRENT_TIMESTAMP),
('Levure Blanche', 'Levure', CURRENT_TIMESTAMP),
('Houblon Amarillo', 'Houblon', CURRENT_TIMESTAMP),
('Malt Munich', 'Malt', CURRENT_TIMESTAMP),
('Levure Ale', 'Levure', CURRENT_TIMESTAMP),
('Houblon Saaz', 'Houblon', CURRENT_TIMESTAMP),
('Malt Biscuit', 'Malt', CURRENT_TIMESTAMP),
('Houblon Simcoe', 'Houblon', CURRENT_TIMESTAMP),
('Levure Trappiste', 'Levure', CURRENT_TIMESTAMP),
('Malt Vienna', 'Malt', CURRENT_TIMESTAMP),
('Houblon Magnum', 'Houblon', CURRENT_TIMESTAMP),
('Levure Stout', 'Levure', CURRENT_TIMESTAMP),
('Houblon Mosaic', 'Houblon', CURRENT_TIMESTAMP),
('Malt Crystal', 'Malt', CURRENT_TIMESTAMP),
('Levure Lager', 'Levure', CURRENT_TIMESTAMP),
('Houblon Chinook', 'Houblon', CURRENT_TIMESTAMP);

-- Tables Relationnelles
-- Fixtures Reviews
INSERT INTO Reviews (id_user, id_beer, rating, comment, created_at)
VALUES
(1, 1, 5, 'Excellente bière, très rafraîchissante.', CURRENT_TIMESTAMP),
(2, 2, 4, 'Bon goût, mais un peu trop forte pour moi.', CURRENT_TIMESTAMP),
(3, 3, 5, 'Une IPA parfaite, bien équilibrée.', CURRENT_TIMESTAMP),
(4, 4, 3, 'Pas mal, mais manque un peu de caractère.', CURRENT_TIMESTAMP),
(5, 5, 4, 'Très bon stout, saveurs riches.', CURRENT_TIMESTAMP),
(6, 6, 5, 'J’adore les bières tropicales, celle-ci est top !', CURRENT_TIMESTAMP),
(7, 7, 3, 'Un peu trop amère pour moi.', CURRENT_TIMESTAMP),
(8, 8, 5, 'Parfaite pour les amateurs de houblon.', CURRENT_TIMESTAMP),
(9, 9, 4, 'Belle complexité, un vrai plaisir.', CURRENT_TIMESTAMP),
(10, 10, 5, 'Légère et agréable, idéale pour l’été.', CURRENT_TIMESTAMP),
(11, 1, 4, 'Simple mais efficace.', CURRENT_TIMESTAMP),
(12, 2, 5, 'Une vraie réussite, j’en rachèterai.', CURRENT_TIMESTAMP),
(13, 3, 4, 'Bonne IPA, mais pas exceptionnelle.', CURRENT_TIMESTAMP),
(14, 4, 2, 'Pas fan de ce style.', CURRENT_TIMESTAMP),
(15, 5, 4, 'Un stout comme je les aime.', CURRENT_TIMESTAMP),
(16, 6, 5, 'Excellente, je recommande.', CURRENT_TIMESTAMP),
(17, 7, 3, 'Correcte mais pas mémorable.', CURRENT_TIMESTAMP),
(18, 8, 5, 'Très bonne bière houblonnée.', CURRENT_TIMESTAMP),
(19, 9, 4, 'Bon équilibre entre douceur et force.', CURRENT_TIMESTAMP),
(20, 10, 5, 'Parfaite, rien à redire.', CURRENT_TIMESTAMP);

-- Fixtures Categories
INSERT INTO Categories (name, created_at)
VALUES
('Blonde', CURRENT_TIMESTAMP),
('Brune', CURRENT_TIMESTAMP),
('IPA', CURRENT_TIMESTAMP),
('Stout', CURRENT_TIMESTAMP),
('Ambrée', CURRENT_TIMESTAMP),
('Saison', CURRENT_TIMESTAMP),
('Lager', CURRENT_TIMESTAMP),
('Pale Ale', CURRENT_TIMESTAMP),
('Blanche', CURRENT_TIMESTAMP),
('Porter', CURRENT_TIMESTAMP),
('Triple', CURRENT_TIMESTAMP),
('Fruitée', CURRENT_TIMESTAMP),
('Acidulée', CURRENT_TIMESTAMP),
('Houblonnée', CURRENT_TIMESTAMP),
('Caramélisée', CURRENT_TIMESTAMP),
('Epicée', CURRENT_TIMESTAMP),
('Douce', CURRENT_TIMESTAMP),
('Forte', CURRENT_TIMESTAMP),
('Légère', CURRENT_TIMESTAMP),
('Rafraîchissante', CURRENT_TIMESTAMP);

-- Fixture Favorites
INSERT INTO Favorites (id_user, id_beer)
VALUES
(1, 1), (1, 3), (2, 1), (2, 3), (3, 5), (3, 6), (4, 7), (4, 9), 
(5, 8), (5, 10), (6, 1), (6, 2), (7, 3), (7, 4), (8, 5), (8, 6),
(9, 7), (9, 8), (10, 9), (10, 10);

-- Fixture BeerIngredients et BeerCategories
-- BeerIngredients
INSERT INTO BeerIngredients (id_beer, id_ingredient)
VALUES
(1, 1), (1, 2), (2, 4), (2, 3), (3, 5), (3, 2), (4, 8), (4, 9), (5, 6);

-- BeerCategories
INSERT INTO BeerCategories (id_beer, id_category)
VALUES
(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 1), (7, 2), (8, 3), (9, 4), (10, 5);