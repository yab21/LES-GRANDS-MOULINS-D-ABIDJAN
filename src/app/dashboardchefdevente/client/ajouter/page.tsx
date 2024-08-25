import React from "react";
import AjouterClient from "@/components/DashboardChefDeVente/Client/Ajouter";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <AjouterClient />
    </DefaultLayout>
  );
};

export default Page;
