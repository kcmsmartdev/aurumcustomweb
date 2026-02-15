import Formulario from "@/components/Formulario";
import Slider from "@/components/Slider";
import { Icon } from "@iconify/react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
export default function IndexPage() {
  return (
    <div>
      <Slider />

      {/* Sobre Nosotros */}
      <section
        aria-labelledby="sobre-nosotros"
        className="w-full mt-20 max-w-7xl mx-auto p-5 grid grid-cols-1 lg:grid-cols-2"
      >
        <div className="flex flex-col mt-10">
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
          <h3 className={`${poppins.className} text-28px lg:text-36px font-extrabold  text-secundario leading-tight`}>
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

      {/* Nuestros servicios */}
      <section
        aria-labelledby="sobre-servicios"
        className="w-full mt-20 max-w-7xl mx-auto p-5 flex flex-col items-center gap-4 bg-grisClaro py-12 rounded-4xl "
      >
        <h2 className="text-14px text-secundario border-l-2 px-1   font-semibold">
          NUESTROS SERVICIOS
        </h2>
        <h3 className={`${poppins.className} text-28px lg:text-36px font-extrabold  text-secundario leading-tight`}>
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
        className="w-full mt-32 max-w-7xl mx-auto p-5 grid grid-cols-1 lg:grid-cols-2 items-center gap-10"
      >
        <div>
          <h2 className="text-14px text-secundario border-l-2 px-1   font-semibold">
            CONTACTO
          </h2>
          <h3 className={`${poppins.className} text-28px lg:text-36px font-extrabold  text-secundario leading-tight`}>
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
  );
}
