"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import Breadcrumb from "@/components/DashboardCommercial/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { documents } from "./data";

const ListeDesClients = () => {
  return (
    <>
      <Breadcrumb pageName="Liste des clients" />
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
                Liste des clients
              </h3>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b bg-gray-1 font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-3 py-3">Nom</th>
                  <th className="px-3 py-3">Date de prospection</th>
                  <th className="px-3 py-3">Prénom</th>
                  <th className="px-3 py-3">Contact 1</th>
                  <th className="px-3 py-3">Date de conversion</th>
                  <th className="px-3 py-3">Contact 2</th>
                  <th className="px-3 py-3">Adresse</th>
                  <th className="px-3 py-3">Site web</th>
                  <th className="px-3 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                      />
                    </svg>
                  </th>
                  <th className="px-3 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="26"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
                      />
                    </svg>
                  </th>
                  <th className="px-3 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                      />
                    </svg>
                  </th>
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
                        Edmond
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        edmond@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    12/01/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Yves
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    0102030405
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    12/03/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    0203040506
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Abidjan
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    www.siteweb.com
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Edmond Kouassi
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Edmond@23
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Edmond564
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
                        Essoh
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        essoh@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    12/01/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Serges
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    0102030405
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    12/03/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    0203040506
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Abidjan
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    www.siteweb.com
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Edmond Kouassi
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Edmond@23
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Edmond564
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
                        Edvige
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        edvige@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    12/01/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Yvette
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    0102030405
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    12/03/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    0203040506
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Abidjan
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    www.siteweb.com
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Edmond Kouassi
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Edmond@23
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Edmond564
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
                        Edmond
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        edmond@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    12/01/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Yves
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    0102030405
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    12/03/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    0203040506
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Abidjan
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    www.siteweb.com
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Edmond Kouassi
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Edmond@23
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Edmond564
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

export default ListeDesClients;
