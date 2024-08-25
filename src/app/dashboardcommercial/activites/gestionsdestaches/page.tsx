import React from "react";
import GestionDesTaches from "@/components/DashboardCommercial/Activites/GestionDesTaches";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <GestionDesTaches />
    </DefaultLayout>
  );
};

export default Page;
