/*
  Warnings:

  - Changed the type of `minimo` on the `signo_vital` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `maximo` on the `signo_vital` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "signo_vital" DROP COLUMN "minimo",
ADD COLUMN     "minimo" TIMESTAMP(3) NOT NULL,
DROP COLUMN "maximo",
ADD COLUMN     "maximo" TIMESTAMP(3) NOT NULL;
