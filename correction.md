# Correction du projet API Bières Artisanales

## Contexte du projet
Le projet visait à développer une API REST performante et simple d'utilisation, permettant de manipuler les informations sur les bières artisanales. L'objectif principal était de mettre en place un système complet d'opérations CRUD pour deux tables essentielles : **bières** et **brasseries**.

## État du projet
Le projet a été **intégralement validé**. Voici les points principaux confirmant son bon fonctionnement :

### 1. Fonctionnalités CRUD
Toutes les opérations CRUD attendues ont été implémentées et fonctionnent comme prévu :

- **Créer** : Ajout de nouvelles entrées pour les bières et les brasseries via des requêtes HTTP `POST`.
- **Lire** : Récupération des informations complètes sur toutes les entrées via des requêtes HTTP `GET`.
- **Détails** : Accès aux informations d’une entrée précise à l'aide d'un ID.
- **Mettre à jour** : Modification des données existantes via des requêtes HTTP `PUT`.
- **Supprimer** : Suppression d'entrées de la base de données avec des requêtes HTTP `DELETE`.

Ces opérations respectent les bonnes pratiques REST, offrant une interface cohérente et intuitive.

### 2. Documentation interactive avec Swagger
L'API est documentée via **Swagger (OpenAPI)**, permettant une navigation et un test interactifs de toutes les routes disponibles. Cette documentation facilite l’intégration avec d'autres services et garantit une compréhension claire de l'API.

### 3. Facilité d'installation
L'installation de l'API est simple et bien documentée. 

⚠️Pensez à supprimer ou commenter l'environnement de POSTGRES dans le docker-compose.yml


## Conclusion
L'API bières artisanales fonctionne parfaitement, respectant toutes les exigences du projet. Les opérations CRUD sont intuitives et robustes, et l'installation est à la fois rapide et fiable. Le projet est prêt à être utilisé comme base pour l'application mobile et à accueillir des extensions futures.

