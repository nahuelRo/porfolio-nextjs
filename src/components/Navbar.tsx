import Image from "next/image";
import Link from "next/link";
import { NavbarMobile } from ".";

const linkItems = [
  {
    path: "/#about",
    name: "Sobre mí",
  },
  {
    path: "/#experience",
    name: "Experiencia",
  },
  {
    path: "/#skills",
    name: "Habilidades",
  },
  {
    path: "/#projects",
    name: "Proyectos",
  },
  {
    path: "/#contact",
    name: "Contacto",
  },
];

export const Navbar = () => {
  return (
    <>
      <nav className="absolute top-10 border border-white rounded-xl hidden lg:flex justify-around items-center lg:w-[800px] z-10  bg-none dark:bg-none md:backdrop-filter md:backdrop-blur-md mx-auto">
        {linkItems.map(({ path, name }) => (
          <Link
            key={path}
            href={path}
            className="p-4 rounded-full hover:text-[#05FFE1] transition-colors"
          >
            {name}
          </Link>
        ))}
      </nav>

      <NavbarMobile links={linkItems} />
    </>
  );
};
