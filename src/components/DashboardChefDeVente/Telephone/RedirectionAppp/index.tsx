"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import Breadcrumb from "@/components/DashboardChefDeVente/Breadcrumbs/Breadcrumb";
import { User } from "@nextui-org/react";
import { Badge } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

const Redirection = () => {
  return (
    <>
      <Breadcrumb pageName="Redirection d'appel" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 grid grid-cols-6 gap-8">
          <div className="col-span-6 xl:col-span-4">
            <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
              <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
                <Badge content="4" color="warning">
                  <h3 className="text-left font-medium text-dark dark:text-white">
                    Liste des appels
                  </h3>
                </Badge>
              </div>
              <div className="flex flex-col">
                <Tabs aria-label="Options">
                  <Tab key="recents" title="Recents">
                    <Card>
                      <CardBody>
                        <div className="overflow-x-auto">
                          <Table hideHeader aria-label="Liste des appels">
                            <TableHeader>
                              <TableColumn>NAME</TableColumn>
                            </TableHeader>
                            <TableBody>
                              <TableRow key="1">
                                <TableCell className="font-medium text-blue-700">
                                  <User
                                    name="Edmond Eric"
                                    description="le Chargé de Projet Marketing"
                                    avatarProps={{
                                      src: "/images/user/user-15.png",
                                    }}
                                  />
                                </TableCell>
                              </TableRow>
                              <TableRow key="2">
                                <TableCell className="font-medium text-green-700">
                                  <User
                                    name="Charles"
                                    description="Il y'a 3 minutes"
                                    avatarProps={{
                                      src: "/images/user/user-15.png",
                                    }}
                                  />
                                </TableCell>
                              </TableRow>
                              <TableRow key="3">
                                <TableCell className="font-medium text-red-700">
                                  <User
                                    name="Roland"
                                    description="Il y'a 13 minutes"
                                    avatarProps={{
                                      src: "/images/user/user-15.png",
                                    }}
                                  />
                                </TableCell>
                              </TableRow>
                              <TableRow key="4">
                                <TableCell className="font-medium text-red-700">
                                  <User
                                    name="Edvige"
                                    description="Il y'a 13 minutes"
                                    avatarProps={{
                                      src: "/images/user/user-09.png",
                                    }}
                                  />
                                </TableCell>
                              </TableRow>
                              <TableRow key="5">
                                <TableCell className="font-medium text-green-700">
                                  <User
                                    name="Estelle"
                                    description="Il y'a 13 minutes"
                                    avatarProps={{
                                      src: "/images/user/user-09.png",
                                    }}
                                  />
                                </TableCell>
                              </TableRow>
                              <TableRow key="6">
                                <TableCell className="font-medium text-green-700">
                                  <User
                                    name="Edvige"
                                    description=""
                                    avatarProps={{
                                      src: "/images/user/user-09.png",
                                    }}
                                  />
                                </TableCell>
                              </TableRow>
                              <TableRow key="7">
                                <TableCell className="font-medium text-green-700">
                                  <User
                                    name="Franck"
                                    description=""
                                    avatarProps={{
                                      src: "/images/user/user-15.png",
                                    }}
                                  />
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab key="contacts" title="Contacts">
                    <Card>
                      <CardBody>
                        <div className="overflow-x-auto">
                          <Table hideHeader aria-label="Liste des appels">
                            <TableHeader>
                              <TableColumn>NAME</TableColumn>
                            </TableHeader>
                            <TableBody>
                              <TableRow key="1">
                                <TableCell className="font-medium text-dark dark:text-white">
                                  <User
                                    name="Edmond Eric"
                                    description=""
                                    avatarProps={{
                                      src: "/images/user/user-15.png",
                                    }}
                                  />
                                </TableCell>
                              </TableRow>
                              <TableRow key="2">
                                <TableCell className="font-medium text-dark dark:text-white">
                                  <User
                                    name="Charles"
                                    description=""
                                    avatarProps={{
                                      src: "/images/user/user-15.png",
                                    }}
                                  />
                                </TableCell>
                              </TableRow>
                              <TableRow key="3">
                                <TableCell className="font-medium text-dark dark:text-white">
                                  <User
                                    name="Roland"
                                    description=""
                                    avatarProps={{
                                      src: "/images/user/user-15.png",
                                    }}
                                  />
                                </TableCell>
                              </TableRow>
                              <TableRow key="4">
                                <TableCell className="font-medium text-dark dark:text-white">
                                  <User
                                    name="Edvige"
                                    description=""
                                    avatarProps={{
                                      src: "/images/user/user-09.png",
                                    }}
                                  />
                                </TableCell>
                              </TableRow>
                              <TableRow key="5">
                                <TableCell className="font-medium text-dark dark:text-white">
                                  <User
                                    name="Estelle"
                                    description=""
                                    avatarProps={{
                                      src: "/images/user/user-09.png",
                                    }}
                                  />
                                </TableCell>
                              </TableRow>
                              <TableRow key="6">
                                <TableCell className="font-medium text-dark dark:text-white">
                                  <User
                                    name="Edvige"
                                    description=""
                                    avatarProps={{
                                      src: "/images/user/user-09.png",
                                    }}
                                  />
                                </TableCell>
                              </TableRow>
                              <TableRow key="7">
                                <TableCell className="font-medium text-dark dark:text-white">
                                  <User
                                    name="Franck"
                                    description=""
                                    avatarProps={{
                                      src: "/images/user/user-15.png",
                                    }}
                                  />
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab key="favoris" title="Favoris">
                    <Card>
                      <CardBody>
                        <p className="font-medium text-dark dark:text-white">
                          Aucun favoris
                        </p>
                      </CardBody>
                    </Card>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="col-span-6 xl:col-span-2">
            <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
              <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
                <h3 className="font-medium text-dark dark:text-white">
                  Composez le numéro de téléphone
                </h3>
              </div>
              <div className="p-3">
                <Input
                  type="text"
                  placeholder="Veuiller entrer le numéro de téléphone"
                />
              </div>
              <div className="grid grid-cols-3 gap-3 p-2">
                <div className="rounded-full border-1 border-solid border-gray-100 bg-gray-1 text-dark hover:rounded-full hover:bg-slate-700 hover:text-white dark:text-white">
                  <p className="flex justify-center p-6 text-3xl font-medium">
                    1
                  </p>
                </div>
                <div className="rounded-full border-1 border-solid border-gray-100 bg-gray-1 text-dark hover:rounded-full hover:bg-slate-700 hover:text-white dark:text-white">
                  <p className="flex justify-center p-6 text-3xl font-medium">
                    2
                  </p>
                </div>
                <div className="rounded-full border-1 border-solid border-gray-100 bg-gray-1 text-dark hover:rounded-full hover:bg-slate-700 hover:text-white dark:text-white">
                  <p className="flex justify-center p-6 text-3xl font-medium">
                    3
                  </p>
                </div>
                <div className="rounded-full border-1 border-solid border-gray-100 bg-gray-1 text-dark hover:rounded-full hover:bg-slate-700 hover:text-white dark:text-white">
                  <p className="flex justify-center p-6 text-3xl font-medium">
                    4
                  </p>
                </div>
                <div className="rounded-full border-1 border-solid border-gray-100 bg-gray-1 text-dark hover:rounded-full hover:bg-slate-700 hover:text-white dark:text-white">
                  <p className="flex justify-center p-6 text-3xl font-medium">
                    5
                  </p>
                </div>
                <div className="rounded-full border-1 border-solid border-gray-100 bg-gray-1 text-dark hover:rounded-full hover:bg-slate-700 hover:text-white dark:text-white">
                  <p className="flex justify-center p-6 text-3xl font-medium">
                    6
                  </p>
                </div>
                <div className="rounded-full border-1 border-solid border-gray-100 bg-gray-1 text-dark hover:rounded-full hover:bg-slate-700 hover:text-white dark:text-white">
                  <p className="flex justify-center p-6 text-3xl font-medium">
                    7
                  </p>
                </div>
                <div className="rounded-full border-1 border-solid border-gray-100 bg-gray-1 text-dark hover:rounded-full hover:bg-slate-700 hover:text-white dark:text-white">
                  <p className="flex justify-center p-6 text-3xl font-medium">
                    8
                  </p>
                </div>
                <div className="rounded-full border-1 border-solid border-gray-100 bg-gray-1 text-dark hover:rounded-full hover:bg-slate-700 hover:text-white dark:text-white">
                  <p className="flex justify-center p-6 text-3xl font-medium">
                    9
                  </p>
                </div>
                <div className="rounded-full border-1 border-solid border-gray-100 bg-gray-1 text-dark hover:rounded-full hover:bg-slate-700 hover:text-white dark:text-white">
                  <p className="flex justify-center p-6 text-3xl font-medium">
                    *
                  </p>
                </div>
                <div className="rounded-full border-1 border-solid border-gray-100 bg-gray-1 text-dark hover:rounded-full hover:bg-slate-700 hover:text-white dark:text-white">
                  <p className="flex justify-center p-6 text-3xl font-medium">
                    0
                  </p>
                </div>
                <div className="rounded-full border-1 border-solid border-gray-100 bg-gray-1 text-dark hover:rounded-full hover:bg-slate-700 hover:text-white dark:text-white">
                  <p className="flex justify-center p-6 text-3xl font-medium">
                    #
                  </p>
                </div>
              </div>
              <div className="mb-3 flex items-center justify-center gap-4">
                <Button
                  isIconOnly
                  color="success"
                  variant="solid"
                  aria-label="Appeler"
                >
                  <Image
                    src="/images/icon/phone-call.svg"
                    width={45}
                    height={45}
                    alt=""
                  />
                </Button>
                <Button
                  isIconOnly
                  color="danger"
                  variant="solid"
                  aria-label="Supprimer"
                >
                  <Image
                    src="/images/icon/remove.svg"
                    width={45}
                    height={45}
                    alt=""
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Redirection;
