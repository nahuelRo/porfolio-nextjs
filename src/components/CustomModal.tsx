"use client";
import {
  Button,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  content: string;
  image: string;
  technologies: string[];
  apiUrl: string | null;
  clientUrl: string | null;
  web: string | null;
}

export const CustomModal = ({
  title,
  content,
  image,
  technologies,
  clientUrl,
  apiUrl,
  web,
}: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="w-[250px] h-[250px]" onClick={onOpen}>
        <Image className="rounded-md bg-" src={image} alt="FirstPlug" fill />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="xl"
        placement="center"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#000000]/50 backdrop-opacity-40",
          base: "bg-[#171717] dark:bg-[#19172c] text-neutral-100",
          header: "",
          footer: "flex justify-center items-center",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h2 className="text-[#05FFE1]">{title}</h2>
              </ModalHeader>
              <ModalBody className="flex justify-center items-center gap-6 ">
                <p>{content}</p>

                <div className="flex flex-wrap justify-center items-center gap-2">
                  {technologies.map((technology) => (
                    <Chip
                      key={technology}
                      classNames={{
                        base: "bg-transparent",
                        content: "drop-shadow shadow-black text-white",
                      }}
                      variant="bordered"
                    >
                      {technology}
                    </Chip>
                  ))}
                </div>

                <Image
                  className="rounded-sm"
                  width={300}
                  height={300}
                  src={image}
                  alt={title}
                />
              </ModalBody>
              <ModalFooter>
                {clientUrl ? (
                  <Link
                    className="bg-[#05FFE1] text-[#222] px-6 py-2 rounded-md hover:opacity-80 transition-all"
                    target="_blank"
                    href={clientUrl}
                  >
                    Client
                  </Link>
                ) : null}

                {apiUrl ? (
                  <Link
                    className="bg-[#222] text-[#05FFE1] px-8 py-2 rounded-md hover:opacity-80 transition-all"
                    target="_blank"
                    href={apiUrl}
                  >
                    Api
                  </Link>
                ) : null}

                {web ? (
                  <Link
                    className="bg-[#05FFE1] text-[#222] px-6 py-2 rounded-md hover:opacity-80 transition-all"
                    target="_blank"
                    href={web}
                  >
                    Página Web
                  </Link>
                ) : null}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
