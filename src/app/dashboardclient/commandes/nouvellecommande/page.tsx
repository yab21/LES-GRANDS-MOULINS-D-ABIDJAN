import React from "react";
import NouvelleCommande from "@/components/DashboardClient/Commandes/NouvelleCommande";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <NouvelleCommande />
    </DefaultLayout>
  );
};

export default Page;
