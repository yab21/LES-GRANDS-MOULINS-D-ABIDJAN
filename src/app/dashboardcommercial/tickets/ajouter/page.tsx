import React from "react";
import AjouterTicket from "@/components/DashboardCommercial/Tickets/AjouterTicket";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <AjouterTicket />
    </DefaultLayout>
  );
};

export default Page;
