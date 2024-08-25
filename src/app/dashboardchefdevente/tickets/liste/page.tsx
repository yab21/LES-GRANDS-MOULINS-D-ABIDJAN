import React from "react";
import ListeDesTickets from "@/components/DashboardChefDeVente/Tickets/ListeDesTickets";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ListeDesTickets />
    </DefaultLayout>
  );
};

export default Page;
