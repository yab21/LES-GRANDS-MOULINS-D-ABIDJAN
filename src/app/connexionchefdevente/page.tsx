import React from "react";
import ConnexionChefDeVente from "@/components/ConnexionChefDeVente";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return <ConnexionChefDeVente />;
};

export default Page;
