import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

const ConnexionChefDeVente: React.FC = () => {
  return (
    <>
      <main className="flex w-full">
        <div className="relative hidden h-screen flex-1 items-center justify-center bg-gray-900 lg:flex">
          <div className="absolute inset-0 my-auto h-screen bg-[url('/images/logo/Image-de-connexion-GMA.svg')] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className="flex h-screen flex-1 items-center justify-center">
          <div className="w-full max-w-2xl space-y-8 px-3 text-gray-600 md:px-6">
            <div className="">
              <Image
                src="/images/logo/logo-icon.svg"
                width={150}
                height={150}
                className="lg:hidden"
                alt=""
              />
              <div className="mt-5 space-y-2">
                <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                  Connexion
                </h3>
              </div>
            </div>
            <form className="space-y-5">
              <div>
                <Input
                  type="email"
                  color="warning"
                  label="Nom d'utilisateur"
                  variant="flat"
                  defaultValue="edmond@gma.com"
                  className="max-w-sm"
                />
                {/* <label className="font-thin">Nom d'utilisateur</label>
                <input
                  type="text"
                  placeholder="Entrer votre nom d'utilisateur"
                  required
                  className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-orange-400"
                /> */}
              </div>
              <div>
                <Input
                  type="password"
                  color="warning"
                  label="Mot de passe"
                  variant="flat"
                  defaultValue="edmond@gma.com"
                  className="max-w-sm"
                />
                {/* <label className="font-thin">Mot de passe</label>
                <input
                  type="password"
                  placeholder="Entrer votre mot de passe"
                  required
                  className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-orange-400"
                /> */}
              </div>
              <Button
                as={Link}
                href="/dashboardchefdevente"
                color="warning"
                variant="faded"
              >
                Connexion
              </Button>
              {/* <button className="w-full rounded-lg bg-orange-400 px-4 py-2 font-medium text-white duration-150 hover:bg-orange-300 active:bg-orange-400">
                Connexion
              </button> */}
            </form>
            <Link
              className="mt-1 flex justify-start font-thin text-orange-400"
              href="/"
            >
              Accéder aux différents utilisateurs.
            </Link>
            <div className="flex justify-center px-3 pb-4 pt-5">
              <p className="text-sm">
                All Rights Reserved by
                <span className="font-medium">
                  {" "}
                  LES GRANDS MOULINS D'ABIDJAN
                </span>
                . Designed and Developed by{" "}
                <Link
                  className="font-medium text-orange-400"
                  href="javascript:;"
                >
                  African Digit Consulting
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ConnexionChefDeVente;
