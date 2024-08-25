import React from "react";
import VoirProfil from "@/components/DashboardCommercial/Profil/Voir";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <VoirProfil />
    </DefaultLayout>
  );
};

export default Page;
