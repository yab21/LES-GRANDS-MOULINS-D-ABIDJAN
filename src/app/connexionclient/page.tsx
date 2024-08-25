import React from "react";
import ConnexionClient from "@/components/ConnexionClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return <ConnexionClient />;
};

export default Page;
