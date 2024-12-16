# Initialisation de l'API
FROM node:20 as builder

WORKDIR /usr/src/app

# Copie et installation des dépendances
COPY api/package*.json ./
RUN npm install

# Copie du code source
COPY api/ .

# Image finale pour PostgreSQL et l'API
FROM postgres:15-alpine

# Configuration de la base de données
ENV POSTGRES_USER=${POSTGRES_USER}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ENV POSTGRES_DB=${POSTGRES_DB}

# Création d'un utilisateur non-`root` nommé admin
RUN addgroup -S admin && adduser -S admin -G admin
USER admin

# Copie du script d'initialisation
COPY ./back-end/db-scripts /docker-entrypoint-initdb.d/

# Ajouter l'API au conteneur PostgreSQL
COPY --from=builder /usr/src/app /usr/src/app
WORKDIR /usr/src/app

# Exposer les ports
EXPOSE 5432 3000

# Commande de démarrage combinée
CMD ["sh", "-c", "postgres & sleep 5 && npm run start"]