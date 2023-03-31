-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "login" TEXT,
    "mdp" TEXT,
    "pseudo" TEXT,
    "admin" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Controle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "listeExercice" TEXT NOT NULL,
    "listeReponse" TEXT NOT NULL,
    "note" INTEGER NOT NULL,
    "personneId" INTEGER NOT NULL,
    CONSTRAINT "Controle_personneId_fkey" FOREIGN KEY ("personneId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Theme" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "thematique" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Caractere" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "francais" TEXT NOT NULL,
    "japonais" TEXT NOT NULL,
    "themeId" INTEGER NOT NULL,
    CONSTRAINT "Caractere_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "Theme_thematique_key" ON "Theme"("thematique");
