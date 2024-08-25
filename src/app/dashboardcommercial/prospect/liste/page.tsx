import React from "react";
import ListeDesProspects from "@/components/DashboardCommercial/Prospect/Liste";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ListeDesProspects />
    </DefaultLayout>
  );
};

export default Page;
