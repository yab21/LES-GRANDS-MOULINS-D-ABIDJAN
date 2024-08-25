import React from "react";
import MailEnvoye from "@/components/DashboardCommercial/Mail/MailEnvoye";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <MailEnvoye />
    </DefaultLayout>
  );
};

export default Page;
