import React from "react";
import ListDesClients from "@/components/DashboardChefDeVente/Client/Liste";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ListDesClients />
    </DefaultLayout>
  );
};

export default Page;
