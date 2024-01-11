"use client";
import Image from "next/image";
import Link from "next/link";
import { menu } from "@/icons";
import { useState } from "react";

interface Props {
  links: { path: string; name: string }[];
}

export const NavbarMobile = ({ links }: Props) => {
  const [viewNav, setViewNav] = useState(false);

  return (
    <>
      <button
        className="fixed top-10 right-10 sm:right-24 md:right-36 lg:hidden w-10  z-50 rounded-full bg-[#171717] border border-[#05ffe1] p-2"
        onClick={() => setViewNav(!viewNav)}
      >
        <Image src={menu} alt="menu button" className="cursor-pointer" />
      </button>

      {viewNav ? (
        <header className="flex justify-center items-center">
          <nav className="lg:hidden  fixed top-20 right-28 md:right-36 w-[250px] border border-white rounded-xl flex flex-col justify-around items-center  z-10 bg-[#171717]">
            {links.map(({ path, name }) => (
              <Link
                key={path}
                href={path}
                className="w-full text-center p-4  my-2 rounded-full hover:text-[#05FFE1] transition-colors"
                onClick={() => setViewNav(false)}
              >
                {name}
              </Link>
            ))}
          </nav>
        </header>
      ) : null}
    </>
  );
};
