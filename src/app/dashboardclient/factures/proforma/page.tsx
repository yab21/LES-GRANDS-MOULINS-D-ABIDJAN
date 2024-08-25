import React from "react";
import Proforma from "@/components/DashboardClient/Factures/Proforma";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Proforma />
    </DefaultLayout>
  );
};

export default Page;
