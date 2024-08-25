import ECommerce from "@/components/DashboardChefDeVente/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
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
