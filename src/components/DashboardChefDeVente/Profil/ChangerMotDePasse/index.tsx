"use client";
import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/DashboardChefDeVente/Breadcrumbs/Breadcrumb";

const ChangerMotDePasse = () => {
  return (
    <>
      <Breadcrumb pageName="Changer votre mot de passe" />

      <div className="mt-7 grid grid-cols-5 gap-8">
        <div className="col-span-5">
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
              <h3 className="font-medium text-dark dark:text-white">
                Changer votre mot de passe
              </h3>
            </div>
            <div className="p-7">
              <form>
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                      htmlFor="email"
                    >
                      Adresse e-mail
                    </label>
                    <input
                      className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-2.5 pr-4.5 text-dark focus:border-orange-400 focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-orange-400"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Entrer votre e-mail"
                      defaultValue="Entrer votre e-mail"
                    />
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                      htmlFor="newpassword"
                    >
                      Nouveau mot de passe
                    </label>
                    <input
                      className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-2.5 pr-4.5 text-dark focus:border-orange-400 focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-orange-400"
                      type="text"
                      name="newpassword"
                      id="newpassword"
                      placeholder="Entrer le nouveau mot de passe"
                      defaultValue="Entrer le nouveau mot de passe"
                    />
                  </div>
                </div>

                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                      htmlFor="newpassword"
                    >
                      Confirmer mot de passe
                    </label>
                    <input
                      className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-2.5 pr-4.5 text-dark focus:border-orange-400 focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-orange-400"
                      type="text"
                      name="newpassword"
                      id="newpassword"
                      placeholder="Confirmer votre mot de passe"
                      defaultValue="Confirmer votre mot de passe"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    className="flex justify-center rounded-[7px] bg-orange-400 px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
                    type="submit"
                  >
                    Changer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangerMotDePasse;
