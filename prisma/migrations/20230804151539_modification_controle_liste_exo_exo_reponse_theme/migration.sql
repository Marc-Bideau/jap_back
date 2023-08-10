/*
  Warnings:

  - You are about to drop the column `listeReponse` on the `Controle` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Controle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "listeExercice" TEXT NOT NULL,
    "note" INTEGER NOT NULL,
    "personneId" INTEGER NOT NULL,
    CONSTRAINT "Controle_personneId_fkey" FOREIGN KEY ("personneId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Controle" ("id", "listeExercice", "note", "personneId") SELECT "id", "listeExercice", "note", "personneId" FROM "Controle";
DROP TABLE "Controle";
ALTER TABLE "new_Controle" RENAME TO "Controle";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
