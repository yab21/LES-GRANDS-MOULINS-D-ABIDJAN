import React from "react";
import AjouterProspect from "@/components/DashboardCommercial/Prospect/Ajouter";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <AjouterProspect />
    </DefaultLayout>
  );
};

export default Page;
