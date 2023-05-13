-- CreateTable
CREATE TABLE "Ranking" (
    "user" TEXT NOT NULL PRIMARY KEY,
    "points" INTEGER NOT NULL DEFAULT 0,
    "rankingPos" INTEGER NOT NULL,
    CONSTRAINT "Ranking_user_fkey" FOREIGN KEY ("user") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Ranking_user_key" ON "Ranking"("user");

-- CreateIndex
CREATE UNIQUE INDEX "Ranking_rankingPos_key" ON "Ranking"("rankingPos");
