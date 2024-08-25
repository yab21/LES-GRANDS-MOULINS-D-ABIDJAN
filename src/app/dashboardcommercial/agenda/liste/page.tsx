import { Metadata } from "next";
import ListeDesEvenements from "@/components/DashboardCommercial/Agenda/ListeDesEvenements";
import DefaultLayout from "@/components/DashboardCommercial/LayoutsCommercial/DefaultLaout";

export const metadata: Metadata = {
  title: "LES GRANDS MOULINS D'ABIDJAN",
  description: "Le compte commercial",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ListeDesEvenements />
    </DefaultLayout>
  );
};

export default Page;
