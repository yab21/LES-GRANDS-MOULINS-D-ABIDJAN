"use client";
import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/DashboardCommercial/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { motifs } from "./motifData";

const CreerRendezVous = () => {
  return (
    <>
      <Breadcrumb pageName="Créer un rendez-vous" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
              Créer un rendez-vous
            </h3>
          </div>
          <div className="mt-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 gap-4 px-2 py-6 md:grid-cols-3 md:py-4">
              <Input
                type="text"
                label="Nom de famille"
                variant="bordered"
                color="warning"
                placeholder="Entrer votre nom de famille"
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
                label="Numéro de téléphone"
                variant="bordered"
                color="warning"
                placeholder="Entrer votre numéro de téléphone"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Adresse email"
                variant="bordered"
                color="warning"
                placeholder="Entrer votre adresse email"
                className="text-sm font-medium md:text-base"
              />
              <Select
                label="Motif"
                color="warning"
                variant="bordered"
                placeholder="Choisir le motif"
                selectionMode="multiple"
                className="text-sm font-medium md:text-base"
              >
                {motifs.map((motif) => (
                  <SelectItem key={motif.key}>{motif.label}</SelectItem>
                ))}
              </Select>
              <Input
                type="date"
                label="Veuillez sélectionner la date du rendez-vous"
                variant="bordered"
                color="warning"
                value="2024-08-16"
                // defaultValue="Entrer votre nom de famille"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="time"
                label="Veuillez saisir l'heure du rendez-vous"
                variant="bordered"
                color="warning"
                value="12:34"
                // defaultValue="Entrer votre nom de famille"
                className="text-sm font-medium md:text-base"
              />
            </div>
            <div className="grid grid-cols-1 px-2 py-2">
              <Textarea
                label="Informations complémentaires/commentaires"
                variant="bordered"
                color="warning"
                className="text-sm font-medium md:text-base"
                placeholder="Saisissez les informations complémentaires"
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
                Créer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreerRendezVous;
