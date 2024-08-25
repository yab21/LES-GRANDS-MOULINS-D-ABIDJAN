import React from "react";
import Individuel from "@/components/DashboardChefDeVente/RendezVous/Individuel";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Individuel />
    </DefaultLayout>
  );
};

export default Page;
