"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Textarea } from "@nextui-org/input";
import Iframe from "react-iframe";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import Breadcrumb from "@/components/DashboardCommercial/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import { image, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { documents } from "./data";

const RapportDeLaVisite = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("2xl");
  const sizes = "2xl";

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };
  return (
    <>
      <Breadcrumb pageName="Rapport de la visite" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        {/* <h2 className="text-[22px] font-bold leading-[30px] text-dark dark:text-white">
          Générer un rapport
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4">
          <div>
            <Input
              type="date"
              color="warning"
              variant="underlined"
              label="Date de début"
              defaultValue="2024-08-10"
              className="max-w-[220px] text-base font-medium"
            />
          </div>
          <div>
            <Input
              type="date"
              color="warning"
              variant="underlined"
              label="Date de fin"
              defaultValue="2024-08-15"
              className="max-w-[220px] text-base font-medium"
            />
          </div>
          <div>
            <Select
              label="Type de document"
              color="warning"
              variant="underlined"
              placeholder="Choisir le document"
              selectionMode="multiple"
              className="max-w-[220px] text-base font-medium"
            >
              {documents.map((document) => (
                <SelectItem key={document.key}>{document.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <p className="text-sm font-medium">Générer</p>
            <Button isIconOnly color="warning" aria-label="click">
              <img
                src="/images/icon/file-button.svg"
                width={15}
                height={15}
                alt=""
              />
            </Button>
          </div>
        </div> */}

        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <div className="flex-wrap items-center justify-between md:flex">
              <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                Rapport de la visite
              </h3>
              <p className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                Statut du RDV: <span className="text-green-600">terminé</span>
              </p>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            <table className="w-180 table-auto text-left text-sm">
              <thead className="border-b font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-3 py-3">Rapport</th>
                  <th className="px-3 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y text-gray-600">
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Rapportrdvn°23-12/08/2024rolamand.PDF
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <div className="flex items-center gap-4">
                      <Button
                        aria-label="Voir"
                        onClick={onOpen}
                        isIconOnly
                        color="primary"
                        variant="solid"
                        onPress={() => handleOpen(size)}
                      >
                        {" "}
                        <img
                          src="/images/icon/file-button.svg"
                          width={15}
                          height={15}
                        />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Rapportrdvn°23-16/08/2024rolamand.PDF
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <div className="flex items-center gap-4">
                      <Button
                        aria-label="Voir"
                        onClick={onOpen}
                        isIconOnly
                        color="primary"
                        variant="solid"
                        onPress={() => handleOpen(size)}
                      >
                        {" "}
                        <img
                          src="/images/icon/file-button.svg"
                          width={15}
                          height={15}
                        />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Rapportrdvn°23-19/08/2024rolamand.PDF
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <div className="flex items-center gap-4">
                      <Button
                        aria-label="Voir"
                        onClick={onOpen}
                        isIconOnly
                        color="primary"
                        variant="solid"
                        onPress={() => handleOpen(size)}
                      >
                        {" "}
                        <img
                          src="/images/icon/file-button.svg"
                          width={15}
                          height={15}
                        />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Rapportrdvn°23-22/08/2024rolamand.PDF
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <div className="flex items-center gap-4">
                      <Button
                        aria-label="Voir"
                        onClick={onOpen}
                        isIconOnly
                        color="primary"
                        variant="solid"
                        onPress={() => handleOpen(size)}
                      >
                        {" "}
                        <img
                          src="/images/icon/file-button.svg"
                          width={15}
                          height={15}
                        />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <Modal
              size={size}
              isOpen={isOpen}
              onClose={onClose}
              isDismissable={false}
              isKeyboardDismissDisabled={true}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Le rapport en pdf
                    </ModalHeader>
                    <ModalBody>
                      <Iframe
                        src="/files/Contrat de prestation Cannelles Editions.pdf"
                        width="640px"
                        height="320px"
                      ></Iframe>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Fermer
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Terminer
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default RapportDeLaVisite;
