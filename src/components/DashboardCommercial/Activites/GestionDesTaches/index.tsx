"use client";
import React from "react";
import Breadcrumb from "@/components/DashboardCommercial/Breadcrumbs/Breadcrumb";

const GestionDesTaches = () => {
  return (
    <>
      <Breadcrumb pageName="Gestion des tâches" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 grid grid-cols-6 gap-8">
          <div className="col-span-6">
            <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
              <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
                <h3 className="text-left font-medium text-dark dark:text-white">
                  Gestion des tâches
                </h3>
                <p className="font-medium text-dark dark:text-white">
                  Intégration API Trello
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GestionDesTaches;
