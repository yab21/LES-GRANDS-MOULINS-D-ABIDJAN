import React from "react";
import Individuel from "@/components/DashboardCommercial/RendezVous/Individuel";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Individuel />
    </DefaultLayout>
  );
};

export default Page;
