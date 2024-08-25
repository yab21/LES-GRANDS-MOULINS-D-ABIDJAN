import React from "react";
import ChangerMotDePasse from "@/components/DashboardChefDeVente/Profil/ChangerMotDePasse";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ChangerMotDePasse />
    </DefaultLayout>
  );
};

export default Page;
