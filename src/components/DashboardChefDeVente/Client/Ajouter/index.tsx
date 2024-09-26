"use client";
import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/DashboardChefDeVente/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Input } from "@nextui-org/react";

const locations = [
  {
    key: "new",
    label: "Abidjan, treichville près du stade",
  },
  {
    key: "copy",
    label: "Marcory remblais",
  },
  {
    key: "edit",
    label: "Koumassi grand carrefour",
  },
];

const AjouterClient = () => {
  return (
    <>
      <Breadcrumb pageName="Ajouter un client" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
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
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Nom"
                variant="bordered"
                color="warning"
                placeholder="Entrer votre nom"
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
                type="tel"
                label="Contact 1"
                variant="bordered"
                color="warning"
                placeholder="Entrer le contact 1"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="date"
                label="Date de conversion"
                variant="bordered"
                color="warning"
                value="2024-08-16"
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
              <Input
                type="text"
                label="Contact 2"
                variant="bordered"
                color="warning"
                placeholder="Entrer le contact 2"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Adresse"
                variant="bordered"
                color="warning"
                placeholder="Entrer Votre adresse"
                className="text-sm font-medium md:text-base"
              />
              <Input
                isReadOnly
                type="text"
                label="ID client"
                variant="bordered"
                color="warning"
                defaultValue="MCT45RH3"
                className="text-sm font-medium md:text-base"
              />
              <div className="flex flex-col">
                <Input
                  type="text"
                  label="La localisation"
                  variant="bordered"
                  color="warning"
                  placeholder="Veuillez mettre la localisation"
                  // defaultValue="Entrer votre nom de famille"
                  className="text-sm font-medium md:text-base"
                />
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="light"
                      className="flex items-center justify-start"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m21 3l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"
                        />
                      </svg>{" "}
                      Voir les localisations
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions" items={locations}>
                    {(location) => (
                      <DropdownItem
                        key={location.key}
                        color={location.key === "delete" ? "danger" : "default"}
                        className={
                          location.key === "delete" ? "text-danger" : ""
                        }
                      >
                        {location.label}
                      </DropdownItem>
                    )}
                  </DropdownMenu>
                </Dropdown>
              </div>
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
