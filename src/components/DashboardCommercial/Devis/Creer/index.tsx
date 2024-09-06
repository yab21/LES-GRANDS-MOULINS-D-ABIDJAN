"use client";
import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/DashboardCommercial/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Select, SelectItem } from "@nextui-org/react";
import { noms } from "./nomData";
import { produits } from "./produitData";

const CreerDevis = () => {
  return (
    <>
      <Breadcrumb pageName="Créer un devis" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
              Créer un devis
            </h3>
          </div>
          <div className="mt-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 gap-4 px-2 py-6 md:grid-cols-3 md:py-4">
              <Select
                label="Nom du client"
                color="warning"
                variant="bordered"
                placeholder="Choisir le nom"
                selectionMode="multiple"
                className="text-sm font-medium md:text-base"
              >
                {noms.map((nom) => (
                  <SelectItem key={nom.key}>{nom.label}</SelectItem>
                ))}
              </Select>
              <Input
                type="text"
                label="Adresse email"
                variant="bordered"
                color="warning"
                placeholder="Entrer votre adresse email"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Adresse"
                variant="bordered"
                color="warning"
                placeholder="Entrer votre adresse"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="N° du devis"
                variant="bordered"
                color="warning"
                placeholder="Entrer le n° du devis"
                className="text-sm font-medium md:text-base"
              />
              <Select
                label="Produits"
                color="warning"
                variant="bordered"
                placeholder="Choisir le produit"
                selectionMode="multiple"
                className="text-sm font-medium md:text-base"
              >
                {produits.map((produit) => (
                  <SelectItem key={produit.key}>{produit.label}</SelectItem>
                ))}
              </Select>
              <Input
                type="date"
                label="Date"
                variant="bordered"
                color="warning"
                defaultValue="2024-08-12"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Quantité"
                variant="bordered"
                color="warning"
                placeholder="Entrer votre la quantité"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Prénom"
                variant="bordered"
                color="warning"
                placeholder="Entrer votre prénom"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Montant"
                variant="bordered"
                color="warning"
                placeholder="Entrer le montant"
                className="text-sm font-medium md:text-base"
              />
            </div>
            <div className="flex justify-center px-2 py-2">
              <Button
                color="primary"
                className="w-64 flex-none"
                variant="solid"
                size="md"
              >
                Créer
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <div className="grid grid-cols-1 place-content-center gap-2 px-4 md:grid-cols-2 md:px-8">
              <h3 className="place-items-center pt-2 text-center text-[22px] font-medium text-orange-400">
                Devis
              </h3>
              <h3 className="place-items-end pt-2 text-center text-[22px] font-medium text-dark dark:text-white">
                Devis N°1
              </h3>
              <div className="col-span-2 py-4 md:col-span-1">
                <Input
                  isReadOnly
                  type="text"
                  label="Nom de la structure"
                  variant="flat"
                  color="default"
                  labelPlacement="outside-left"
                  defaultValue="GMA"
                  className="mb-3 text-sm font-medium md:text-xl"
                />
                <Input
                  isReadOnly
                  type="text"
                  label="Adresse"
                  variant="flat"
                  color="default"
                  labelPlacement="outside-left"
                  defaultValue="Abidjan"
                  className="mb-3 text-sm font-medium md:text-xl"
                />
                <Input
                  isReadOnly
                  type="text"
                  labelPlacement="outside-left"
                  label="Code postal"
                  variant="flat"
                  color="default"
                  defaultValue="00BPAbidjan"
                  className="mb-3 text-sm font-medium md:text-xl"
                />
                <Input
                  isReadOnly
                  type="text"
                  labelPlacement="outside-left"
                  label="N° TVA"
                  variant="flat"
                  color="default"
                  defaultValue="M54BB534"
                  className="mb-3 text-sm font-medium md:text-xl"
                />
                <Input
                  isReadOnly
                  type="text"
                  labelPlacement="outside-left"
                  label="Numéro de téléphone"
                  variant="flat"
                  color="default"
                  defaultValue="00225 xx xx xx xx"
                  className="mb-3 text-sm font-medium md:text-xl"
                />
              </div>
              <div className="col-span-2 md:col-span-1 md:px-8">
                <Input
                  isReadOnly
                  type="text"
                  label="Nom du client"
                  labelPlacement="outside-left"
                  variant="flat"
                  color="default"
                  defaultValue="Roland"
                  className="mb-3 text-sm font-medium md:text-xl"
                />
                <Input
                  isReadOnly
                  type="text"
                  label="Adresse"
                  labelPlacement="outside-left"
                  variant="flat"
                  color="default"
                  defaultValue="Abidjan"
                  className="mb-3 text-sm font-medium md:text-xl"
                />
                <Input
                  isReadOnly
                  type="text"
                  label="Code postal"
                  labelPlacement="outside-left"
                  variant="flat"
                  color="default"
                  defaultValue="00BPAbidjan"
                  className="mb-3 text-sm font-medium md:text-xl"
                />
                <Input
                  isReadOnly
                  type="text"
                  label="Numéro de téléphone"
                  labelPlacement="outside-left"
                  variant="flat"
                  color="default"
                  defaultValue="00225 xx xx xx xx"
                  className="mb-3 text-sm font-medium md:text-xl"
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-full p-2">
            <div className="grid grid-cols-1 place-content-center gap-2 px-4 md:px-8">
              <div className="col-span-1 py-4">
                <Input
                  isReadOnly
                  type="text"
                  label="Date du devis"
                  variant="flat"
                  color="default"
                  labelPlacement="outside-left"
                  defaultValue="12/03/2024"
                  className="mb-3 text-sm font-medium md:text-xl"
                />
              </div>
            </div>
            <div className="mt-4 flex w-full flex-col justify-center bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
              <Table>
                <TableHeader>
                  <TableColumn>Nom du produit</TableColumn>
                  <TableColumn>Quantité</TableColumn>
                  <TableColumn>Prix unitaire HT</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>Farine boulangère</TableCell>
                    <TableCell>25Kg</TableCell>
                    <TableCell>25.000 XOF</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="flex py-4">
              <Input
                isReadOnly
                type="text"
                label="TVA (18%)"
                variant="flat"
                color="default"
                labelPlacement="outside-left"
                defaultValue="2200 XOF"
                className="mt-3 justify-normal text-sm font-medium md:justify-end md:text-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreerDevis;
