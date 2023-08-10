-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Controle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "exercicesReponses" TEXT NOT NULL,
    "note" INTEGER NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "personneId" INTEGER NOT NULL,
    CONSTRAINT "Controle_personneId_fkey" FOREIGN KEY ("personneId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Controle" ("exercicesReponses", "id", "note", "personneId") SELECT "exercicesReponses", "id", "note", "personneId" FROM "Controle";
DROP TABLE "Controle";
ALTER TABLE "new_Controle" RENAME TO "Controle";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
