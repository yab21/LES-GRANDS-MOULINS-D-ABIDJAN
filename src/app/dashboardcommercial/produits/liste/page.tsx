import React from "react";
import ListeDesProduits from "@/components/DashboardCommercial/Produits/Liste";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ListeDesProduits />
    </DefaultLayout>
  );
};

export default Page;
