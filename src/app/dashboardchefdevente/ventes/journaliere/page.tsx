import React from "react";
import Journaliere from "@/components/DashboardChefDeVente/Vente/Journaliere";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Journaliere />
    </DefaultLayout>
  );
};

export default Page;
