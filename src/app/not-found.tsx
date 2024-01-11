import Link from "next/link";

export default function notfound() {
  return (
    <main className="h-[76.5vh] w-full flex flex-col justify-center items-center bg-[#171717]">
      <h1 className="text-[150px] lg:text-[200px] font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#05FFE1] px-2 text-xl rounded rotate-12 absolute text-[#282828]">
        La pagina esta en construcción
      </div>
      <button>
        <div className="relative inline-block text-sm font-medium text-[#05FFE1] group active:text-cyan-950 1 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[##05FFE1] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#05FFE1] border border-current">
            <Link href="/" className="text-[#282828]">
              Volver al inicio
            </Link>
          </span>
        </div>
      </button>
    </main>
  );
}
