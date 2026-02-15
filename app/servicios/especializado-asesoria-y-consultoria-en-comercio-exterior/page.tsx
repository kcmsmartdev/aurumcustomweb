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
      <div className="bg-[url('/images/sobre-nosotros.webp')] relative bg-cover bg-center  bg-no-repeat min-h-80 w-full mt-20">
        <div className="bg-negro opacity-50 w-full h-full absolute z-10 " />
        <div className="w-full max-w-7xl mx-auto p-3 relative z-20 flex flex-col justify-center">
          <div className="w-full h-full flex flex-col justify-center mt-20">
            <h1
              className={`${poppins.className} text-blanco text-32px font-medium`}
            >
              Especializado Asesoría y Consultoría en Comercio Exterior
            </h1>
            <div
              className={`${poppins.className} text-blanco text-18px font-medium flex gap-1.5`}
            >
              <Link href="/" aria-label="Visitar página de inicio">
                Inicio
              </Link>
              &gt;
              <span>
                Especializado Asesoría y Consultoría en Comercio Exterior
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-24 flex flex-col items-center">
        <div className="text-center flex justify-center">
          <h1
            className={`${shadow.className} container max-w-3xl  text-28px font-medium`}
          >
            "Diseñamos una oferta de servicios completa para cubrir todas tus
            necesidades logísticas y aduaneras."
          </h1>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto p-5 grid grid-cols-1 lg:grid-cols-2 gap-5 mt-32 bg-gris/5 rounded-4xl">
        <div className="flex flex-col gap-4">
          <h2
            className={`${poppins.className} text-32px lg:text-36px font-extrabold  text-secundario leading-tight`}
          >
            Especializado Asesoría y Consultoría en Comercio Exterior
          </h2>
          <p className="text-gris text-16px ">
            Te guiamos en cada decisión. Ofrecemos consultoría especializada en
            comercio exterior, regulaciones aduaneras y optimización de procesos
            logísticos
          </p>

          <Image
            src="/images/imagen_servicio_2.webp"
            alt="Imagen de Agenciamiento de aduanas especializado"
            width={500}
            height={450}
          ></Image>
        </div>

        <div className=" flex flex-col gap-4">
          <section>
            <h3
              className={`${poppins.className} text-24px lg:text-26px font-extrabold  text-secundario leading-tight`}
            >
              Características del Servicio
            </h3>

            <ul className="border-l border-gris/30 pl-6 space-y-6 mt-5">
              <li className="relative">
                <span className="absolute -left-3 top-1 w-2 h-2 rounded-full bg-primario"></span>
                <p className="text-negro">Clasificación Arancelaria</p>
              </li>

              <li className="relative">
                <span className="absolute -left-3 top-1 w-2 h-2 rounded-full bg-primario"></span>
                <p className="text-negro">
                  Tratados y convenios internacionales
                </p>
              </li>

              <li className="relative">
                <span className="absolute -left-3 top-1 w-2 h-2 rounded-full bg-primario"></span>
                <p className="text-negro">
                  Optimización de costos logísticos y tributarios
                </p>
              </li>

              <li className="relative">
                <span className="absolute -left-3 top-1 w-2 h-2 rounded-full bg-primario"></span>
                <p className="text-negro">
                  Requisitos para mercancías restringidas
                </p>
              </li>
            </ul>
          </section>
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
            <div className="mt-7">
              <iframe
                title="Mapa de ubicación Aurum Customs SAC"
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7804.6045198006705!2d-77.10518600000002!3d-12.0227!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDAxJzIxLjciUyA3N8KwMDYnMTguNyJX!5e0!3m2!1ses-419!2spe!4v1770673467375!5m2!1ses-419!2spe"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                className="rounded-4xl w-full"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
          <div>
            <Formulario />
          </div>
        </section>
      </div>
    </div>
  );
}
