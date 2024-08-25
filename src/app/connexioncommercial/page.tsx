import React from "react";
import ConnexionCommercial from "@/components/ConnexionCommercial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return <ConnexionCommercial />;
};

export default Page;
