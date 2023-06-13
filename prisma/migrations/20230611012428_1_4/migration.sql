/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `personajes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "karts_id_personaje_key";

-- CreateIndex
CREATE UNIQUE INDEX "personajes_nombre_key" ON "personajes"("nombre");
