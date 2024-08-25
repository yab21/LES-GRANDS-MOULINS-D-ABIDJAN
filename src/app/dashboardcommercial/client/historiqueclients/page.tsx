import React from "react";
import HistoriqueClient from "@/components/DashboardCommercial/Client/HistoriqueClient";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <HistoriqueClient />
    </DefaultLayout>
  );
};

export default Page;
