import React from "react";
import Impayees from "@/components/DashboardClient/Factures/Impayees";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Impayees />
    </DefaultLayout>
  );
};

export default Page;
