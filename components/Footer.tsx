"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  



  return (
    <footer className="bg-grisClaro w-full">
     <div className="max-w-7xl w-full mx-auto mt-32 py-5">
         <div className="grid grid-cols-1 lg:grid-cols-4 p-3 gap-7">
        <div className="mt-5 flex flex-col gap-4">
          <Link href="">
            <Image
              src="/logo_pc.svg"
              width={150}
              height={63}
              alt="Logo Aurum Customs SAC"
              loading="lazy"
              
            />
          </Link>
          <p className="text-16px text-gris ">
            En Aurum Customs SAC, ofrecemos soluciones de exportación que
            optimizan tus operaciones de comercio internacional.
          </p>
        </div>

        <div className="mt-5 ">
          <h5 className="text-negro font-bold font-14px border-l-2 border-primario px-2">
            Agencia
          </h5>
          <ul className="mt-5 flex flex-col gap-1">
            <li className="flex gap-2 items-center text-gris font-normal text-16px hover:text-secundario">
              <Link href={"/sobre-nosotros"} aria-label="Sobre nosotros">
                Sobre Nosotros
              </Link>
            </li>

            <li className="flex gap-1 items-center text-gris font-normal text-16px hover:text-secundario">
              <Link href={"/tracking"} aria-label="Sobre nosotros">
                Tracking
              </Link>
            </li>

            <li className="flex gap-1 items-center text-gris font-normal text-16px hover:text-secundario">
              <Link href={"/contacto"} aria-label="Sobre nosotros">
                Contacto
              </Link>
            </li>

            <li className="flex gap-1 items-center text-gris font-normal text-16px hover:text-secundario">
              <Link href={"/contacto"} aria-label="Sobre nosotros">
                Libro de reclamaciones
              </Link>
            </li>

            <li className="flex gap-1 items-center text-gris font-normal text-16px hover:text-secundario">
              <Link href={"/termino-y-condiciones"} aria-label="Sobre nosotros">
                Términos y condiciones
              </Link>
            </li>

            <li className="flex gap-1 items-center text-gris font-normal text-16px hover:text-secundario">
              <Link href={"/politica-cookies"} aria-label="Sobre nosotros">
                Política de cookies
              </Link>
            </li>

            <li className="flex gap-1 items-center text-gris font-normal text-16px hover:text-secundario">
              <Link href={"/privacidad-de-datos"} aria-label="Sobre nosotros">
                Política de privacidad de datos
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-5 ">
          <h5 className="text-negro font-bold font-14px border-l-2 border-primario px-2">
            Nuestros servicios
          </h5>
          <ul className="mt-5 flex flex-col gap-1">
            <li className="flex gap-1 items-center text-gris font-normal text-16px hover:text-secundario">
              <Link
                href={"/servicios/agenciamiento-de-aduanas-especializado"}
                aria-label="Sobre nosotros"
              >
                Agenciamiento de aduanas
              </Link>
            </li>

            <li className="flex gap-2 items-center text-gris font-normal text-16px hover:text-secundario">
              <Link
                href={
                  "/servicios/especializado-asesoria-y-consultoria-en-comercio-exterior"
                }
                aria-label="Sobre nosotros"
              >
                Especializado asesoría y consultoría en comercio exterior
              </Link>
            </li>

            <li className="flex gap-1 items-center text-gris font-normal text-16px hover:text-secundario">
              <Link
                href={"/servicios/servicios-complementarios-a-su-disposicion"}
                aria-label="Sobre nosotros"
              >
                Servicios complementarios a su disposición
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-5 ">
          <h5 className="text-negro font-bold font-14px border-l-2 border-primario px-2">
            Contacto
          </h5>
          <ul className="mt-5 flex flex-col gap-2 text-gris text-16px">
            <li className="flex gap-1 hover:text-secundario">
              <span className="bg-acento p-0.5 rounded-sm">
                <Icon
                  icon="mingcute:phone-line"
                  width="18"
                  height="18"
                  className="text-primario"
                />
              </span>
              <Link href="sendto:51975889555">+51 975 889 555</Link>
            </li>

            <li className="flex gap-1 hover:text-secundario">
              <span className="bg-acento p-0.5 rounded-sm">
                <Icon
                  icon="proicons:mail"
                  width="18"
                  height="18"
                  className="text-primario"
                />
              </span>
              <Link href="mailto:contacto@aurumcustoms.com">
                contacto@aurumcustoms.com
              </Link>
            </li>

            <li className="flex gap-1 hover:text-secundario">
              <span className="h-fit bg-acento p-0.5 rounded-sm">
                <Icon
                  icon="bx:map"
                  width="18"
                  height="18"
                  className="text-primario"
                />
              </span>
              <Link href="mailto:contacto@aurumcustoms.com">
                Av. Elmer Faucett - Tomas Val Nro. E1 Int. 303e (Centro Aéreo
                Comercial)
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap  text-14px justify-between items-center text-gris font-montserrat font-normal border-t
                border-t-gris/50 mt-10 pt-6 gap-4">
        <p >
            © {new Date().getFullYear()} Aurum Customs SAC.
        </p>

        <p>
            Desarrollado por <a href="https://kenerdev.com" aria-label="Visitar página de kenerdev" target="_blank" 
            className="underline text-negro/80 font-semibold italic text-14px">KCM smart</a>
        </p>

    </div>
     </div>
    </footer>
  );
}
