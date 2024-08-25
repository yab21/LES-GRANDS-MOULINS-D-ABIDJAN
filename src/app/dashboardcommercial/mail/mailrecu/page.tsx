import React from "react";
import MailRecu from "@/components/DashboardCommercial/Mail/MailRecu";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <MailRecu />
    </DefaultLayout>
  );
};

export default Page;
