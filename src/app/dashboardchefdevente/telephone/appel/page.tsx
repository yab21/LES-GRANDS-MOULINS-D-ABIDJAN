import React from "react";
import Redirection from "@/components/DashboardChefDeVente/Telephone/RedirectionAppp";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Redirection />
    </DefaultLayout>
  );
};

export default Page;
