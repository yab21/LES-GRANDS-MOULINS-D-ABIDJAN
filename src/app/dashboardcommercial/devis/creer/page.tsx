import React from "react";
import CreerDevis from "@/components/DashboardCommercial/Devis/Creer";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <CreerDevis />
    </DefaultLayout>
  );
};

export default Page;
