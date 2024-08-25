import React from "react";
import NouvelleCommande from "@/components/DashboardCommercial/Commandes/NouvelleCommande";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <NouvelleCommande />
    </DefaultLayout>
  );
};

export default Page;
