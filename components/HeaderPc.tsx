"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import { Icon } from "@iconify/react";

export default function HeaderPC() {
  const pathname = usePathname();
  const isServicios = pathname.startsWith("/servicios");

  const servicios = [
    {
      label: "Agenciamiento de aduanas especializado",
      href: "/servicios/agenciamiento-de-aduanas-especializado",
    },
    {
      label: "Especializado asesoría y consultoría en comercio exterior",
      href: "/servicios/especializado-asesoria-y-consultoria-en-comercio-exterior",
    },
    {
      label: "Servicios complementarios a su disposición",
      href: "/servicios/servicios-complementarios-a-su-disposicion",
    },
  ];

  return (
    <header className="fixed top-0 w-full p-2  bg-blanco z-50">
      <nav className="max-w-7xl w-full  mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo_pc.svg"
            alt="logo Aurum Customs"
            width={200}
            height={55}
            className="w-48 h-auto"
            aria-label="logo Aurum Customs"
            loading="eager"
            fetchPriority="high"
          />
        </Link>

        <ul className="flex justify-between items-center gap-5 text-negro text-16px ">
          <li className="hover:scale-105 hover:font-medium transition-transform duration-200 ease-out">
            <Link
              href="/"
              className={pathname === "/" ? "text-secundario" : "text-negro hover:text-secundario transition-transform duration-200 ease-out"}
            >
              Inicio
            </Link>
          </li>

          <li className="hover:scale-105 hover:font-medium transition-transform duration-200 ease-out">
            <Link
              href="/sobre-nosotros"
              className={
                pathname === "/sobre-nosotros"
                  ? "text-secundario"
                  : "text-negro hover:text-secundario transition-transform duration-200 ease-out"
              }
            >
              Nosotros
            </Link>
          </li>

          <li className="group relative hover:scale-105  hover:font-medium transition-transform duration-200 ease-out">
            <Link
              href="/servicios/agenciamiento-de-aduanas-especializado"
              className={isServicios ? "text-secundario" : "text-negro hover:text-secundario transition-transform duration-200 ease-out"}
            >
              Servicios
            </Link>
            <ul
              className="absolute  top-full left-0 mt-2  w-80 bg-acento rounded-lg p-3 space-y-3 opacity-0 invisible  
            group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-out z-10"
            >
              {servicios.map((servicio) => {
                const isActivo = pathname === servicio.href;
                return (
                  <li
                    key={servicio.href}
                    className={
                      isActivo
                        ? "bg-blanco p-1 rounded-sm underline"
                        : " hover:scale-105 font-normal  transition-transform duration-200 ease-out hover:underline"
                    }
                  >
                    <Link
                      href={servicio.href}
                      className={isActivo ? "underline" : ""}
                    >
                      {servicio.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className="hover:scale-105 hover:font-medium transition-transform duration-200 ease-out">
            <Link
              href="/contacto"
              className={
                pathname === "/contacto"
                  ? "text-secundario"
                  : "text-negro hover:text-secundario hover:font-medium transition-transform duration-200 ease-out"
              }
            >
              Contacto
            </Link>
          </li>
        </ul>

        <ul>
          <li className="bg-acento py-3 px-5 flex gap-2 items-center rounded-4xl hover:scale-105 text-negro  hover:font-medium transition-transform duration-200 ease-out">
            <Icon icon="flowbite:tracking-outline" width="18" height="18" />
            <Link href="/tracking">Tracking</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
