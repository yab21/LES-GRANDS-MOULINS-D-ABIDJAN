"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/DashboardCommercial/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { documents } from "./data";

const HistoriqueClient = () => {
  return (
    <>
      <Breadcrumb pageName="Historique des clients" />
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
            <div className="flex-wrap items-center justify-between md:flex">
              <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                Historique des clients
              </h3>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b bg-gray-1 font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-3 py-3">Nom</th>
                  <th className="px-3 py-3">Prénom</th>
                  <th className="px-3 py-3">Contact 1</th>
                  <th className="px-3 py-3">Date d'achat</th>
                  <th className="px-3 py-3">Produit</th>
                  <th className="px-3 py-3">Quantité produit</th>
                  <th className="px-3 py-3">Montant total</th>
                  <th className="px-3 py-3">Adresse e-mail</th>
                  <th className="px-3 py-3">Adresse</th>
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
                          href="/dashboardcommercial/client/listeindividuelle"
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
                    +225 0102030405
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    BC
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Farine pâtissière
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    2
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    12.000 XOF
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    redmond@xxx.com
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Abidjan
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
                          href="/dashboardcommercial/client/listeindividuelle"
                        >
                          Serges
                        </Button>
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        serges@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Yves
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    +225 0102030405
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    BC
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Farine spéciale
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    2
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    12.000 XOF
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    redmond@xxx.com
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Abidjan
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
                          href="/dashboardcommercial/client/listeindividuelle"
                        >
                          Martin
                        </Button>
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        martin@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Yves
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    +225 0102030405
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    BC
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Farine boulangère
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    2
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    12.000 XOF
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    redmond@xxx.com
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Abidjan
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
                          href="/dashboardcommercial/client/listeindividuelle"
                        >
                          Edvige
                        </Button>
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        edvige@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Yves
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    +225 0102030405
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    BC
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Farine boulangère super-fine
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    2
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    12.000 XOF
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    redmond@xxx.com
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Abidjan
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

export default HistoriqueClient;
