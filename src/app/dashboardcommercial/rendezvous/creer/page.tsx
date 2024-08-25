import React from "react";
import CreerRendezVous from "@/components/DashboardCommercial/RendezVous/Creer";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const creerPage = () => {
  return (
    <DefaultLayout>
      <CreerRendezVous />
    </DefaultLayout>
  );
};

export default creerPage;
