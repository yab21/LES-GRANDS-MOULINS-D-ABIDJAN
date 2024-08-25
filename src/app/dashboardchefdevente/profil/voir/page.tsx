import React from "react";
import VoirProfil from "@/components/DashboardChefDeVente/Profil/Voir";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <VoirProfil />
    </DefaultLayout>
  );
};

export default Page;
