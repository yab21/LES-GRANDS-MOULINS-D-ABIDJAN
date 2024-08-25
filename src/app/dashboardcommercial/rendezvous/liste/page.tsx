import React from "react";
import ListDesRendezVous from "@/components/DashboardCommercial/RendezVous/Liste";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ListDesRendezVous />
    </DefaultLayout>
  );
};

export default Page;
