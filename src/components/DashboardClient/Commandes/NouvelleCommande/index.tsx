"use client";
import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/DashboardClient/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { products } from "./productData";

const NouvelleCommande = () => {
  return (
    <>
      <Breadcrumb pageName="Nouvelle commande" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
              Nouvelle commande
            </h3>
          </div>
          <div className="mt-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 gap-4 px-2 py-6 md:grid-cols-3 md:py-4">
              <Input
                type="date"
                label="Date de la commande"
                variant="bordered"
                color="warning"
                value="2024-08-16"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="date"
                label="Date souhaitée de livraison"
                variant="bordered"
                color="warning"
                value="2024-08-09"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="date"
                label="Delai de livraison
"
                variant="bordered"
                color="warning"
                value="2024-08-22"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Quantité
"
                variant="bordered"
                color="warning"
                placeholder="Entrer la quantité"
                className="text-sm font-medium md:text-base"
              />
              <Select
                label="Produit"
                color="warning"
                variant="bordered"
                placeholder="Selectionner le produit"
                selectionMode="multiple"
                className="text-sm font-medium md:text-base"
              >
                {products.map((product) => (
                  <SelectItem key={product.key}>{product.label}</SelectItem>
                ))}
              </Select>
            </div>
            <div className="grid grid-cols-1 px-2 py-2">
              <Textarea
                label="Commentaire"
                variant="bordered"
                color="warning"
                className="text-sm font-medium md:text-base"
                placeholder="Saisissez votre commentaire"
                disableAnimation
                disableAutosize
                classNames={{
                  base: "max-w-full",
                  input: "resize-y min-h-[40px]",
                }}
              />
            </div>
            <div className="flex justify-center px-2 py-2">
              <Button
                color="primary"
                className="w-64 flex-none"
                variant="solid"
                size="md"
              >
                Valider
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NouvelleCommande;
