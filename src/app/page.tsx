import AllUsers from "@/components/TousLesUtilisateurs/AllUsers";
import { Metadata } from "next";
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
        <AllUsers />
      </NextUIProvider>
    </>
  );
}
