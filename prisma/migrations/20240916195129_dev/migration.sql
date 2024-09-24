/*
  Warnings:

  - You are about to drop the column `model_id` on the `vehicles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "vehicles" DROP CONSTRAINT "vehicles_model_id_fkey";

-- AlterTable
ALTER TABLE "vehicles" DROP COLUMN "model_id",
ADD COLUMN     "modelId" TEXT;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "models"("id") ON DELETE SET NULL ON UPDATE CASCADE;
