import React from "react";
import Achevees from "@/components/DashboardClient/Commandes/Achevees";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Achevees />
    </DefaultLayout>
  );
};

export default Page;
