import React from "react";
import MesRdv from "@/components/DashboardClient/RendezVous/MesRdv";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
};

const Page = () => {
  return (
    <DefaultLayout>
      <MesRdv />
    </DefaultLayout>
  );
};

export default Page;
