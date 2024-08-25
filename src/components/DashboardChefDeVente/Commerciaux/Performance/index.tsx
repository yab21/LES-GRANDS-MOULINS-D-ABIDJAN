"use client";
import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/DashboardChefDeVente/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { documents } from "./data";

const PerformanceCommerciaux = () => {
  return (
    <>
      <Breadcrumb pageName="Performance des commerciaux" />
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
              Liste des commerciaux
            </h3>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            <table className="w-230 table-auto text-left text-sm">
              <thead className="border-b font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-6 py-3">Nom</th>
                  <th className="px-6 py-3">Prénom</th>
                  <th className="px-6 py-3">Moyenne</th>
                </tr>
              </thead>
              <tbody className="divide-y text-gray-600">
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-6 py-3">
                    <img
                      src="/images/user/user-15.png"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        Redmond
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        redmond@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-dark dark:text-white">
                    Silvian
                  </td>
                  <td className="flex flex-row gap-4 whitespace-nowrap px-6 py-4">
                    <img
                      src="/images/icon/full-star.svg"
                      width={23}
                      height={23}
                      alt=""
                    />
                    <img
                      src="/images/icon/full-star.svg"
                      width={23}
                      height={23}
                      alt=""
                    />
                    <img
                      src="/images/icon/full-star.svg"
                      width={23}
                      height={23}
                      alt=""
                    />
                    <img
                      src="/images/icon/full-star.svg"
                      width={23}
                      height={23}
                      alt=""
                    />
                    <img
                      src="/images/icon/full-star.svg"
                      width={23}
                      height={23}
                      alt=""
                    />
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-6 py-3">
                    <img
                      src="/images/user/user-15.png"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        Isai
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        isai@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-dark dark:text-white">
                    Christian
                  </td>
                  <td className="flex flex-row gap-4 whitespace-nowrap px-6 py-4">
                    <img
                      src="/images/icon/full-star.svg"
                      width={23}
                      height={23}
                      alt=""
                    />
                    <img
                      src="/images/icon/full-star.svg"
                      width={23}
                      height={23}
                      alt=""
                    />
                    <img
                      src="/images/icon/full-star.svg"
                      width={23}
                      height={23}
                      alt=""
                    />
                    <img
                      src="/images/icon/star.svg"
                      width={18}
                      height={18}
                      alt=""
                    />
                    <img
                      src="/images/icon/star.svg"
                      width={18}
                      height={18}
                      alt=""
                    />
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-6 py-3">
                    <img
                      src="/images/user/user-15.png"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        Isaac
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        isaac@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-dark dark:text-white">
                    Serges
                  </td>
                  <td className="flex flex-row gap-4 whitespace-nowrap px-6 py-4">
                    <img
                      src="/images/icon/full-star.svg"
                      width={23}
                      height={23}
                      alt=""
                    />
                    <img
                      src="/images/icon/full-star.svg"
                      width={23}
                      height={23}
                      alt=""
                    />
                    <img
                      src="/images/icon/star.svg"
                      width={18}
                      height={18}
                      alt=""
                    />
                    <img
                      src="/images/icon/star.svg"
                      width={18}
                      height={18}
                      alt=""
                    />
                    <img
                      src="/images/icon/star.svg"
                      width={18}
                      height={18}
                      alt=""
                    />
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-6 py-3">
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
                  <td className="whitespace-nowrap px-6 py-4 text-dark dark:text-white">
                    Christine
                  </td>
                  <td className="flex flex-row gap-4 whitespace-nowrap px-6 py-4">
                    <img
                      src="/images/icon/full-star.svg"
                      width={23}
                      height={23}
                      alt=""
                    />
                    <img
                      src="/images/icon/full-star.svg"
                      width={23}
                      height={23}
                      alt=""
                    />
                    <img
                      src="/images/icon/full-star.svg"
                      width={23}
                      height={23}
                      alt=""
                    />
                    <img
                      src="/images/icon/full-star.svg"
                      width={23}
                      height={23}
                      alt=""
                    />
                    <img
                      src="/images/icon/full-star.svg"
                      width={23}
                      height={23}
                      alt=""
                    />
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

export default PerformanceCommerciaux;
