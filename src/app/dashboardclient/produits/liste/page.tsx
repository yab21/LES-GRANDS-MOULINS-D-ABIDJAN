import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";
import ListeDesProduits from "@/components/DashboardClient/Produits/Liste";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ListeDesProduits />
    </DefaultLayout>
  );
};

export default Page;
