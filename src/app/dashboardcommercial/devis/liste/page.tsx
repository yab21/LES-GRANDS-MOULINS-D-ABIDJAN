import React from "react";
import ListDesDevis from "@/components/DashboardCommercial/Devis/Liste";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ListDesDevis />
    </DefaultLayout>
  );
};

export default Page;
