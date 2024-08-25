import React from "react";
import PerformanceCommerciaux from "@/components/DashboardChefDeVente/Commerciaux/Performance";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const performancePage = () => {
  return (
    <DefaultLayout>
      <PerformanceCommerciaux />
    </DefaultLayout>
  );
};

export default performancePage;
