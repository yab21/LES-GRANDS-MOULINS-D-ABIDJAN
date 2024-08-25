"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Textarea } from "@nextui-org/input";
import Breadcrumb from "@/components/DashboardChefDeVente/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import { image, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { documents } from "./data";
import { commandes } from "./commandeData";
import { factures } from "./factureData";

const ListeIndividuelle = () => {
  return (
    <>
      <Breadcrumb pageName="Liste individuelle" />
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

        <div className="mt-5 overflow-hidden rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="relative z-20 h-35 md:h-65">
            <Image
              src="/images/cover/cover-01.png"
              alt="profile cover"
              className="h-full w-full rounded-tl-[10px] rounded-tr-[10px] object-cover object-center"
              width={970}
              height={260}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
          <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
            <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-[176px] sm:p-3">
              <div className="relative drop-shadow-2">
                <Image
                  src="/images/user/user-15.png"
                  width={160}
                  height={160}
                  className="overflow-hidden rounded-full"
                  alt="profile"
                />
              </div>
            </div>
            <div className="mt-4 text-dark dark:text-white">
              <h3 className="mb-1 text-heading-6 font-bold text-dark dark:text-white">
                Edmond Isai
              </h3>
              <p className="font-medium">Client</p>
              <div className="flex-wrap items-center justify-center gap-4 md:flex">
                <p>
                  Statut <span className="font-thin text-green">débiteur</span>
                </p>
                <p>
                  Crédit possible:{" "}
                  <span className="font-thin text-green">700.000 XOF</span>
                </p>
              </div>
              <div className="flex-wrap items-center justify-center gap-4 md:flex">
                <p>
                  Adresse: <span className="font-thin">Cocody, Abidjan</span>
                </p>
                <p>
                  Téléphone: <span className="font-thin">0102030405</span>
                </p>
              </div>
              <div className="mx-auto mt-6 max-w-[720px]">
                <div className="grid w-full grid-cols-2 gap-4">
                  <Input
                    isReadOnly
                    type="text"
                    label="Commentaire"
                    variant="bordered"
                    size="lg"
                    labelPlacement="outside"
                    color="default"
                    defaultValue="Client régulier solutable"
                    className="max-w-xs text-sm font-thin dark:text-white md:text-xl"
                  />
                  <Input
                    isReadOnly
                    type="text"
                    label="Limite crédit"
                    variant="bordered"
                    size="lg"
                    labelPlacement="outside"
                    color="default"
                    defaultValue="1.000.000 fcfa"
                    className="max-w-xs text-sm font-thin dark:text-white md:text-xl"
                  />
                  <Button
                    color="warning"
                    className="w-64 flex-none text-white"
                    variant="solid"
                    size="md"
                  >
                    Modifier
                  </Button>
                  <Button
                    color="primary"
                    className="w-64 flex-none text-white"
                    variant="solid"
                    size="md"
                  >
                    Enregistrer
                  </Button>
                </div>
                {/* <div className="flex justify-center px-2 py-2">
                  <Button
                    color="primary"
                    className="w-64 flex-none"
                    variant="solid"
                    size="md"
                  >
                    Terminer
                  </Button>
                </div> */}
              </div>
              <div className="mx-auto mt-6 max-w-[720px]">
                <div className="grid w-full grid-cols-2 gap-4">
                  <Select
                    label="Bon de commande"
                    variant="bordered"
                    size="lg"
                    labelPlacement="outside"
                    color="default"
                    placeholder="Selectionner le bon de commande"
                    defaultSelectedKeys={["En cours"]}
                    className="max-w-xs text-sm font-thin dark:text-white md:text-xl"
                  >
                    {commandes.map((commande) => (
                      <SelectItem key={commande.key}>
                        {commande.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="Facture"
                    variant="bordered"
                    size="lg"
                    labelPlacement="outside"
                    color="default"
                    placeholder="Selectionner la facture"
                    defaultSelectedKeys={["Impayee"]}
                    className="max-w-xs text-sm font-thin dark:text-white md:text-xl"
                  >
                    {factures.map((facture) => (
                      <SelectItem key={facture.key}>{facture.label}</SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="mt-3 grid w-full grid-cols-1 gap-4">
                  <Textarea
                    label="Note spéciale"
                    variant="bordered"
                    color="default"
                    rows={2}
                    isReadOnly
                    size="lg"
                    labelPlacement="outside"
                    defaultValue="Bon client"
                    className="text-left text-sm font-thin dark:text-white md:text-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListeIndividuelle;
