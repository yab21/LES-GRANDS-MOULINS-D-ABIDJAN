"use client";
import React from "react";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Breadcrumb from "@/components/DashboardCommercial/Breadcrumbs/Breadcrumb";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const ListeDesProduits = () => {
  return (
    <>
      <Breadcrumb pageName="Liste des produits" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 grid grid-cols-12 gap-8">
          <div className="col-span-12">
            <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
              <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
                <h3 className="text-left font-medium text-dark dark:text-white">
                  Liste des produits
                </h3>
              </div>
              <div className="m-1 flex gap-4 p-1 md:p-4">
                <div className="w-1/2 md:w-1/4">
                  <Card className="py-4">
                    <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                      <h4 className="text-large font-bold">
                        Farine pâtissière
                      </h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="rounded-xl object-cover"
                        src="/images/product/farinepatissiere.jpeg"
                        width={270}
                      />
                    </CardBody>
                  </Card>
                </div>
                <div className="w-1/2 md:w-1/4">
                  <Card className="py-4">
                    <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                      <h4 className="text-large font-bold">Farine spéciale</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="rounded-xl object-cover"
                        src="/images/product/Farine_speciale.jpeg"
                        width={270}
                      />
                    </CardBody>
                  </Card>
                </div>
                <div className="w-1/2 md:w-1/4">
                  <Card className="py-4">
                    <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                      <h4 className="text-large font-bold">
                        Farine boulangère
                      </h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="rounded-xl object-cover"
                        src="/images/product/farineboulangere.jpeg"
                        width={270}
                      />
                    </CardBody>
                  </Card>
                </div>
                <div className="w-1/2 md:w-1/4">
                  <Card className="py-4">
                    <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                      <h4 className="text-large font-bold">
                        Farine boulangère super-fine
                      </h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="rounded-xl object-cover"
                        src="/images/product/fboulangereextrafine.jpeg"
                        width={270}
                      />
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
              <Table aria-label="">
                <TableHeader>
                  <TableColumn>Nom des produits </TableColumn>
                  <TableColumn>Prix/Kg</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>Farine pâtissière </TableCell>
                    <TableCell>10.000 XOF/Kg</TableCell>
                  </TableRow>
                  <TableRow key="2">
                    <TableCell>Farine spéciale </TableCell>
                    <TableCell>15.000 XOF/Kg</TableCell>
                  </TableRow>
                  <TableRow key="3">
                    <TableCell>Farine boulangère </TableCell>
                    <TableCell>20.000 XOF/Kg</TableCell>
                  </TableRow>
                  <TableRow key="4">
                    <TableCell>Farine boulangère super-fine </TableCell>
                    <TableCell>25.000 XOF/Kg</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListeDesProduits;
