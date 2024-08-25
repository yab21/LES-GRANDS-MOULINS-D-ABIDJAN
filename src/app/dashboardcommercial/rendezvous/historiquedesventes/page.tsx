import React from "react";
import HistoriqueDesVentes from "@/components/DashboardCommercial/RendezVous/HistoriqueDesVentes";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const creerPage = () => {
  return (
    <DefaultLayout>
      <HistoriqueDesVentes />
    </DefaultLayout>
  );
};

export default creerPage;
