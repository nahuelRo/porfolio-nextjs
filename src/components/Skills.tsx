import Image from "next/image";
import {
  astro,
  docker,
  express,
  figma,
  git,
  github,
  jira,
  mongodb,
  nextjs,
  node,
  postgresql,
  redux,
  sass,
  sequelize,
  tailwind,
  trello,
  typescript,
  vscode,
} from "@/icons";

const skills = [
  {
    icon: typescript,
    name: "Typescript",
  },
  {
    icon: astro,
    name: "Astro",
  },
  {
    icon: redux,
    name: "Redux",
  },
  {
    icon: nextjs,
    name: "Nextjs",
  },
  {
    icon: tailwind,
    name: "Tailwindcss",
  },
  {
    icon: sass,
    name: "Sass",
  },
  {
    icon: node,
    name: "Nodejs",
  },
  {
    icon: express,
    name: "Express",
  },
  {
    icon: sequelize,
    name: "Sequelize",
  },
  {
    icon: postgresql,
    name: "PostgreSQL",
  },
  {
    icon: github,
    name: "Github",
  },
  {
    icon: docker,
    name: "Docker",
  },
  {
    icon: trello,
    name: "Trello",
  },
  {
    icon: vscode,
    name: "VScode",
  },
  {
    icon: git,
    name: "Git",
  },
  {
    icon: mongodb,
    name: "MongoDB",
  },
  {
    icon: figma,
    name: "Figma",
  },
  {
    icon: jira,
    name: "Jira",
  },
];

export const Skills = () => {
  return (
    <section className="mt-40 w-full lg:w-[800px] mx-auto" id="skills">
      <h2 className="text-2xl font-bold text-center pt-20">Habilidades</h2>

      <div className="mt-16 px-10  lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {skills.map((skill) => (
          <article
            key={skill.name}
            className="flex items-center border border-[#fff] p-4 rounded-md h-[90px] hover:border hover:border-[#05FFE1] hover:scale-110 hover:transition-all"
          >
            <div className="w-2/3 flex justify-center">
              <Image src={skill.icon} alt="Typescript logo" />
            </div>
            <span className="w-2/3">{skill.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
};
