-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Disponible', 'Indisponible', 'Maintenance', 'Inative');

-- CreateEnum
CREATE TYPE "TypeFuel" AS ENUM ('Gasoline', 'Diesel', 'Alchool', 'Gas', 'Eletric', 'Flex');

-- CreateTable
CREATE TABLE "enterprises" (
    "id" TEXT NOT NULL,
    "fantasyName" TEXT NOT NULL,
    "socialReason" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,

    CONSTRAINT "enterprises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "custumers" (
    "id" TEXT NOT NULL,
    "fantasyName" TEXT NOT NULL,
    "socialReason" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,

    CONSTRAINT "custumers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "DayValue" DOUBLE PRECISION NOT NULL,
    "typefuel" "TypeFuel" NOT NULL,
    "color_id" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'Disponible',
    "modelId" TEXT,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "models" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "typeVehicleId" TEXT NOT NULL,

    CONSTRAINT "models_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brands" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "typevehicles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "typevehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" TEXT NOT NULL,
    "start_at" TIMESTAMP(3) NOT NULL,
    "preventDateEnd" TIMESTAMP(3) NOT NULL,
    "end_at" TIMESTAMP(3),
    "totalValue" DOUBLE PRECISION NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "custumerId" TEXT NOT NULL,
    "enterpriseId" TEXT NOT NULL,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "models"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "models" ADD CONSTRAINT "models_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "models" ADD CONSTRAINT "models_typeVehicleId_fkey" FOREIGN KEY ("typeVehicleId") REFERENCES "typevehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "locations_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "locations_custumerId_fkey" FOREIGN KEY ("custumerId") REFERENCES "custumers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "locations_enterpriseId_fkey" FOREIGN KEY ("enterpriseId") REFERENCES "enterprises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
