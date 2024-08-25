"use client";
import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/DashboardCommercial/Breadcrumbs/Breadcrumb";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";

const AjouterTicket = () => {
  return (
    <>
      <Breadcrumb pageName="Ajouter un ticket" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
              Ajouter un ticket
            </h3>
          </div>
          <div className="mt-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 gap-4 px-2 py-6 md:grid-cols-3 md:py-4">
              <Input
                type="date"
                label="Date"
                variant="bordered"
                color="warning"
                defaultValue="2024-08-12"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Objet"
                variant="bordered"
                color="warning"
                placeholder="Entrer l'objet"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Destinataire"
                variant="bordered"
                color="warning"
                placeholder="Entrer le destinataire"
                className="text-sm font-medium md:text-base"
              />
            </div>
            <div className="grid grid-cols-1 px-2 py-4 md:py-4">
              <Textarea
                label="Message"
                placeholder="Saisissez votre message"
                variant="bordered"
                color="warning"
                disableAnimation
                disableAutosize
                classNames={{
                  base: "max-w-full",
                  input: "resize-y min-h-[40px]",
                }}
              />
            </div>
            <div className="flex justify-center px-2 py-2">
              <Button
                color="primary"
                className="w-64 flex-none"
                variant="solid"
                size="md"
              >
                Ajouter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AjouterTicket;
