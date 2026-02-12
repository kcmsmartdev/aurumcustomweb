import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});


export default function NoFound(){
    return(
        <div className="w-full max-w-7xl mx-auto p-5 flex flex-col items-center justify-center mt-32">
            <div className="p-6 border-2 border-gris/50 mt-16">
                <h1 className={`${poppins.className} text-28px lg:text-32px text-negro font-extrabold`}>Error 404</h1>
                <p  className="text-16px text-gris ">Página no encontrada</p>
            </div>
            <button className="p-5 group underline  text-negro  mb-16 font-bold uppercase hover:font-semibold  mt-5 rounded-full flex justify-center gap-4 hover:scale-105 transition-transform duration-200 ease-in-out">
            <Link href="#" aria-label="Hablar con un asesor">
              Inicio    
            </Link>
            
          </button>
        </div>
    )
}