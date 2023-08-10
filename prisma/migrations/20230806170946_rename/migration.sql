/*
  Warnings:

  - You are about to drop the column `listeExercice` on the `Controle` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Controle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "exercicesReponses" TEXT,
    "note" INTEGER NOT NULL,
    "personneId" INTEGER NOT NULL,
    CONSTRAINT "Controle_personneId_fkey" FOREIGN KEY ("personneId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Controle" ("id", "note", "personneId") SELECT "id", "note", "personneId" FROM "Controle";
DROP TABLE "Controle";
ALTER TABLE "new_Controle" RENAME TO "Controle";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
