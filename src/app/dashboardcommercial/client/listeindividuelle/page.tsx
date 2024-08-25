import React from "react";
import ListeIndividuelle from "@/components/DashboardCommercial/Client/ListeIndividuelle";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <ListeIndividuelle />
      </div>
    </DefaultLayout>
  );
};

export default Page;
