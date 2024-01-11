import { Button } from "@nextui-org/react";

export const Contact = () => {
  return (
    <section
      className="mt-24 w-full lg:w-[800px] px-4 md:px-8  lg:px-0"
      id="contact"
    >
      <form className="flex flex-col gap-8 my-10 border border-neutral-500 px-9 py-9 rounded-md">
        <h2 className="text-2xl font-bold ">Contacto</h2>
        <div className="flex justify-between gap-8 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col gap-1">
            <label htmlFor="name" className="text-sm">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              className="block bg-transparent border border-neutral-500 hover:border-neutral-100 transition-all rounded-md p-2 w-full"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-1">
            <label htmlFor="lastname" className="text-sm">
              Apellido
            </label>
            <input
              id="lastname"
              type="text"
              className="block bg-transparent border border-neutral-500 hover:border-neutral-100 transition-all  rounded-md p-2 w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="subject" className="text-sm">
            Asunto
          </label>
          <input
            id="subject"
            type="text"
            className="block bg-transparent border border-neutral-500 hover:border-neutral-100 transition-all rounded-md p-2 w-full"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="block bg-transparent border border-neutral-500 hover:border-neutral-100 transition-all rounded-md p-2 w-full"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm">
            Mensaje
          </label>
          <textarea
            className="block bg-transparent border border-neutral-500 hover:border-neutral-100 transition-all rounded-md p-2 w-full resize-none"
            name="message"
            id="message"
            cols={30}
            rows={5}
          ></textarea>
        </div>

        <Button className="px-[30px] py-[15px] bg-[#05FFE1] text-black font-bold  rounded-lg">
          Enviar
        </Button>
      </form>
    </section>
  );
};
