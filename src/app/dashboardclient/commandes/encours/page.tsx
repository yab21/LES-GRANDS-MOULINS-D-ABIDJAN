import React from "react";
import EnCours from "@/components/DashboardClient/Commandes/EnCours";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <EnCours />
    </DefaultLayout>
  );
};

export default Page;
