/*
  Warnings:

  - Changed the type of `hora` on the `control` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "control" DROP COLUMN "hora",
ADD COLUMN     "hora" TIMESTAMP(3) NOT NULL;
