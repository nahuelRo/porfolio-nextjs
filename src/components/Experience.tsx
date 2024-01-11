import Link from "next/link";

export const Experience = () => {
  return (
    <section className="mt-40 px-10 w-full lg:w-[600px]" id="experience">
      <h2 className="text-2xl font-bold pt-20">Experiencia</h2>

      <ol className="border-l border-neutral-300 dark:border-neutral-500 mt-10 flex flex-col gap-10">
        <li>
          <div className="flex-start flex items-center pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              Octubre 2023 - Actualidad
            </p>
          </div>

          <div className="mb-6 ml-4 mt-2 flex flex-col gap-2">
            <h4 className="mb-1.5 text-xl font-semibold">
              Desarrollador Full Stack
            </h4>
            <Link
              href="https://www.firstplug.co/"
              target="_blank"
              className="px-8 py-1 border border-[#05FFE1] hover:bg-[#282828] transition-colors rounded-full w-1/2 text-sm text-center"
            >
              First Plug Argentina
            </Link>
            <p className="mb-3 text-neutral-400">
              Desarrollo de plataforma web donde el foco principal es la
              gestión, adquisición y control de inventario, simplificando el
              onboarding y equipamiento para trabajadores remotos.
            </p>
            <p className="text-neutral-200">
              Tecnologias: Nextjs | Tailwind | Express | MongoDB
            </p>
            <p className="text-neutral-200">
              Equipo de 3 desarrolladores | Metodología ágil | Sprints de 1
              semana.
            </p>
          </div>
        </li>

        <li>
          <div className="flex-start flex items-center pt-2">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              Septiembre 2023 - Actualidad
            </p>
          </div>
          <div className="mb-6 ml-4 mt-2 flex flex-col gap-2">
            <h4 className="mb-1.5 text-xl font-semibold">
              Desarrollador Frontend
            </h4>
            <Link
              href="https://www.hpsadiv.com/"
              target="_blank"
              className="px-8 py-1 border border-[#05FFE1] hover:bg-[#282828] transition-colors rounded-full w-1/2 text-sm text-center"
            >
              Hospital Privado Sadiv
            </Link>
            <p className="mb-3 text-neutral-400">
              Desarrollo de una intranet diseñada para optimizar y centralizar
              las operaciones en una clínica privada. Este sistema permite la
              administración de todos los usuarios del establecimiento,
              brindando una plataforma centralizada para la coordinación y
              mejora continua de las prácticas médicas.
            </p>
            <p className="text-neutral-200">
              Tecnologias: Nextjs | Tailwind | Laravel | MySQL
            </p>
            <p className="text-neutral-200">
              Equipo de 4 desarrolladores | Metodología ágil | Sprints de 1
              semanas.
            </p>
          </div>
        </li>

        <li>
          <div className="flex-start flex items-center pt-2">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              Septiembre 2023 - Actualidad
            </p>
          </div>
          <div className="ml-4 mt-2 pb-5 flex flex-col gap-2 ">
            <h4 className="mb-1.5 text-xl font-semibold">Founder</h4>
            <Link
              href="/nuestradigital"
              className="px-8 py-1 border border-[#05FFE1] hover:bg-[#282828] transition-colors rounded-full w-1/2 text-sm text-center"
            >
              Nuestra Digital
            </Link>
            <p className="mb-3 text-neutral-400">
              Agencia digital donde nos enfocamos en el diseño y desarrollo de
              software a madida, algunos de nuestros servicios son landing
              pages, e-commerse y aplicaciones a medida.
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
};
