import HeaderPc from "@/components/HeaderPc"
import Footer from "@/components/Footer"
import { Metadata } from "next"
import "./globals.css";
import HeaderMovil from "@/components/HeaderMovil";
import { Poppins } from "next/font/google";
import {Inter} from "next/font/google"



const poppins = Poppins({ 
    subsets: ['latin'],
    weight: ['400', '700'], 
    display:"swap" 
});

const inter = Inter({
  subsets:["latin"],
  weight:["400","500","700"],
  display:"swap",
})


export const metadata: Metadata ={
    title: "Agencia de Aduanas, Importación y Exportación en el Callao - Aurum Customs SAC",
    description: "Aurum Customs SAC, Agencia de aduanas en el Callao, especializada en agenciamiento de aduanas, asesoría y consultoría en comercio exterior, con servicios complementarios para importación y exportación seguras.",
    keywords: [
    "agencia",
    "aduanas",
    "callao",
    "perú",
    "importación",
    "exportación",
    "despacho",
    "aduanero",

  ],
  
  metadataBase: new URL("https://aurumcustoms.com"),
   alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Agencia de Aduanas, Importación y Exportación en el Callao - Aurum Customs SAC",
    description: "Aurum Customs SAC, Agencia de aduanas en el Callao, especializada en agenciamiento de aduanas, asesoría y consultoría en comercio exterior, con servicios complementarios para importación y exportación seguras.",
    url: "https://aurumcustoms.com",
    siteName: "Aurum Customs SAC",
    images: [
      {
        url: "/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Aurum Customs SAC",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

   twitter: {
    card: "summary_large_image",
    title: "Aurum Customs SAC",
    description: "Agencia de aduanas en el Callao, Perú.",
    images: ["/favicon.svg"],
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="es" >
      <body className={`${inter.className} w-full`}>
            <div>
              <div className="hidden lg:block">
                <HeaderPc />
              </div>
              <div className="block lg:hidden">
                <HeaderMovil />
              </div>
            </div>
            {children}  
            <Footer />    
        </body>
    </html>
  )
} 