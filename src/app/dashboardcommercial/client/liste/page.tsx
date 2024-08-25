import React from "react";
import ListDesClients from "@/components/DashboardCommercial/Client/Liste";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ListDesClients />
    </DefaultLayout>
  );
};

export default Page;
