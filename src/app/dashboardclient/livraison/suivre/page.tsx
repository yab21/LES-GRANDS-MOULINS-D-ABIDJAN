import React from "react";
import Livraison from "@/components/DashboardClient/Livraison/Suivre";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Livraison />
    </DefaultLayout>
  );
};

export default Page;
