import React from "react";
import ModifierProfil from "@/components/DashboardChefDeVente/Profil/Modifier";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ModifierProfil />
    </DefaultLayout>
  );
};

export default Page;
