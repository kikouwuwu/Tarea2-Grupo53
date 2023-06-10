/*
  Warnings:

  - You are about to drop the `diplomacias` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "diplomacias" DROP CONSTRAINT "diplomacias_id_reino_1_fkey";

-- DropForeignKey
ALTER TABLE "diplomacias" DROP CONSTRAINT "diplomacias_id_reino_2_fkey";

-- DropTable
DROP TABLE "diplomacias";

-- CreateTable
CREATE TABLE "diplomacia" (
    "id_reino_1" INTEGER NOT NULL,
    "id_reino_2" INTEGER NOT NULL,
    "es_aliado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "diplomacia_pkey" PRIMARY KEY ("id_reino_1","id_reino_2")
);

-- AddForeignKey
ALTER TABLE "diplomacia" ADD CONSTRAINT "diplomacia_id_reino_1_fkey" FOREIGN KEY ("id_reino_1") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diplomacia" ADD CONSTRAINT "diplomacia_id_reino_2_fkey" FOREIGN KEY ("id_reino_2") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
