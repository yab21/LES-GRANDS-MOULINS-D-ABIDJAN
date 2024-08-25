import React from "react";
import Redirection from "@/components/DashboardCommercial/Telephone/RedirectionAppp";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Redirection />
    </DefaultLayout>
  );
};

export default Page;
