import React from "react";
import ListDesDevis from "@/components/DashboardChefDeVente/Devis/Liste";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ListDesDevis />
    </DefaultLayout>
  );
};

export default Page;
