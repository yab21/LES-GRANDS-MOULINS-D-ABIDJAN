"use client";
import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/DashboardCommercial/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { documents } from "./data";

const AjouterClient = () => {
  return (
    <>
      <Breadcrumb pageName="Ajouter un client" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <h2 className="text-[22px] font-bold leading-[30px] text-dark dark:text-white">
          Générer un rapport
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4">
          <div>
            <Input
              type="date"
              color="warning"
              variant="underlined"
              label="Date de début"
              defaultValue="2024-08-10"
              className="max-w-[220px] text-base font-medium"
            />
          </div>
          <div>
            <Input
              type="date"
              color="warning"
              variant="underlined"
              label="Date de fin"
              defaultValue="2024-08-15"
              className="max-w-[220px] text-base font-medium"
            />
          </div>
          <div>
            <Select
              label="Type de document"
              color="warning"
              variant="underlined"
              placeholder="Choisir le document"
              selectionMode="multiple"
              className="max-w-[220px] text-base font-medium"
            >
              {documents.map((document) => (
                <SelectItem key={document.key}>{document.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <p className="text-sm font-medium">Générer</p>
            <Button isIconOnly color="warning" aria-label="click">
              <img
                src="/images/icon/file-button.svg"
                width={15}
                height={15}
                alt=""
              />
            </Button>
          </div>
        </div>

        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
              Ajouter un client
            </h3>
          </div>
          <div className="mt-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 gap-4 px-2 py-6 md:grid-cols-3 md:py-4">
              <Input
                type="date"
                label="Date de prospection"
                variant="bordered"
                color="warning"
                value="2024-08-16"
                // defaultValue="Entrer votre nom de famille"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Nom"
                variant="bordered"
                color="warning"
                placeholder="Entrer votre nom"
                // defaultValue="Entrer votre nom de famille"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Prénom"
                variant="bordered"
                color="warning"
                placeholder="Entrer votre prénom"
                // defaultValue="Entrer votre nom de famille"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="tel"
                label="Contact 1"
                variant="bordered"
                color="warning"
                placeholder="Entrer le contact 1"
                // defaultValue="Entrer votre nom de famille"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="date"
                label="Date de conversion"
                variant="bordered"
                color="warning"
                value="2024-08-16"
                // defaultValue="Entrer votre nom de famille"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Adresse email"
                variant="bordered"
                color="warning"
                placeholder="Entrer votre adresse email"
                // defaultValue="Entrer votre nom de famille"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Contact 2"
                variant="bordered"
                color="warning"
                placeholder="Entrer le contact 2"
                // defaultValue="Entrer votre nom de famille"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Adresse"
                variant="bordered"
                color="warning"
                placeholder="Entrer Votre adresse"
                // defaultValue="Entrer votre nom de famille"
                className="text-sm font-medium md:text-base"
              />
              <Input
                isReadOnly
                type="text"
                label="Mot de passe"
                variant="bordered"
                color="warning"
                defaultValue="MCT45RH3"
                // defaultValue="Entrer votre nom de famille"
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
                Ajouter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AjouterClient;
