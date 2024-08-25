"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/DashboardChefDeVente/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { documents } from "./data";
import { zones } from "./zoneData";
import { secteurs } from "./secteurData";

const ListeDesRendezVous = () => {
  return (
    <>
      <Breadcrumb pageName="Liste des rendez vous" />
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                Liste des rendez-vous
              </h3>
              <Select
                label="Zone"
                variant="underlined"
                color="default"
                placeholder="Abidjan et banlieue"
                defaultSelectedKeys={["Abidjan et banlieue"]}
                className="max-w-xs"
              >
                {zones.map((zone) => (
                  <SelectItem key={zone.key}>{zone.label}</SelectItem>
                ))}
              </Select>
              <Select
                label="Secteurs"
                variant="underlined"
                color="default"
                placeholder="Selectionner un secteur"
                defaultSelectedKeys={["Abidjan et banlieue"]}
                className="max-w-xs"
              >
                {secteurs.map((secteur) => (
                  <SelectItem key={secteur.key}>{secteur.label}</SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b bg-gray-1 font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-3 py-3">Nom</th>
                  <th className="px-3 py-3">Prénom</th>
                  <th className="px-3 py-3">Date</th>
                  <th className="px-3 py-3">Heure</th>
                  <th className="px-3 py-3">Motif</th>
                  <th className="px-3 py-3">Statut</th>
                  <th className="px-3 py-3">Nom du commercial</th>
                  <th className="px-3 py-3">Commentaire</th>
                </tr>
              </thead>
              <tbody className="divide-y text-gray-600">
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                    <img
                      src="/images/user/user-15.png"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        <Button
                          variant="light"
                          color="warning"
                          className="-ml-3"
                          as={Link}
                          href="/dashboardchefdevente/rendezvous/individuel"
                        >
                          Edmond
                        </Button>
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        edmond@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Yves
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    12/01/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    14:00
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Assitance
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green">
                    Terminé
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Amah
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    ---
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                    <img
                      src="/images/user/user-09.png"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        <Button
                          variant="light"
                          color="warning"
                          className="-ml-3"
                          as={Link}
                          href="/rendezvous/individuel"
                        >
                          Estelle
                        </Button>
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        estelle@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Edvige
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    05/02/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    14:12
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Recouvrement
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red">
                    Reporté
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Amah
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    05/03/2024
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                    <img
                      src="/images/user/user-15.png"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        <Button
                          variant="light"
                          color="warning"
                          className="-ml-3"
                          as={Link}
                          href="/rendezvous/individuel"
                        >
                          Edmond
                        </Button>
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        edmond@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Mahan
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    01/02/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    14:30
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Recouvrement
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green">
                    Terminé
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Honoré
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    ---
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                    <img
                      src="/images/user/user-15.png"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        <Button
                          variant="light"
                          color="warning"
                          className="-ml-3"
                          as={Link}
                          href="/rendezvous/individuel"
                        >
                          Edmond
                        </Button>
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        edmond@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Isai
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    03/03/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    15:00
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Test produit
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green">
                    Terminé
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Christ
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    ---
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListeDesRendezVous;
