import React from "react";
import NouveauMail from "@/components/DashboardCommercial/Mail/NouveauMail";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <NouveauMail />
    </DefaultLayout>
  );
};

export default Page;
