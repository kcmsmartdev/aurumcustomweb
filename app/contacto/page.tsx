import { Poppins, Shadows_Into_Light_Two } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Formulario from "@/components/Formulario";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const shadow = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Servicio1() {
  return (
    <div>
      <div className="bg-[url('/images/imagen-contacto.webp')] relative bg-cover bg-center  bg-no-repeat min-h-80 w-full mt-20">
        <div className="bg-negro opacity-50 w-full h-full absolute z-10 " />
        <div className="w-full max-w-7xl mx-auto p-3 relative z-20 flex flex-col justify-center">
          <div className="w-full h-full flex flex-col justify-center mt-20">
            <h1
              className={`${poppins.className} text-blanco text-32px font-medium`}
            >
              Contacto
            </h1>
            <div
              className={`${poppins.className} text-blanco text-18px font-medium flex gap-1.5`}
            >
              <Link href="/" aria-label="Visitar página de inicio">
                Inicio
              </Link>
              &gt;
              <span>contacto</span>
            </div>
          </div>
        </div>
      </div>

 

    

      {/* Contacto*/}

      <div className=" mt-20 w-full max-w-7xl mx-auto p-5 flex flex-col items-center">
        <h2 className="text-14px text-secundario border-l-2 px-1   font-semibold">
          CONTACTO
        </h2>
        <h3
          className={`${poppins.className} text-28px lg:text-36px font-extrabold  text-secundario leading-tight`}
        >
          Contáctanos para una cotización personalizada
        </h3>
        <section
          aria-labelledby="contacto"
          className=" mt-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10"
        >
          <div>
            <h2
              className={`${poppins.className} text-284px lg:text-26px font-extrabold  text-secundario leading-tight`}
            >
              ¿Listo para optimizar tus operaciones de comercio exterior?
            </h2>
            <p className="text-16px text-gris leading-relaxed mt-5">
              Contáctanos hoy mismo para una cotización personalizada y descubre
              cómo podemos ayudarte a alcanzar el éxito en tus operaciones
              aduaneras.
            </p>
          
          </div>
          <div>
            <Formulario />
          </div>
        </section>
      </div>

      <div className="mt-7">
              <iframe
                title="Mapa de ubicación Aurum Customs SAC"
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7804.6045198006705!2d-77.10518600000002!3d-12.0227!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDAxJzIxLjciUyA3N8KwMDYnMTguNyJX!5e0!3m2!1ses-419!2spe!4v1770673467375!5m2!1ses-419!2spe"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                className=" w-full"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
    </div>
  );
}
