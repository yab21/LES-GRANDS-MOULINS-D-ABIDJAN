import React from "react";
import RapportDesVentes from "@/components/DashboardCommercial/Client/RapportsDesVentes";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <RapportDesVentes />
    </DefaultLayout>
  );
};

export default Page;
