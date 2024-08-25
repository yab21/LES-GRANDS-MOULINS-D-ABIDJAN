import React from "react";
import NouveauMail from "@/components/DashboardChefDeVente/Mail/NouveauMail";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <NouveauMail />
    </DefaultLayout>
  );
};

export default Page;
