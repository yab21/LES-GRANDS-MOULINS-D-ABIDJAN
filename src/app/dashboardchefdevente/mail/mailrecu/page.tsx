import React from "react";
import MailRecu from "@/components/DashboardChefDeVente/Mail/MailRecu";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <MailRecu />
    </DefaultLayout>
  );
};

export default Page;
