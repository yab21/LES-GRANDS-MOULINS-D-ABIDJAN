import React from "react";
import MailSupprime from "@/components/DashboardChefDeVente/Mail/MailSupprime";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <MailSupprime />
    </DefaultLayout>
  );
};

export default Page;
