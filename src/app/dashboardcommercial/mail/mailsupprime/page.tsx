import React from "react";
import MailSupprime from "@/components/DashboardCommercial/Mail/MailSupprime";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <MailSupprime />
    </DefaultLayout>
  );
};

export default Page;
