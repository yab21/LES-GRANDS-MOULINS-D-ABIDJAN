import React from "react";
import CreerUnEvenement from "@/components/DashboardChefDeVente/Agenda/CreerUnEvenement";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <CreerUnEvenement />
    </DefaultLayout>
  );
};

export default Page;
