"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Breadcrumb from "@/components/DashboardChefDeVente/Breadcrumbs/Breadcrumb";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { documents } from "./data";

const RapportDesVentes = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [size, setSize] = React.useState("2xl");

  const sizes = "2xl";

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };
  return (
    <>
      <Breadcrumb pageName="Rapport des ventes" />
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
            <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
              Rapport des ventes journalières
            </h3>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b bg-gray-50 font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-6 py-3">Rapport</th>
                </tr>
              </thead>
              <tbody className="divide-y text-gray-600">
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-dark dark:text-white">
                    <Button
                      onPress={() => handleOpen(size)}
                      variant="light"
                      className="hover:bg-white hover:text-orange-400"
                    >
                      <img
                        src="/images/icon/file-orange.svg"
                        width={15}
                        height={15}
                        alt=""
                      />{" "}
                      Rapport 05/03/2024 GMA2024
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-dark dark:text-white">
                    <Button
                      onPress={() => handleOpen(size)}
                      variant="light"
                      className="hover:bg-white hover:text-orange-400"
                    >
                      <img
                        src="/images/icon/file-orange.svg"
                        width={15}
                        height={15}
                        alt=""
                      />{" "}
                      Rapport 10/03/2024 GMA2024
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-dark dark:text-white">
                    <Button
                      onPress={() => handleOpen(size)}
                      variant="light"
                      className="hover:bg-white hover:text-orange-400"
                    >
                      <img
                        src="/images/icon/file-orange.svg"
                        width={15}
                        height={15}
                        alt=""
                      />{" "}
                      Rapport 17/03/2024 GMA2024
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-dark dark:text-white">
                    <Button
                      onPress={() => handleOpen(size)}
                      variant="light"
                      className="hover:bg-white hover:text-orange-400"
                    >
                      <img
                        src="/images/icon/file-orange.svg"
                        width={15}
                        height={15}
                        alt=""
                      />{" "}
                      Rapport 22/03/2024 GMA2024
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
            <Modal
              isOpen={isOpen}
              size={size}
              onOpenChange={onOpenChange}
              className="bg-gray-50 font-medium text-dark dark:bg-gray-dark dark:text-white"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Rapport des vente journalière
                    </ModalHeader>
                    <ModalBody>
                      <div className="w-full overflow-x-auto">
                        <Table aria-label="Example static collection table">
                          <TableHeader>
                            <TableColumn>Designation</TableColumn>
                            <TableColumn>Nom du client</TableColumn>
                            <TableColumn>Produit</TableColumn>
                            <TableColumn>MTTC</TableColumn>
                          </TableHeader>
                          <TableBody>
                            <TableRow key="1">
                              <TableCell>---</TableCell>
                              <TableCell>Roland</TableCell>
                              <TableCell>
                                Farine boulangère extra-fine
                              </TableCell>
                              <TableCell>---</TableCell>
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
                          isReadOnly
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

export default RapportDesVentes;
