import React from "react";
import Achevees from "@/components/DashboardCommercial/Commandes/Achevees";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Achevees />
    </DefaultLayout>
  );
};

export default Page;
