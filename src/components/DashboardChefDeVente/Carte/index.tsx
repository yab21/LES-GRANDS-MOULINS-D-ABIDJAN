"use client";
import React from "react";
import Breadcrumb from "@/components/DashboardChefDeVente/Breadcrumbs/Breadcrumb";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

const Carte = () => {
  return (
    <>
      <Breadcrumb pageName="La carte de la côte d'ivoire" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 grid grid-cols-6 gap-1">
          <div className="col-span-6">
            <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
              <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
                <h3 className="mb-6 text-left font-medium text-dark dark:text-white">
                  La carte de la côte d'ivoire avec la zone des différents
                  clients
                </h3>
                <div className="flex w-full flex-col">
                  <Image
                    width={1200}
                    height={750}
                    alt="Carte de la CI"
                    src="/images/Map_of_Côte_d'Ivoire.jpg"
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

export default Carte;
