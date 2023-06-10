/*
  Warnings:

  - Changed the type of `fecha_nacimiento` on the `personajes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "personajes" DROP COLUMN "fecha_nacimiento",
ADD COLUMN     "fecha_nacimiento" DATE NOT NULL;
