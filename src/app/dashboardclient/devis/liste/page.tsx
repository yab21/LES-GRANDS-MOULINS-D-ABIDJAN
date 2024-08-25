import React from "react";
import ListDesDevis from "@/components/DashboardClient/Devis/Liste";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ListDesDevis />
    </DefaultLayout>
  );
};

export default Page;
