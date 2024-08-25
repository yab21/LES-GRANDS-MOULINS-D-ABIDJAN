import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
export const ChartBox = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-[300px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <div className="flex items-center justify-start">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="/images/user/user-15.png"
            />
            <h4 className="text-small font-semibold leading-none text-default-600">
              Serges
            </h4>
            <h5 className="text-small tracking-tight text-default-500">
              serges@gma.com
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="pl-px text-small text-default-500">
          Pour quelle raison me serait-il conseillé de penser au contenu
          commercial ?
        </p>
        <div className="mt-2">
          <div className="">
            <div className="flex items-center justify-end">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Edvige
              </h4>
              <h5 className="text-small tracking-tight text-default-500">
                edvige@gma.com
              </h5>
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="/images/user/user-09.png"
              />
            </div>
            <p className="pl-px text-small text-default-500">
              Merci de croire en nos soutiens.
            </p>
            <Textarea
              label=""
              placeholder="Entrer votre message"
              className="mt-1 max-w-md"
            />
          </div>
        </div>
      </CardBody>
      <CardFooter className="justify-end gap-3">
        <div className="flex gap-1">
          <Button color="warning" size="sm" radius="md" className="text-white">
            Envoyer
          </Button>
          <Button color="primary" size="sm" radius="md" className="text-white">
            Fermer
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
