import { CustomModal } from ".";
import proyectsJson from "../../public/projects.json";

export const Projects = () => {
  return (
    <section className="mt-40 flex flex-col items-center" id="projects">
      <h2 className="text-2xl font-bold text-center pt-20">Proyectos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 mt-20">
        {proyectsJson.map((project) => (
          <CustomModal key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};
