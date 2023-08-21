# Utilise l'image Node.js comme base
FROM node:18-alpine AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install


# Copier tout le contenu du projet
COPY . .

RUN npx prisma migrate dev


# Démarrer l'application NestJS
CMD ["npm", "run", "start"]
