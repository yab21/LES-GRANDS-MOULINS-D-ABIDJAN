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
                  <th className="px-3 py-3">Localisation</th>
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
                  <td className="whitespace-nowrap px-3 py-4">
                    <Button
                      radius="full"
                      variant="light"
                      as={Link}
                      href="/dashboardchefdevente/rendezvous/map"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="#000"
                            d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 2.322 1.272 4.36 2.871 5.996a18 18 0 0 0 2.222 1.91l.458.326q.222.155.427.288l.39.25l.343.209l.289.169l.455-.269l.367-.23q.293-.186.627-.417l.458-.326a18 18 0 0 0 2.222-1.91C17.728 15.361 19 13.322 19 11a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
                          />
                        </g>
                      </svg>
                    </Button>
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
                  <td className="whitespace-nowrap px-3 py-4">
                    <Button
                      radius="full"
                      variant="light"
                      as={Link}
                      href="/dashboardchefdevente/rendezvous/map"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="#000"
                            d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 2.322 1.272 4.36 2.871 5.996a18 18 0 0 0 2.222 1.91l.458.326q.222.155.427.288l.39.25l.343.209l.289.169l.455-.269l.367-.23q.293-.186.627-.417l.458-.326a18 18 0 0 0 2.222-1.91C17.728 15.361 19 13.322 19 11a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
                          />
                        </g>
                      </svg>
                    </Button>
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
                  <td className="whitespace-nowrap px-3 py-4">
                    <Button
                      radius="full"
                      variant="light"
                      as={Link}
                      href="/dashboardchefdevente/rendezvous/map"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="#000"
                            d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 2.322 1.272 4.36 2.871 5.996a18 18 0 0 0 2.222 1.91l.458.326q.222.155.427.288l.39.25l.343.209l.289.169l.455-.269l.367-.23q.293-.186.627-.417l.458-.326a18 18 0 0 0 2.222-1.91C17.728 15.361 19 13.322 19 11a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
                          />
                        </g>
                      </svg>
                    </Button>
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
                  <td className="whitespace-nowrap px-3 py-4">
                    <Button
                      radius="full"
                      variant="light"
                      as={Link}
                      href="/dashboardchefdevente/rendezvous/map"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="#000"
                            d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 2.322 1.272 4.36 2.871 5.996a18 18 0 0 0 2.222 1.91l.458.326q.222.155.427.288l.39.25l.343.209l.289.169l.455-.269l.367-.23q.293-.186.627-.417l.458-.326a18 18 0 0 0 2.222-1.91C17.728 15.361 19 13.322 19 11a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
                          />
                        </g>
                      </svg>
                    </Button>
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
