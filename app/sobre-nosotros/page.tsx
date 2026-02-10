import { Icon } from "@iconify/react";
import Image from "next/image";
import { Poppins, Shadows_Into_Light_Two } from "next/font/google";
import Link from "next/link";
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

export default function NosotrosPage() {
  return (
    <div>
      <div className="bg-[url('/images/sobre-nosotros.webp')] relative bg-cover min-h-72 w-full mt-20">
        <div className="bg-negro opacity-50 w-full h-full absolute z-10 " />
        <div className="w-full max-w-7xl mx-auto p-3 relative z-20 flex flex-col justify-center">
          <div className="w-full h-full flex flex-col justify-center mt-20">
            <h2
              className={`${poppins.className} text-blanco text-32px font-medium`}
            >
              {" "}
              Sobre nosotros
            </h2>
            <div
              className={`${poppins.className} text-blanco text-18px font-medium flex gap-1.5`}
            >
              <Link href="/" aria-label="Visitar página de inicio">
                Inicio
              </Link>
              &gt;
              <p>Nosotros</p>
            </div>
          </div>
        </div>
      </div>

      {/*Sobre nosotros */}
      <section className=" w-full max-w-7xl mx-auto p-5 mt-20 text-negro">
        <div className="text-center flex justify-center">
          <h1
            className={`${shadow.className} container max-w-3xl  text-28px font-medium`}
          >
            "Como Operador de Comercio Exterior autorizado por la SUNAT,
            transformamos la complejidad de la aduana en una ventaja competitiva
            para tu negocio."
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-14px text-secundario  border-l-2 px-1  font-semibold">
              SOBRE NOSOTROS
            </h2>
            <h3 className="text-3px lg:text-36px font-extrabold  text-secundario leading-tight">
              Más que una agencia, somos tu socio estratégico en comercio
              exterior
            </h3>

            <p className="text-16px text-gris leading-relaxed">
              <strong className="text-secundario">En Aurum Customs SAC</strong>
              , somos una agencia de aduanas en el Callao que acompaña a
              empresas y emprendedores en sus procesos de importación y
              exportación. Ofrecemos agenciamiento de adanas, asesoría y
              consultoría en comercio exterior, gestionando cada operación con
              enfoque estratégico, precisión y cumplimiento normativo.
            </p>

            <p className="text-16px text-gris leading-relaxed">
              
              Creemos en el trato directo, el conocimiento técnico y la
              prevención de riesgos. Analizamos cada operación de forma
              detallada y brindamos servicios complementarios que optimizan
              tiempos, reducen contingencias ante SUNAT y permiten a nuestros
              clientes tomar decisiones seguras y eficientes en el comercio
              internacional.
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
              href="/contacto"
              aria-label="Conoce nuestros servicios de Aduanas"
              className="w-80 min-h-12 p-5 group   text-blanco text-14px bg-secundario mb-20 font-semibold uppercase hover:font-semibold mt-5 rounded-full flex justify-center gap-4 hover:scale-105 transition-transform duration-200 ease-in-out"
            >
              Contáctanos
            </Link>
          </div>

          <div className="flex flex-col ">
            <Image
              src="/images/imagen_sobre_nosotros.webp"
              width={500}
              height={450}
              fetchPriority="high"
              sizes="(max-width: 768px) 217px, 300px"
              alt="Equipo de Aurum Customs SAC gestionando operaciones aduaneras"
              className="w-xl h-auto rounded-4xl shadow-lg border-b-8 border-l-8 border-acento -scale-x-100"
            ></Image>
          </div>
        </div>
      </section>


       {/* Nuestros servicios */}
      <section
        aria-labelledby="sobre-servicios"
        className="w-full mt-20 max-w-7xl mx-auto p-5 flex flex-col items-center gap-4"
      >
        <h2 className="text-14px text-secundario border-l-2 px-1   font-semibold">
          NUESTROS SERVICIOS
        </h2>
        <h3 className="text-3px lg:text-36px font-extrabold  text-secundario leading-tight">
          Soluciones Integrales 360 en Agenciamiento de Aduanas
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

          
          <div className="bg-blanco rounded-2xl shadow-lg p-6 hover:shadow-2xl  hover:scale-105 transition-transform duration-300">
            <Link href="/servicios/agenciamiento-de-aduanas-especializado" className="flex flex-col items-center gap-4">
              <Icon
                icon="ic:round-local-shipping"
                width="48"
                height="48"
                className="text-secundario"
              />
              <h4 className="text-20px font-bold text-secundario">
                Agenciamiento de Aduanas Especializado
              </h4>
              <p className="text-gris text-center">
                Gestión integral de operaciones aduaneras para importación y
                exportación, asegurando cumplimiento normativo y eficiencia
                operativa.
              </p>
            </Link>
          </div>
          <div  className="bg-blanco rounded-2xl shadow-lg p-6 hover:shadow-2xl  hover:scale-105 transition-transform duration-300">
            <Link href="/servicios/especializado-asesoria-y-consultoria-en-comercio-exterior" className="flex flex-col items-center gap-4 text-center" >
                <Icon
                icon="ic:round-assessment"
                width="48"
                height="48"
                className="text-secundario"
              />
              <h4 className="text-20px font-bold text-secundario">
                Especializado Asesoría y Consultoría en Comercio Exterior
              </h4>
              <p className="text-gris text-center">
                Asesoría estratégica personalizada en comercio exterior,
                optimizando operaciones y garantizando cumplimiento normativo.
              </p>
            </Link>
          </div>
          <div className="bg-blanco rounded-2xl shadow-lg p-6 hover:shadow-2xl  hover:scale-105 transition-transform duration-300">
            <Link href="/servicios/servicios-complementarios-a-su-disposicion" className="flex flex-col items-center gap-4">
              <Icon
              icon="ic:round-handshake"
              width="48"
              height="48"
              className="text-secundario"
            />
            <h4 className="text-20px font-bold text-secundario">
              Servicios complementarios a sudisposición
            </h4>
            <p className="text-gris text-center">
              Servicios complementarios en comercio exterior, incluyendo
              capacitación, auditorías y consultoría para optimizar operaciones.
            </p>
            </Link>
          </div>
        </div>
      </section>


       {/* Contacto*/}
      
            <section
              aria-labelledby="contacto"
              className="w-full mt-20 max-w-7xl mx-auto p-5 grid grid-cols-1 lg:grid-cols-2 items-center gap-10"
            >
              <div>
                <h2 className="text-14px text-secundario border-l-2 px-1   font-semibold">
                  CONTACTO
                </h2>
                <h3 className="text-3px lg:text-36px mt-4 font-extrabold   text-secundario leading-tight">
                  Contáctanos para una cotización personalizada
                </h3>
                <p className="text-16px text-gris leading-relaxed mt-5">
                  ¿Listo para optimizar tus operaciones de comercio exterior?
                  Contáctanos hoy mismo para una cotización personalizada y descubre
                  cómo podemos ayudarte a alcanzar el éxito en tus operaciones
                  aduaneras.
                </p>
                <div className="mt-5">
                  <iframe
                  title="Mapa de ubicación Aurum Customs SAC"
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7804.6045198006705!2d-77.10518600000002!3d-12.0227!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDAxJzIxLjciUyA3N8KwMDYnMTguNyJX!5e0!3m2!1ses-419!2spe!4v1770673467375!5m2!1ses-419!2spe"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="rounded-4xl"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
                </div>
              </div>
              <div>
                <Formulario />
              </div>
            </section>
    </div>
  );
}
