"use client";
import React from "react";
import Iframe from "react-iframe";
import Link from "next/link";
import Image from "next/image";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
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
import Breadcrumb from "@/components/DashboardChefDeVente/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { documents } from "./data";

const Journaliere = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const [size, setSize] = React.useState("2xl");
  const sizes = "2xl";

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };
  return (
    <>
      <Breadcrumb pageName="Rapport des ventes journalières" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <h2 className="text-[22px] font-bold leading-[30px] text-dark dark:text-white">
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
        </div>

        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <div className="flex-wrap items-center justify-between md:flex">
              <div className="w-32 flex-auto">
                <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                  Rapport des ventes journalières
                </h3>
              </div>
              <div className="-mb-2 w-64 flex-auto">
                <Button
                  onClick={modal2.onOpen}
                  size="md"
                  variant="solid"
                  color="warning"
                  className="text-white"
                  onPress={() => handleOpen(size)}
                >
                  Créer un rapport{" "}
                  <img
                    src="/images/icon/file-button.svg"
                    width={15}
                    height={15}
                  />
                </Button>
              </div>
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
                    Rapport 05/08/2024 GMA2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <div className="flex items-center gap-4">
                      <Button
                        aria-label="Voir"
                        onClick={modal1.onOpen}
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
                      <Button
                        aria-label="Modifier"
                        isIconOnly
                        color="warning"
                        variant="solid"
                      >
                        {" "}
                        <img
                          src="/images/icon/edit-button.svg"
                          width={15}
                          height={15}
                        />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Rapport 15/08/2024 GMA2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <div className="flex items-center gap-4">
                      <Button
                        aria-label="Voir"
                        onClick={modal1.onOpen}
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
                      <Button
                        aria-label="Modifier"
                        isIconOnly
                        color="warning"
                        variant="solid"
                      >
                        {" "}
                        <img
                          src="/images/icon/edit-button.svg"
                          width={15}
                          height={15}
                        />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Rapport 25/08/2024 GMA2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <div className="flex items-center gap-4">
                      <Button
                        aria-label="Voir"
                        onClick={modal1.onOpen}
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
                      <Button
                        aria-label="Modifier"
                        isIconOnly
                        color="warning"
                        variant="solid"
                      >
                        {" "}
                        <img
                          src="/images/icon/edit-button.svg"
                          width={15}
                          height={15}
                        />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Rapport 31/08/2024 GMA2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <div className="flex items-center gap-4">
                      <Button
                        aria-label="Voir"
                        onClick={modal1.onOpen}
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
                      <Button
                        aria-label="Modifier"
                        isIconOnly
                        color="warning"
                        variant="solid"
                      >
                        {" "}
                        <img
                          src="/images/icon/edit-button.svg"
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
              isOpen={modal1.isOpen}
              onClose={modal1.onClose}
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
            <Modal
              className="bg-white shadow-1 dark:bg-gray-dark dark:shadow-card"
              size={size}
              isOpen={modal2.isOpen}
              onClose={modal2.onClose}
              isDismissable={false}
              isKeyboardDismissDisabled={true}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col">
                      <h2 className="text-[22px] font-medium text-dark dark:text-white">
                        Rapport des ventes journalières
                      </h2>
                    </ModalHeader>
                    <ModalBody>
                      <div className="w-full max-w-full">
                        <div className="overflow-x-auto">
                          <Table className="text-dark dark:text-white">
                            <TableHeader>
                              <TableColumn className="text-sm md:text-base">
                                Designation
                              </TableColumn>
                              <TableColumn className="text-sm md:text-base">
                                Nom du client
                              </TableColumn>
                              <TableColumn className="text-sm md:text-base">
                                Produit
                              </TableColumn>
                              <TableColumn className="text-sm md:text-base">
                                MTTC
                              </TableColumn>
                            </TableHeader>
                            <TableBody>
                              <TableRow key="1">
                                <TableCell>
                                  <Input
                                    type="text"
                                    variant="underlined"
                                    color="warning"
                                    placeholder="La designation"
                                  />
                                </TableCell>
                                <TableCell>
                                  <Input
                                    type="text"
                                    variant="underlined"
                                    color="warning"
                                    placeholder="Nom du client"
                                  />
                                </TableCell>
                                <TableCell>
                                  <Input
                                    type="text"
                                    variant="underlined"
                                    color="warning"
                                    placeholder="Produit"
                                  />
                                </TableCell>
                                <TableCell>
                                  <Input
                                    type="text"
                                    variant="underlined"
                                    color="warning"
                                    placeholder="MTTC"
                                  />
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
                          <Input
                            isReadOnly
                            type="text"
                            label="Tendance jour"
                            placeholder="Farine spéciale"
                            defaultValue="Farine spéciale"
                          />
                          <Input
                            isReadOnly
                            type="text"
                            label="Montant total du produit jour"
                            placeholder="700.000 XOF"
                            defaultValue="700.000 XOF"
                          />
                          <Input
                            type="text"
                            label="Objectif vente par jour"
                            placeholder="10.000.000 XOF"
                            defaultValue="10.000.000 XOF"
                          />
                          <Input
                            isReadOnly
                            type="text"
                            label="Total vente jour"
                            placeholder="8.000.000 XOF"
                            defaultValue="8.000.000 XOF"
                          />
                        </div>
                      </div>
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

export default Journaliere;
