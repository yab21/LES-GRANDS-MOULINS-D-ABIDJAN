import React from "react";
import NouveauMail from "@/components/DashboardClient/Mail/NouveauMail";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <NouveauMail />
    </DefaultLayout>
  );
};

export default Page;
