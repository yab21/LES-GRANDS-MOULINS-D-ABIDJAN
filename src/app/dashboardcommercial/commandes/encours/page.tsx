import React from "react";
import EnCours from "@/components/DashboardCommercial/Commandes/EnCours";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <EnCours />
    </DefaultLayout>
  );
};

export default Page;
