"use client";
import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/DashboardClient/Breadcrumbs/Breadcrumb";

const Livraison = () => {
  return (
    <>
      <Breadcrumb pageName="Livraison" />

      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 grid grid-cols-6 gap-8">
          <div className="col-span-6">
            <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
              <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
                <h3 className="text-left font-medium text-dark dark:text-white">
                  Suivez votre colis
                </h3>
              </div>
              <div className="flex p-3 md:px-5">
                <div className="flex w-1/3 items-center border-1 border-gray-200">
                  <Image
                    src="/images/shipping/1.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                  <h2 className="font-medium text-dark dark:text-white">
                    Traitement de la commande
                  </h2>
                </div>
                <div className="flex w-1/3 items-center border-1 border-gray-200">
                  <Image
                    src="/images/shipping/2.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                  <h2 className="font-medium text-blue-700">
                    Livraison en cours
                  </h2>
                </div>
                <div className="flex w-1/3 items-center border-1 border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#00E000"
                      d="M9 16.2L4.8 12l-1.4 1.4L9 19L21 7l-1.4-1.4z"
                    />
                  </svg>
                  <h2 className="font-medium text-green-600">
                    Livraison terminée
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Livraison;
