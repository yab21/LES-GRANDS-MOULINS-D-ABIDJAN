import React from "react";
import NouveauRdv from "@/components/DashboardClient/RendezVous/NouveauRdv";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const creerPage = () => {
  return (
    <DefaultLayout>
      <NouveauRdv />
    </DefaultLayout>
  );
};

export default creerPage;
