import { arrow } from "@/icons";
import Image from "next/image";

export const Home = () => {
  return (
    <div className="h-[90vh] w-full flex flex-col justify-center items-center relative">
      <div className="absolute top-20 w-[200px] h-[200px] bg-[#05FFE1] blur-[300px] rounded-full"></div>
      <div className="flex flex-col gap-4 justify-between items-center">
        <h1 className="text-3xl lg:text-4xl text-center font-bold">
          Esteban Nahuel Rodriguez
        </h1>
        <h2 className="text-2xl lg:text-3xl  text-center font-bold text-[#05FFE1]">
          Desarrollador Full Stack
        </h2>

        <Image
          src={arrow}
          alt="flecha hacia abajo"
          width={35}
          className="animate-bounce absolute bottom-20"
        />
      </div>
    </div>
  );
};
