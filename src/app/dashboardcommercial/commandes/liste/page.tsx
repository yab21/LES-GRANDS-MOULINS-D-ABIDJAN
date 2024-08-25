import React from "react";
import Liste from "@/components/DashboardCommercial/Commandes/Liste";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Liste />
    </DefaultLayout>
  );
};

export default Page;
