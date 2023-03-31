/*
  Warnings:

  - You are about to drop the column `japonais` on the `Caractere` table. All the data in the column will be lost.
  - Made the column `login` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Caractere" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "francais" TEXT NOT NULL,
    "japonaisKata" TEXT,
    "japonaisHira" TEXT,
    "kanji" TEXT,
    "themeId" INTEGER NOT NULL,
    CONSTRAINT "Caractere_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Caractere" ("francais", "id", "themeId") SELECT "francais", "id", "themeId" FROM "Caractere";
DROP TABLE "Caractere";
ALTER TABLE "new_Caractere" RENAME TO "Caractere";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "login" TEXT NOT NULL,
    "mdp" TEXT,
    "pseudo" TEXT,
    "admin" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("admin", "id", "login", "mdp", "pseudo") SELECT "admin", "id", "login", "mdp", "pseudo" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
