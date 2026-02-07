import { Icon } from "@iconify/react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Slider() {
  return (
    <div className="bg-[url('/images/imagen_1.webp')] relative bg-cover bg-center min-h-screen w-full">
      <div className="absolute inset-0 bg-negro opacity-40 z-0" />
      <div className="w-full max-w-7xl mx-auto p-3 relative z-20">
        <section className="container mt-32 z-50">
          <h1
            className={`${poppins.className} mt-36 text-32px leading-9 sm:max-w-xl sm:text-40px md:text-48px  sm:leading-11 md:leading-12  lg:max-w-3xl lg:text-58px lg:leading-14 text-blanco font-bold`}
          >
            Agencia de Aduanas, Importación y Exportación en el Callao
          </h1>
          <p className="text-16px md:text-18px text-blancoTexto mt-10 max-w-2xl">
            Agencia de aduanas en el Callao especializada en agenciamiento de
            aduanas, asesoría en comercio exterior e importación y exportación,
            cumpliendo SUNAT. Perú
          </p>

          <p
            className={`${poppins.className} text-16px font-bold text-primario mt-10 animate-pulse`}
          >
            ¡SOLICITA UNA COTIZACIÓN AHORA MISMO!
          </p>

          <button className="w-80 min-h-12 p-5 group   text-negro bg-primario mb-20 font-bold uppercase hover:font-semibold  mt-16 rounded-full flex justify-center gap-4 hover:scale-105 transition-transform duration-200 ease-in-out">
            <Link href="#" aria-label="Hablar con un asesor">
              Hablar con un asesor
            </Link>
            <Icon
              icon="ic:round-whatsapp"
              width="26"
              height="26"
              className="group-hover:animate-ping"
            />
          </button>
        </section>
      </div>
    </div>
  );
}
