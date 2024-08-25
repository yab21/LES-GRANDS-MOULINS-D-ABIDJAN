import React from "react";
import ListCommerciaux from "@/components/DashboardChefDeVente/Commerciaux/Liste";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const ListePage = () => {
  return (
    <DefaultLayout>
      <ListCommerciaux />
    </DefaultLayout>
  );
};

export default ListePage;
