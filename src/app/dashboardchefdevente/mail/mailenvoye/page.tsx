import React from "react";
import MailEnvoye from "@/components/DashboardChefDeVente/Mail/MailEnvoye";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <MailEnvoye />
    </DefaultLayout>
  );
};

export default Page;
