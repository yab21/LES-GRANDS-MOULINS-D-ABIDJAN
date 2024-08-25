import React from "react";
import MailSupprime from "@/components/DashboardClient/Mail/MailSupprime";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <MailSupprime />
    </DefaultLayout>
  );
};

export default Page;
