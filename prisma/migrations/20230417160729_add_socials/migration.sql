/*
  Warnings:

  - Added the required column `socials` to the `ContactQR` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContactQR" ADD COLUMN     "socials" JSONB NOT NULL;
