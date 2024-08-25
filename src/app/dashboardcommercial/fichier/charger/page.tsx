import React from "react";
import Charger from "@/components/DashboardCommercial/Fichier/Charger";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Charger />
    </DefaultLayout>
  );
};

export default Page;
