import ECommerce from "@/components/DashboardCommercial/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <DefaultLayout>
          <ECommerce />
        </DefaultLayout>
      </NextUIProvider>
    </>
  );
}
