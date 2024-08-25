import ECommerce from "@/components/DashboardClient/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardClient/LayoutsClient/DefaultLaout";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte client",
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
