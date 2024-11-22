# Projet de Base de Données pour les amateurs de bières

Ce projet configure une base de données PostgreSQL pour une les amateurs de bières, avec des tables pour les utilisateurs, les brasseries, les bières, les ingrédients, les catégories, les avis, les favoris et les photos. Les scripts SQL pour créer les tables et insérer des données de fixtures sont exécutés automatiquement au lancement du conteneur Docker.

## Prérequis

- Docker
- Docker Compose

## Lancer le conteneur

Pour lancer le conteneur PostgreSQL avec Docker Compose, exécutez la commande suivante :

```sh
docker-compose up -d
```

Cette commande démarre le conteneur en arrière-plan.

## Arrêter le conteneur

Pour arrêter le conteneur, exécutez la commande suivante :

```sh
docker-compose down
```

