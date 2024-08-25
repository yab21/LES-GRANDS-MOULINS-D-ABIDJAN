import React from "react";
import GestionDesTaches from "@/components/DashboardChefDeVente/Activites/GestionDesTaches";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <GestionDesTaches />
    </DefaultLayout>
  );
};

export default Page;
