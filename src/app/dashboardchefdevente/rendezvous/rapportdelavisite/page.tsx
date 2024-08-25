import React from "react";
import RapportDeLaVisite from "@/components/DashboardChefDeVente/RendezVous/RapportDeLaVisite";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
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
