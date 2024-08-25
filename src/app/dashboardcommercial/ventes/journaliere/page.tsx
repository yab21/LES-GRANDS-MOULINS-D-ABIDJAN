import React from "react";
import Journaliere from "@/components/DashboardCommercial/Vente/Journaliere";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Journaliere />
    </DefaultLayout>
  );
};

export default Page;
