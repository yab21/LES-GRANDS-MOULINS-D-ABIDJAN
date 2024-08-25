import React from "react";
import CreerDevis from "@/components/DashboardChefDeVente/Devis/Creer";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <CreerDevis />
    </DefaultLayout>
  );
};

export default Page;
