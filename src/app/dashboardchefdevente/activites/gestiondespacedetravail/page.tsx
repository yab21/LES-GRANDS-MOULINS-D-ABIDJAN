import React from "react";
import GestionEspaceTravail from "@/components/DashboardChefDeVente/Activites/GestionEspaceTravail";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <GestionEspaceTravail />
    </DefaultLayout>
  );
};

export default Page;
