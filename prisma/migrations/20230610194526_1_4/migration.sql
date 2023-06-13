-- DropIndex
DROP INDEX "personajes_nombre_key";

-- AlterTable
ALTER TABLE "personaje_tiene_trabajo" ALTER COLUMN "fecha_termino" DROP NOT NULL;
