import React from "react";
import Payees from "@/components/DashboardClient/Factures/payees";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Payees />
    </DefaultLayout>
  );
};

export default Page;
