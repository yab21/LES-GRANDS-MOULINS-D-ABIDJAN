import React from "react";
import HistoriqueDesVentes from "@/components/DashboardChefDeVente/Commerciaux/HistoriqueDesVentes";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const HistoriquePage = () => {
  return (
    <DefaultLayout>
      <HistoriqueDesVentes />
    </DefaultLayout>
  );
};

export default HistoriquePage;
