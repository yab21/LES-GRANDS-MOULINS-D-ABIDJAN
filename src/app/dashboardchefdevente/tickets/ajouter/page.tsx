import React from "react";
import AjouterTicket from "@/components/DashboardChefDeVente/Tickets/AjouterTicket";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <AjouterTicket />
    </DefaultLayout>
  );
};

export default Page;
