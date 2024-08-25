import React from "react";
import ListDesRendezVous from "@/components/DashboardChefDeVente/RendezVous/Liste";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ListDesRendezVous />
    </DefaultLayout>
  );
};

export default Page;
