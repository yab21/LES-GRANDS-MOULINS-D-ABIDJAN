"use client";
import React from "react";
import Iframe from "react-iframe";
import Link from "next/link";
import Image from "next/image";
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
import { farines } from "./farineData";

const Liste = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("2xl");
  const sizes = "2xl";

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };
  return (
    <>
      <Breadcrumb pageName="Toutes les commandes" />
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
              <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                Liste de toutes les commandes
              </h3>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b bg-gray-1 font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-3 py-3">Nom du client</th>
                  <th className="px-3 py-3">ID client</th>
                  <th className="px-3 py-3">Date de la commande</th>
                  <th className="px-3 py-3">Date souhaitée de livraison </th>
                  <th className="px-3 py-3">Délai de livraison </th>
                  <th className="px-3 py-3">Délai de livraison </th>
                  <th className="px-3 py-3">Quantité</th>
                  <th className="px-3 py-3">
                    <Select
                      label="Produits"
                      className="max-w-md text-xs"
                      variant="underlined"
                    >
                      {farines.map((farine) => (
                        <SelectItem key={farine.key}>{farine.label}</SelectItem>
                      ))}
                    </Select>
                  </th>
                  <th className="px-3 py-3">Commentaire</th>
                  <th className="px-3 py-3">Statut de la commande </th>
                  <th className="px-3 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y text-gray-600">
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                    <img
                      src="/images/user/user-15.png"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        Edmond
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        edmond@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    NHD393ND
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    09/12/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    19/12/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Isai edmond
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    09/12/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    2 produits
                  </td>
                  <td className="whitespace-nowrap px-24 py-4 text-center text-dark dark:text-white">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    Qualité inferieure
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    Livré
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    <Button
                      size="sm"
                      variant="solid"
                      color="primary"
                      onPress={() => handleOpen(size)}
                    >
                      Voir{" "}
                      <img
                        src="/images/icon/file-button.svg"
                        width={15}
                        height={15}
                      />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                    <img
                      src="/images/user/user-15.png"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        Edmond
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        edmond@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    NHD393ND
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    09/12/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    19/12/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Isai edmond
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    09/12/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    2 produits
                  </td>
                  <td className="whitespace-nowrap px-24 py-4 text-center text-dark dark:text-white">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-red-600">
                    Qualité inferieure
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-600">
                    Livré
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    <Button
                      size="sm"
                      variant="solid"
                      color="primary"
                      onPress={() => handleOpen(size)}
                    >
                      Voir{" "}
                      <img
                        src="/images/icon/file-button.svg"
                        width={15}
                        height={15}
                      />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                    <img
                      src="/images/user/user-15.png"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        Edmond
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        edmond@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    NHD393ND
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    09/12/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    19/12/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Isai edmond
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    09/12/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    2 produits
                  </td>
                  <td className="whitespace-nowrap px-24 py-4 text-center text-dark dark:text-white">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Bon produit
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-400">
                    En cours de livraison
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    <Button
                      size="sm"
                      variant="solid"
                      color="primary"
                      onPress={() => handleOpen(size)}
                    >
                      Voir{" "}
                      <img
                        src="/images/icon/file-button.svg"
                        width={15}
                        height={15}
                      />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                    <img
                      src="/images/user/user-15.png"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        Edmond
                      </span>
                      <span className="block text-xs text-dark dark:text-white">
                        edmond@gma.com
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    NHD393ND
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    09/12/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    19/12/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Isai edmond
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    09/12/2024
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    2 produits
                  </td>
                  <td className="whitespace-nowrap px-24 py-4 text-center text-dark dark:text-white">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Bon produit
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-400">
                    En cours de livraison
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    <Button
                      size="sm"
                      variant="solid"
                      color="primary"
                      onPress={() => handleOpen(size)}
                    >
                      Voir{" "}
                      <img
                        src="/images/icon/file-button.svg"
                        width={15}
                        height={15}
                      />
                    </Button>
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
                      Liste de toutes les commandes
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

export default Liste;
