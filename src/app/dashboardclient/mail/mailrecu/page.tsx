import React from "react";
import MailRecu from "@/components/DashboardClient/Mail/MailRecu";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <MailRecu />
    </DefaultLayout>
  );
};

export default Page;
