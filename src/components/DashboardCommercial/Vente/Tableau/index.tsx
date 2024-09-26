"use client";
import React from "react";
import ChartProduit from "../../Charts/ChartProduit";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import Breadcrumb from "@/components/DashboardCommercial/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { documents } from "./data";

const TableauDesVentes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("3xl");
  const sizes = "3xl";

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };
  return (
    <>
      <Breadcrumb pageName="Tableau des ventes" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <h2 className="text-[22px] font-bold leading-[30px] text-dark dark:text-white">
          Générer un rapport
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-6">
          <div>
            <Input
              type="date"
              color="warning"
              variant="underlined"
              label="Date de début"
              defaultValue="2024-08-10"
              className="max-w-xs text-base font-medium"
            />
          </div>
          <div>
            <Input
              type="date"
              color="warning"
              variant="underlined"
              label="Date de fin"
              defaultValue="2024-08-15"
              className="max-w-xs text-base font-medium"
            />
          </div>
          <div>
            <Select
              label="Type de document"
              color="warning"
              variant="underlined"
              placeholder="Choisir le document"
              selectionMode="multiple"
              className="max-w-xs text-base font-medium"
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
              Tableau des ventes
            </h3>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b bg-gray-1 font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-3 py-3">Réf produit</th>
                  <th className="px-3 py-3">Janv</th>
                  <th className="px-3 py-3">Fev</th>
                  <th className="px-3 py-3">Mar</th>
                  <th className="px-3 py-3">Avr</th>
                  <th className="px-3 py-3">Mai</th>
                  <th className="px-3 py-3">Jui</th>
                  <th className="px-3 py-3">Juil</th>
                  <th className="px-3 py-3">Aout</th>
                  <th className="px-3 py-3">Sept</th>
                  <th className="px-3 py-3">Oct</th>
                  <th className="px-3 py-3">Nov</th>
                  <th className="px-3 py-3">Dec</th>
                  <th className="px-3 py-3">Objecticf du mois</th>
                  <th className="px-3 py-3">Objecticf de l'année</th>
                </tr>
              </thead>
              <tbody className="divide-y text-gray-600">
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    <Button
                      variant="light"
                      color="warning"
                      onClick={onOpen}
                      isIconOnly
                      onPress={() => handleOpen(size)}
                      className="px-10 py-3"
                    >
                      MC87RT76
                    </Button>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    ---
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    <Button
                      variant="light"
                      color="warning"
                      onClick={onOpen}
                      isIconOnly
                      onPress={() => handleOpen(size)}
                      className="px-10 py-3"
                    >
                      ZS87RT76
                    </Button>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    ---
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4">
                    <Button
                      variant="light"
                      color="warning"
                      onClick={onOpen}
                      isIconOnly
                      onPress={() => handleOpen(size)}
                      className="px-10 py-3"
                    >
                      MC87RT76
                    </Button>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    ---
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4">
                    <Button
                      variant="light"
                      color="warning"
                      onClick={onOpen}
                      isIconOnly
                      onPress={() => handleOpen(size)}
                      className="px-10 py-3"
                    >
                      ZC8ARD34
                    </Button>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    ---
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
                      Statistique du produit
                    </ModalHeader>
                    <ModalBody>
                      <ChartProduit />
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

export default TableauDesVentes;
