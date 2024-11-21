## Scripts SQL

Les scripts SQL situés dans le répertoire `db-scripts` sont exécutés automatiquement au lancement du conteneur. Voici les fichiers inclus :

- `01-CREATE-tables.sql` : Crée les tables nécessaires pour la base de données.
- `02-CREATE-functions.sql` : Insère des données de fixtures dans les tables.
- `03-CREATE-triggers.sql` : Insère des données de fixtures dans les tables.
- `04-INSERT-fixtures.sql` : Insère des données de fixtures dans les tables.

Ces scripts sont montés dans le conteneur à l'emplacement `/docker-entrypoint-initdb.d/`, ce qui permet à PostgreSQL de les exécuter automatiquement lors de l'initialisation de la base de données.

## Structure des Tables

Les tables suivantes sont créées :

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

## Données de Fixtures

Les données de fixtures sont insérées dans les tables pour fournir des exemples de données initiales. Cela inclut des utilisateurs, des brasseries, des bières, des ingrédients, des catégories, des avis et des favoris.

## Accéder à PostgreSQL

Pour accéder à PostgreSQL à partir de votre machine locale, utilisez les informations de connexion suivantes (ce sont celles indiqué dans le .env.example) :

- Hôte : `localhost`
- Port : `5432`
- Utilisateur : `user`
- Mot de passe : `password`
- Base de données : `database`

Vous pouvez utiliser un client PostgreSQL comme `psql` ou une interface graphique comme DBeaver pour vous connecter à la base de données.

## Exemple de Connexion avec psql

```sh
psql -h localhost -p 5432 -U user -d database
```

Entrez le mot de passe `password` lorsque vous y êtes invité.

## Remarques

- Assurez-vous que Docker et Docker Compose sont installés sur votre machine avant de lancer les commandes.
- Les scripts SQL sont exécutés une seule fois lors de la première initialisation du conteneur. Si vous souhaitez réexécuter les scripts, vous devez supprimer le volume de données PostgreSQL ou recréer le conteneur.

## Requêtes SQL

Ce projet est configuré pour faciliter le développement et les tests de la base de données. N'hésitez pas à modifier les scripts SQL ou effectuer des requêtes SQL pour répondre à vos besoins spécifiques. Voici quelques exemples :

1. Lister les bières par taux d'alcool, de la plus légère à la plus forte

```sql
SELECT name, abv
FROM Beers
ORDER BY abv ASC;
```

2. Afficher le nombre de bières par catégorie

```sql
SELECT c.name AS category_name, COUNT(bc.id_beer) AS beer_count
FROM Categories c
LEFT JOIN BeerCategories bc ON c.id_category = bc.id_category
GROUP BY c.name
ORDER BY beer_count DESC;

```

3. Trouver toutes les bières d'une brasserie donnée

```sql
SELECT b.name AS beer_name
FROM Beers b
JOIN Breweries br ON b.id_brewery = br.id_brewery
WHERE br.name = 'Brasserie des Montagnes';
```

4. Lister les utilisateurs et le nombre de bières qu'ils ont ajoutées à leurs favoris

```sql
SELECT u.first_name, u.last_name, COUNT(f.id_beer) AS favorite_count
FROM Users u
LEFT JOIN Favorites f ON u.id_user = f.id_user
GROUP BY u.id_user, u.first_name, u.last_name
ORDER BY favorite_count DESC;
```

5. Ajouter une nouvelle bière à la base de données

```sql
INSERT INTO Beers (name, description, abv, price, id_brewery, created_at)
VALUES ('Nouvelle Bière', 'Description de la bière', 5.5, 3.99, 1, CURRENT_TIMESTAMP);
```

6. Afficher les bières et leurs brasseries, ordonnées par pays de la brasserie

```sql
SELECT b.name AS beer_name, br.name AS brewery_name, br.country
FROM Beers b
JOIN Breweries br ON b.id_brewery = br.id_brewery
ORDER BY br.country ASC, brewery_name ASC, beer_name ASC;
```

7. Lister les bières avec leurs ingrédients

```sql
SELECT b.name AS beer_name, i.name AS ingredient_name, i.type AS ingredient_type
FROM Beers b
JOIN BeerIngredients bi ON b.id_beer = bi.id_beer
JOIN Ingredients i ON bi.id_ingredient = i.id_ingredient
ORDER BY beer_name ASC, ingredient_name ASC;
```

8. Afficher les brasseries et le nombre de bières qu'elles produisent, pour celles ayant plus de 5 bières

```sql
SELECT br.name AS brewery_name, COUNT(b.id_beer) AS beer_count
FROM Breweries br
JOIN Beers b ON br.id_brewery = b.id_brewery
GROUP BY br.id_brewery, br.name
HAVING COUNT(b.id_beer) > 5
ORDER BY beer_count DESC;
```

9. Lister les bières qui n'ont pas encore été ajoutées aux favoris par aucun utilisateur

```sql
SELECT b.name AS beer_name
FROM Beers b
LEFT JOIN Favorites f ON b.id_beer = f.id_beer
WHERE f.id_beer IS NULL;
```

10. Trouver les bières favorites communes entre deux utilisateurs

```sql
SELECT b.name AS beer_name
FROM Favorites f1
JOIN Favorites f2 ON f1.id_beer = f2.id_beer
JOIN Beers b ON f1.id_beer = b.id_beer
WHERE f1.id_user = 1 AND f2.id_user = 2;
```

11. Afficher les brasseries dont les bières ont une moyenne de notes supérieure à une certaine valeur

```sql
SELECT br.name AS brewery_name, AVG(r.rating) AS average_rating
FROM Breweries br
JOIN Beers b ON br.id_brewery = b.id_brewery
JOIN Reviews r ON b.id_beer = r.id_beer
GROUP BY br.id_brewery, br.name
HAVING AVG(r.rating) > 4.5
ORDER BY average_rating DESC;
```

12. Mettre à jour les informations d'une brasserie

```sql
UPDATE Breweries
SET name = 'Nouveau Nom', country = 'Nouveau Pays', updated_at = CURRENT_TIMESTAMP
WHERE id_brewery = 1;
```

13. Supprimer les photos d'une bière en particulier

```sql
DELETE FROM Photos
WHERE id_beer = 1;
```

## Manipulations Avancées

- Une procédure est stockée permettant à un utilisateur de noter une bière. Si l'utilisateur a déjà noté cette bière, la note est mise à jour ; sinon, une nouvelle note est ajoutée.

```sql
// Procédure dans le fichier 02-CREATE-functions.sql

SELECT note_beer(1, 1, 5, 'Excellente bière!');

SELECT note_beer(1, 1, 4, 'Toujours bonne, mais moins exceptionnelle.');
```

- Un déclencheur (trigger) pour vérifier que l'ABV (taux d'alcool) est compris entre 0 et 20 avant l'ajout de chaque bière.

```sql
// Procédure dans le fichier 03-CREATE-triggers.sql

// Insertion valide
INSERT INTO Beers (name, description, abv, price, id_brewery)
VALUES ('Nouvelle Bière', 'Bière légère et fruitée.', 5.5, 4.99, 1);

// Insertion invalide
INSERT INTO Beers (name, description, abv, price, id_brewery)
VALUES ('Bière Trop Forte', 'Trop alcoolisée.', 25.0, 5.99, 1);
-- Erreur : ABV (taux d'alcool) doit être entre 0 et 20.
```

---
