import { avatar, download, github, linkedin } from "@/icons";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <section
      className="mt-36 flex flex-col justify-center items-center"
      id="about"
    >
      <h2 className="text-center text-2xl font-bold pt-20">Sobre mí</h2>
      <Image
        src={avatar}
        alt="Esteban Nahuel Rodriguez"
        width={300}
        className="mt-10 ml-10"
      />

      <div className="flex w-[350px] justify-between items-center my-5">
        <Link
          href="https://www.linkedin.com/in/esteban-nahuel-rodriguez-514775203/"
          target="_blank"
        >
          <Image src={linkedin} alt="linkedin logo" width={40} />
        </Link>

        <Link
          href="/CV.pdf"
          download="CV.pdf"
          target="_blank"
          className="flex justify-evenly items-center bg-[#fff] text-[#282828] font-bold w-[170px] h-[40px] rounded-full"
        >
          Descargar CV
          <Image src={download} alt="download cv" width={20} />
        </Link>

        <Link href="https://github.com/nahuelRo" target="_blank">
          <Image src={github} alt="github logo" width={40} />
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center px-8 md:px-14 w-full lg:w-[800px] gap-8 mt-10">
        <p>
          Soy{" "}
          <span className="text-[#05FFE1] font-medium">
            desarrollador Full Stack
          </span>{" "}
          con fascinación por la{" "}
          <span className="text-[#05FFE1] font-medium">
            Resolución de problemas
          </span>
          . Esto me llevo a comenzar en un{" "}
          <span className="text-[#05FFE1] font-medium">bootcamp</span> de
          programación con más de{" "}
          <span className="text-[#05FFE1] font-medium">
            800 horas de práctica técnica/teórica.
          </span>
        </p>

        <p>
          Más allá de la programación, soy un apasionado del{" "}
          <span className="text-[#05FFE1] font-medium">
            aprendizaje continuo
          </span>{" "}
          y la mejora personal. Mi{" "}
          <span className="text-[#05FFE1] font-medium">curiosidad</span> me ha
          llevado a explorar no solo las complejidades del código, sino también
          las interconexiones entre las personas y la tecnología.
        </p>

        <p>
          Lo que más disfruto es{" "}
          <span className="text-[#05FFE1] font-medium">
            enfrentar desafios complejos
          </span>{" "}
          y{" "}
          <span className="text-[#05FFE1] font-medium">trabajar en equipo</span>{" "}
          para encontrar soluciones innovadoras. Mi{" "}
          <span className="text-[#05FFE1] font-medium">
            capacidad para adaptarme
          </span>{" "}
          rápidamente y mi{" "}
          <span className="text-[#05FFE1] font-medium">enfoque proactivo</span>{" "}
          me han permitido no solo sobresalir en el desarrollo técnico, sino
          también en la{" "}
          <span className="text-[#05FFE1] font-medium">
            colaboración efectiva
          </span>{" "}
          con colegas y la comunicación clara de ideas.
        </p>

        <p>
          Actualmente,{" "}
          <span className="text-[#05FFE1] font-medium">
            me encuentro en la búsqueda de un entorno laboral donde pueda crecer
            personal y profesionalmente.
          </span>{" "}
          Cuento con habilidades técnicas populares en el mercado IT, así como
          habilidades blandas necesarias para aportar en cada proyecto.
        </p>
      </div>
    </section>
  );
};
