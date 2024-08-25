import React from "react";
import GestionEspaceTravail from "@/components/DashboardCommercial/Activites/GestionEspaceTravail";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <GestionEspaceTravail />
    </DefaultLayout>
  );
};

export default Page;
