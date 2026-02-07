import Slider from "@/components/Slider";
import { Poppins } from "next/font/google";
import Image from "next/image";

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
      <section aria-labelledby="sobre-nosotros" className="w-full max-w-7xl mx-auto p-3 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col">
          <Image
            src="/images/imagen_sobre_nosotros.webp"
            width={500}
            height={450}
            alt="Equipo de Aurum Customs SAC gestionando operaciones aduaneras"
            
            className="w-xl h-auto rounded-md"
          ></Image>
        </div>

        <div>
          <h2>Sobre Nostros</h2>
          <h3>
            Más que una agencia, somos tu socio estratégico en comercio exterior
          </h3>

          <p>
            Aurum Customs SAC es una agencia de aduanas en el Callao
            especializada en importación, exportación y comercio exterior.
            Brindamos agenciamiento de aduanas, asesoría estratégica y
            soluciones complementarias, garantizando cumplimiento SUNAT y
            operaciones seguras y eficientes.
          </p>
        </div>
      </section>
    </div>
  );
}
