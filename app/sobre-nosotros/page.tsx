import Image from "next/image"
import { Icon } from "@iconify/react";
import Link from "next/link";
export default function NosotrosPage(){
    return(
            <section
        aria-labelledby="sobre-nosotros"
        className="w-full mt-20 max-w-7xl mx-auto p-5 grid grid-cols-1 lg:grid-cols-2"
      >
        <div className="flex flex-col">
          <Image
            src="/images/imagen_sobre_nosotros.webp"
            width={500}
            height={450}
            fetchPriority="high"
            sizes="(max-width: 768px) 217px, 300px"
            alt="Equipo de Aurum Customs SAC gestionando operaciones aduaneras"
            className="w-xl h-auto rounded-4xl shadow-lg border-b-8 border-l-8 border-acento"
          ></Image>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-14px text-secundario  border-l-2 px-1  font-semibold">
            SOBRE NOSOTROS
          </h2>
          <h3 className="text-3px lg:text-36px font-extrabold  text-secundario leading-tight">
            Más que una agencia, somos tu socio estratégico en comercio exterior
          </h3>

          <p className="text-16px text-gris leading-relaxed">
            <strong className="text-secundario">Aurum Customs SAC</strong> es
            una agencia de aduanas en el Callao especializada en importación,
            exportación y comercio exterior. Brindamos agenciamiento de aduanas,
            asesoría estratégica y soluciones complementarias, garantizando
            cumplimiento SUNAT y operaciones seguras y eficientes.
          </p>

          {/* Beneficios */}
          <div className="space-y-4 mt-5">
            <div className="flex items-start gap-3">
              <Icon
                icon="lets-icons:check-fill"
                width="24"
                height="24"
                className="text-secundario"
              />
              <p className="text-gris">
                Cumplimiento normativo y prevención de riesgos
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Icon
                icon="lets-icons:check-fill"
                width="24"
                height="24"
                className="text-secundario"
              />
              <p className="text-gris">
                Optimización de tiempos y costos operativos
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Icon
                icon="lets-icons:check-fill"
                width="24"
                height="24"
                className="text-secundario"
              />
              <p className="text-gris">
                Acompañamiento estratégico personalizado
              </p>
            </div>
          </div>

          <Link
            href="/sobre-nosotros"
            aria-label="Conoce nuestros servicios de Aduanas"
            className="w-80 min-h-12 p-5 group   text-blanco text-14px bg-secundario mb-20 font-semibold uppercase hover:font-semibold mt-5 rounded-full flex justify-center gap-4 hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            Conoce más sobre nosotros
          </Link>
        </div>
      </section>
    )
}