import { Poppins, Shadows_Into_Light_Two,  } from "next/font/google";
import Link from "next/link";

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
      <div className="bg-[url('/images/sobre-nosotros.webp')] relative bg-cover min-h-72 w-full mt-20">
        <div className="bg-negro opacity-50 w-full h-full absolute z-10 " />
        <div className="w-full max-w-7xl mx-auto p-3 relative z-20 flex flex-col justify-center">
          <div className="w-full h-full flex flex-col justify-center mt-20">
            <h2
              className={`${poppins.className} text-blanco text-32px font-medium`}
            >
              Agenciamiento de aduanas especializado
            </h2>
            <div
              className={`${poppins.className} text-blanco text-18px font-medium flex gap-1.5`}
            >
              <Link href="/" aria-label="Visitar página de inicio">
                Inicio
              </Link>
              &gt;
              <p>Agenciamiento de aduanas especializado</p>
            </div>
          </div>
        </div>
      </div>
    
    <section className="w-full max-w-7xl mx-auto mt-24 flex flex-col items-center">
        <div className="text-center flex justify-center">
          <h1
            className={`${shadow.className} container max-w-3xl  text-28px font-medium`}
          >
            "Diseñamos una oferta de servicios completa para cubrir todas tus necesidades logísticas y aduaneras."
          </h1>
        </div>

        
    </section>

    </div>
  );
}
