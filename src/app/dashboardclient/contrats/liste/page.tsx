import React from "react";
import ListDesContrats from "@/components/DashboardClient/Contrats/Liste";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ListDesContrats />
    </DefaultLayout>
  );
};

export default Page;
