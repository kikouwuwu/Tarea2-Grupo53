/*
  Warnings:

  - You are about to drop the column `description` on the `trabajos` table. All the data in the column will be lost.
  - Added the required column `descripcion` to the `trabajos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "trabajos" DROP COLUMN "description",
ADD COLUMN     "descripcion" VARCHAR(45) NOT NULL;
