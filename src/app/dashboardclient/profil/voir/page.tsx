import React from "react";
import VoirProfil from "@/components/DashboardClient/Profil/Voir";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <VoirProfil />
    </DefaultLayout>
  );
};

export default Page;
