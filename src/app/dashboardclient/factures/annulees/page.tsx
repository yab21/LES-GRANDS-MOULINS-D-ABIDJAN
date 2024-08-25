import React from "react";
import Annulees from "@/components/DashboardClient/Factures/Annulees";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Annulees />
    </DefaultLayout>
  );
};

export default Page;
