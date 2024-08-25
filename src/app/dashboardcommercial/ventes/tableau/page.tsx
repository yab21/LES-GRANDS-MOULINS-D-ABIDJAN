import React from "react";
import TableauDesVentes from "@/components/DashboardCommercial/Vente/Tableau";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <TableauDesVentes />
    </DefaultLayout>
  );
};

export default Page;
