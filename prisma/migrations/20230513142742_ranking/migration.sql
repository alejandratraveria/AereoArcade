/*
  Warnings:

  - You are about to drop the column `rankingPos` on the `Ranking` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ranking" (
    "user" TEXT NOT NULL PRIMARY KEY,
    "points" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Ranking_user_fkey" FOREIGN KEY ("user") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ranking" ("points", "user") SELECT "points", "user" FROM "Ranking";
DROP TABLE "Ranking";
ALTER TABLE "new_Ranking" RENAME TO "Ranking";
CREATE UNIQUE INDEX "Ranking_user_key" ON "Ranking"("user");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
