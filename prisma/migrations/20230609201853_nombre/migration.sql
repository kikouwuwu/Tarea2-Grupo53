/*
  Warnings:

  - You are about to drop the column `datebirth` on the `personajes` table. All the data in the column will be lost.
  - You are about to drop the column `force` on the `personajes` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `personajes` table. All the data in the column will be lost.
  - You are about to drop the column `object` on the `personajes` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `reinos` table. All the data in the column will be lost.
  - You are about to drop the column `super` on the `reinos` table. All the data in the column will be lost.
  - You are about to drop the column `ubi` on the `reinos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nombre]` on the table `personajes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fecha_nacimiento` to the `personajes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `personajes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objeto` to the `personajes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `reinos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `superficie` to the `reinos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ubicacion` to the `reinos` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "personajes_name_key";

-- AlterTable
ALTER TABLE "personajes" DROP COLUMN "datebirth",
DROP COLUMN "force",
DROP COLUMN "name",
DROP COLUMN "object",
ADD COLUMN     "fecha_nacimiento" INTEGER NOT NULL,
ADD COLUMN     "fuerza" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "nombre" VARCHAR(45) NOT NULL,
ADD COLUMN     "objeto" VARCHAR(30) NOT NULL;

-- AlterTable
ALTER TABLE "reinos" DROP COLUMN "name",
DROP COLUMN "super",
DROP COLUMN "ubi",
ADD COLUMN     "nombre" VARCHAR(45) NOT NULL,
ADD COLUMN     "superficie" INTEGER NOT NULL,
ADD COLUMN     "ubicacion" VARCHAR(45) NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "lastname" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "personajes_nombre_key" ON "personajes"("nombre");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
