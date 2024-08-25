"use client";
import React from "react";
import ChatCard from "./Chat/ChatCard";
import DataStatsOne from "@/components/DashboardClient/DataStats/DataStatsOne";
import ChartEnCours from "@/components/DashboardClient/Charts/ChartEnCours";
import ChartValide from "@/components/DashboardClient/Charts/ChartValide";
import ChartLivraison from "@/components/DashboardClient/Charts/ChartLivraison";
import ChartLivree from "@/components/DashboardClient/Charts/ChartLivree";

const ECommerce: React.FC = () => {
  return (
    <>
      <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
        Statistique des commandes
      </h4>
      <DataStatsOne />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <ChartEnCours />
        <ChartValide />
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <ChartLivraison />
        <ChartLivree />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2 md:mt-6 2xl:mt-9 2xl:gap-2">
        <div className="rounded-xl border-2 border-slate-200 shadow-lg">
          <ChatCard />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
