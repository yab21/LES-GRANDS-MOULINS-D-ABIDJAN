import React from "react";
import Redirection from "@/components/DashboardClient/Telephone/RedirectionAppp";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Redirection />
    </DefaultLayout>
  );
};

export default Page;
