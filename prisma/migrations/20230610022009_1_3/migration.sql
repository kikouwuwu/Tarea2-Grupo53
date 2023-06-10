/*
  Warnings:

  - You are about to drop the column `max_velocity` on the `karts` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `karts` table. All the data in the column will be lost.
  - You are about to drop the column `date_registro` on the `personaje_habita_reino` table. All the data in the column will be lost.
  - You are about to drop the column `date_inicio` on the `personaje_tiene_trabajo` table. All the data in the column will be lost.
  - You are about to drop the column `date_termino` on the `personaje_tiene_trabajo` table. All the data in the column will be lost.
  - You are about to drop the `diplomacia` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `modelo` to the `karts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_registro` to the `personaje_habita_reino` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_inicio` to the `personaje_tiene_trabajo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "diplomacia" DROP CONSTRAINT "diplomacia_id_reino_1_fkey";

-- DropForeignKey
ALTER TABLE "diplomacia" DROP CONSTRAINT "diplomacia_id_reino_2_fkey";

-- AlterTable
ALTER TABLE "karts" DROP COLUMN "max_velocity",
DROP COLUMN "model",
ADD COLUMN     "modelo" VARCHAR(45) NOT NULL,
ADD COLUMN     "velocidad_maxima" INTEGER;

-- AlterTable
ALTER TABLE "personaje_habita_reino" DROP COLUMN "date_registro",
ADD COLUMN     "fecha_registro" DATE NOT NULL,
ALTER COLUMN "es_gobernante" SET DEFAULT false;

-- AlterTable
ALTER TABLE "personaje_tiene_trabajo" DROP COLUMN "date_inicio",
DROP COLUMN "date_termino",
ADD COLUMN     "fecha_inicio" DATE NOT NULL,
ADD COLUMN     "fecha_termino" DATE;

-- DropTable
DROP TABLE "diplomacia";

-- CreateTable
CREATE TABLE "diplomacias" (
    "id_reino_1" INTEGER NOT NULL,
    "id_reino_2" INTEGER NOT NULL,
    "es_aliado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "diplomacias_pkey" PRIMARY KEY ("id_reino_1","id_reino_2")
);

-- AddForeignKey
ALTER TABLE "diplomacias" ADD CONSTRAINT "diplomacias_id_reino_1_fkey" FOREIGN KEY ("id_reino_1") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diplomacias" ADD CONSTRAINT "diplomacias_id_reino_2_fkey" FOREIGN KEY ("id_reino_2") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
