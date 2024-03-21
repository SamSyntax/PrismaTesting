/*
  Warnings:

  - A unique constraint covering the columns `[issueId]` on the table `Answer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Answer_issueId_key" ON "Answer"("issueId");
