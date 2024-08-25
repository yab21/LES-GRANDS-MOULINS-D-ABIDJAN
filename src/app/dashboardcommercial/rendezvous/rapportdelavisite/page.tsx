import React from "react";
import RapportDeLaVisite from "@/components/DashboardCommercial/RendezVous/RapportDeLaVisite";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <RapportDeLaVisite />
      </div>
    </DefaultLayout>
  );
};

export default Page;
