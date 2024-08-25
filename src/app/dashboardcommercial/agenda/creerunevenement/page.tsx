import React from "react";
import CreerUnEvenement from "@/components/DashboardCommercial/Agenda/CreerUnEvenement";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <CreerUnEvenement />
    </DefaultLayout>
  );
};

export default Page;
