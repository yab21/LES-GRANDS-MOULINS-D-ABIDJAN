import React from "react";
import CreerRendezVous from "@/components/DashboardChefDeVente/RendezVous/Creer";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const creerPage = () => {
  return (
    <DefaultLayout>
      <CreerRendezVous />
    </DefaultLayout>
  );
};

export default creerPage;
