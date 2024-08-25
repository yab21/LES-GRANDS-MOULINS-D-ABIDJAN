import React from "react";
import ListeDesTickets from "@/components/DashboardCommercial/Tickets/ListeDesTickets";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ListeDesTickets />
    </DefaultLayout>
  );
};

export default Page;
