import React from "react";
import MailEnvoye from "@/components/DashboardClient/Mail/MailEnvoye";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <MailEnvoye />
    </DefaultLayout>
  );
};

export default Page;
