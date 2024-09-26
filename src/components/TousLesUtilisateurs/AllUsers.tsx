import React from "react";
import Link from "next/link";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const AllUsers: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-4xl pt-5">
        <div className="rounded-[10px] border-3 border-gray-100 bg-[#D94D08] shadow-2xl">
          <div className="m-2 rounded-[10px] border-1 border-orange-400 bg-[#211208] px-2 py-4 shadow-xl md:px-3">
            <h4 className="text-body-xlg flex items-center font-medium tracking-normal text-[#F65F13] subpixel-antialiased md:text-body-2xlg lg:tracking-wide">
              <Image
                src="/images/logo/GMA-logo-nobg.png"
                width={130}
                height={60}
                alt=""
              />
              Tous les comptes des{" "}
              <span className="ml-1 font-bold">GRANDS MOULINS D'ABIDJAN</span>
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-2 border-stroke px-1 py-7.5 md:grid-cols-2 md:px-3 lg:grid-cols-4">
            <div className="flex items-center">
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src="/images/team/avatar.jpg"
                  width={200}
                />
                <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                  <p className="text-tiny text-white/80">Chef de vente</p>
                  <Button
                    as={Link}
                    href="/connexionchefdevente"
                    className="bg-black/20 text-tiny text-orange-400"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Connexion
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex items-center">
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src="/images/team/avatar.jpg"
                  width={200}
                />
                <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                  <p className="text-tiny text-white/80">
                    Administration des ventes
                  </p>
                  <Button
                    className="bg-black/20 text-tiny text-orange-400"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Connexion
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex items-center">
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src="/images/team/avatar.jpg"
                  width={200}
                />
                <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                  <p className="text-tiny text-white/80">
                    Chargé de projet marketing
                  </p>
                  <Button
                    className="bg-black/20 text-tiny text-orange-400"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Connexion
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex items-center">
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src="/images/team/avatar.jpg"
                  width={200}
                />
                <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                  <p className="text-tiny text-white/80">Directeur général</p>
                  <Button
                    className="bg-black/20 text-tiny text-orange-400"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Connexion
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex items-center">
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src="/images/team/avatar.jpg"
                  width={200}
                />
                <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                  <p className="text-tiny text-white/80">
                    Directeur commercial et marketing
                  </p>
                  <Button
                    className="bg-black/20 text-tiny text-orange-400"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Connexion
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex items-center">
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src="/images/team/avatar.jpg"
                  width={200}
                />
                <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                  <p className="text-tiny text-white/80">Client</p>
                  <Button
                    as={Link}
                    href="/connexionclient"
                    className="bg-black/20 text-tiny text-orange-400"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Connexion
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex items-center">
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src="/images/team/avatar.jpg"
                  width={200}
                />
                <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                  <p className="text-tiny text-white/80">Relation client</p>
                  <Button
                    className="bg-black/20 text-tiny text-orange-400"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Connexion
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex items-center">
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src="/images/team/avatar.jpg"
                  width={200}
                />
                <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                  <p className="text-tiny text-white/80">Commercial</p>
                  <Button
                    as={Link}
                    href="/connexioncommercial"
                    className="bg-black/20 text-tiny text-orange-400"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Connexion
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-3 pb-4 pt-5">
          <p>
            All Rights Reserved by
            <span className="font-medium"> LES GRANDS MOULINS D'ABIDJAN</span>.
            Designed and Developed by{" "}
            <Link className="text-orange-400" href="javascript:;">
              African Digit Consulting
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
