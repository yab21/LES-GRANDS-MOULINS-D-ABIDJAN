"use client";
import React from "react";
import Breadcrumb from "@/components/DashboardCommercial/Breadcrumbs/Breadcrumb";

const NouveauMail = () => {
  return (
    <>
      <Breadcrumb pageName="Nouveau e-mail" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-7 grid grid-cols-5 gap-8">
          <div className="col-span-5">
            <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
              <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
                <h3 className="font-medium text-dark dark:text-white">
                  Nouveau e-mail
                </h3>
              </div>
              <div className="p-7">
                <form>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                        htmlFor="date"
                      >
                        Date
                      </label>
                      <input
                        className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-2.5 pr-4.5 text-dark focus:border-orange-400 focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-orange-400"
                        type="date"
                        name="date"
                        id="date"
                        defaultValue="2024-08-11"
                      />
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                        htmlFor="destinataire"
                      >
                        Destinataire
                      </label>
                      <input
                        className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-2.5 pr-4.5 text-dark focus:border-orange-400 focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-orange-400"
                        type="text"
                        name="destinataire"
                        id="destinataire"
                        placeholder="Entrer le destinataire"
                        defaultValue="Entrer le destinataire"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                      htmlFor="objet"
                    >
                      Objet
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-2.5 pr-4.5 text-dark focus:border-orange-400 focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-orange-400"
                        type="text"
                        name="objet"
                        id="objet"
                        placeholder="Entrer l'objet"
                        defaultValue="Entrer l'objet"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                      htmlFor="texte"
                    >
                      Texte
                    </label>
                    <textarea
                      className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-5 pl-2 pr-5 text-dark focus:border-orange-400 focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-orange-400"
                      name="texte"
                      id="texte"
                      rows={6}
                      placeholder="Entrer le texte"
                      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia turpis tortor, consequat efficitur mi congue a. Curabitur cursus, ipsum ut lobortis sodales, enim arcu pellentesque lectus
 ac suscipit diam sem a felis. Cras sapien ex, blandit eu dui et suscipit gravida nunc. Sed sed est quis dui."
                    ></textarea>
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      className="flex justify-center rounded-[7px] bg-orange-400 px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
                      type="submit"
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NouveauMail;
