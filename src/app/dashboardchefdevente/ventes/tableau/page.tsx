import React from "react";
import TableauDesVentes from "@/components/DashboardChefDeVente/Vente/Tableau";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <TableauDesVentes />
    </DefaultLayout>
  );
};

export default Page;
