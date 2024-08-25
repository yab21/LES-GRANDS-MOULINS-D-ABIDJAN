import { Metadata } from "next";
import ListeDesEvenements from "@/components/DashboardChefDeVente/Agenda/ListeDesEvenements";
import DefaultLayout from "@/components/DashboardChefDeVente/LayoutsChefDeVente/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte chef de vente",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ListeDesEvenements />
    </DefaultLayout>
  );
};

export default Page;
