"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderMovil() {
  const [open, setOpen] = useState(false);
  const [openServicio, setOpenServicios] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
    setOpenServicios(false);
  }, [pathname]);

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
    <header className="fixed top-0 left-0 w-full bg-blanco z-50 p-2 rounded-b-4xl">
      <nav className="w-full flex flex-row justify-between items-center">
        <a href="/">
          <Image
            src="/logo_movil.svg"
            alt="logo Aurum Customs"
            className="w-32 h-auto sm:w-36 md:w-44"
            width={128}
            height={39}
            aria-label="logo Aurum Customs"
            loading="eager"
            fetchPriority="high"
          />
        </a>

        <div>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            className="z-50"
          >
            {open ? (
              <Icon
                icon="pepicons-pencil:menu-circle-filled"
                width="34"
                height="34"
              />
            ) : (
              <Icon icon="pepicons-pencil:menu-circle" width="34" height="34" />
            )}
          </button>
        </div>
      </nav>
      {/* MENÚ DESPLEGABLE */}
      {open && (
        <ul className="mt-4 relative space-y-6 p-4 rounded-lg font-medium ">
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={
                pathname === "/"
                  ? "text-secundario font-semibold text-16px"
                  : "text-14px text-gris "
              }
            >
              Inicio
            </Link>
          </li>

          <li>
            <Link
              href="/sobre-nosotros"
              onClick={() => setOpen(false)}
              className={
                pathname === "/sobre-nosotros"
                  ? "text-secundario text-16px"
                  : "text-14px text-gris"
              }
            >
              Nostros
            </Link>
          </li>

          <div className="flex justify-between items-center">
            <li>
              <Link
                href="/servicios/agenciamiento-de-aduanas-especializado"
                onClick={() => setOpen(false)}
                className={
                  pathname === "/servicios"
                    ? "text-secundario text-16px"
                    : "text-14px text-gris"
                }
              >
                Servicios
              </Link>
            </li>

            <button
              onClick={() => setOpenServicios(!openServicio)}
              aria-label="Abrir servicios"
            >
              <Icon
                icon="bytesize:chevron-bottom"
                width="18"
                height="18"
                className={`transition-transform duration-300 ${openServicio ? "rotate-180" : "rotate-0"}`}
              />
            </button>
          </div>
          <ul
            className={`overflow-hidden transition-all duration-300 ${openServicio ? "max-h-96 opacity-100 space-y-4" : "max-h-0 opacity-0"}`}
          >
            {servicios.map((servicio) => {
              const isActivo = pathname === servicio.href;
              return (
                <li
                  key={servicio.href}
                  className={
                    isActivo
                      ? "text-secundario px-3 underline text-14px font-semibold"
                      : "text-gris text-14px px-3 font-normal"
                  }
                >
                  <Link href={servicio.href}>{servicio.label}</Link>
                </li>
              );
            })}
          </ul>
          <li>
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className={
                pathname === "/contacto"
                  ? "text-secundario text-16px"
                  : "text-14px text-gris"
              }
            >
              Contacto
            </Link>
          </li>

          <li>
            <Link
              href="/tracking"
              onClick={() => setOpen(false)}
              className={
                pathname === "/tracking"
                  ? "flex text-16px italic underline text-negro font-bold "
                  : "flex text-gris italic text-14px"
              }
            >
              <Icon icon="flowbite:tracking-outline" width="18" height="18" />
              Tracking
            </Link>
          </li>

          <div className="mt-10 text-14px">
            <button className="w-full px-3 py-4 bg-negro mt-5 rounded-full text-blanco text-16px flex items-center justify-center gap-2">
              Hablemos por whatsapp
              <Icon icon="ic:round-whatsapp" width="24" height="24"
              className="text-blanco" />
            </button>
          </div>
        </ul>
      )}
    </header>
  );
}
