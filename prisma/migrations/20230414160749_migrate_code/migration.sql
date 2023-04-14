/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `ContactQR` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `ContactQR` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `ContactQR` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContactQR" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "userID" TEXT NOT NULL,
ALTER COLUMN "image" SET DEFAULT 'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';

-- CreateIndex
CREATE UNIQUE INDEX "ContactQR_code_key" ON "ContactQR"("code");
