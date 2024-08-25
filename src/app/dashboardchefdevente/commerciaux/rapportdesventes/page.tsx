import React from "react";
import RapportDesVentes from "@/components/DashboardChefDeVente/Commerciaux/RapportDesVentes";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <RapportDesVentes />
    </DefaultLayout>
  );
};

export default Page;
