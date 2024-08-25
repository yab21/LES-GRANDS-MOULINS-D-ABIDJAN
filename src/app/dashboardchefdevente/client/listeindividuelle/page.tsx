import React from "react";
import ListeIndividuelle from "@/components/DashboardChefDeVente/Client/ListeIndividuelle";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <ListeIndividuelle />
      </div>
    </DefaultLayout>
  );
};

export default Page;
