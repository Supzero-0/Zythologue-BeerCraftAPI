/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest", // Utiliser ts-jest comme preset
  testEnvironment: "node", // Exécuter les tests dans un environnement Node.js
  moduleNameMapper: {
    // Mapper les alias TypeScript (si utilisés)
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  roots: ["<rootDir>/src"], // Répertoire où se trouvent les fichiers source
  testMatch: [
    "**/tests/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ], // Recherche des fichiers de test
};
