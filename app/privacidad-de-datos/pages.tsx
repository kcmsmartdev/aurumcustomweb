import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function privacidadDatos(){
    return(
         <div className="w-full max-w-7xl mx-auto p-5 mt-32 ">
      <h1
        className={`${poppins.className}text-negro text-28px lg:text-32px font-bold`}
      >
        Política de Cookies
      </h1>

      <div className="container max-w-2xl space-y-5  ">
        <p className="text-16px text-gris">
          En <strong>Aurum Customs Sac</strong>, utilizamos cookies y tecnologías similares para
          mejorar la experiencia de navegación de nuestros usuarios, analizar el
          uso del sitio web y optimizar nuestros servicios. Al continuar
          navegando en este sitio, usted acepta el uso de cookies de acuerdo con
          la presente Política.
        </p>

        <h2
          className={`${poppins.className}text-negro text-18pxpx lg:text-24px font-bold`}
        >
          ¿Qué son las cookies?
        </h2>

        <p className="text-16px text-gris">
          Las cookies son pequeños archivos de texto que se almacenan en su
          dispositivo cuando visita un sitio web. Estas permiten reconocer su
          navegador, recordar preferencias y recopilar información sobre la
          interacción con el sitio.
        </p>

        <h2
          className={`${poppins.className}text-negro text-18pxpx lg:text-24px font-bold`}
        >
          Gestión de cookies
        </h2>

        <p className="text-16px text-gris">
          El usuario puede configurar su navegador para aceptar, rechazar o eliminar las cookies en cualquier momento. Tenga en cuenta que la desactivación de algunas cookies puede afectar el correcto funcionamiento del sitio web.
        </p>


        <h2
          className={`${poppins.className}text-negro text-18pxpx lg:text-24px font-bold`}
        >
          Cookies de terceros
        </h2>

        <p className="text-16px text-gris">
          En algunos casos, podemos utilizar cookies de terceros, como herramientas de análisis, que recopilan información de forma anónima y con fines estadísticos.
        </p>

         <h2
          className={`${poppins.className}text-negro text-18pxpx lg:text-24px font-bold`}
        >
          Cookies de terceros
        </h2>

        <p className="text-16px text-gris">
          <strong>Aurum Customs Sac</strong>, se reserva el derecho de modificar la presente Política de Cookies en cualquier momento, de acuerdo con cambios normativos o técnicos. Las actualizaciones serán publicadas en esta misma sección.
        </p>

        <h2
          className={`${poppins.className}text-negro text-18pxpx lg:text-24px font-bold`}
        >
          Contacto
        </h2>

        <p className="text-16px text-gris">
          Si tiene dudas sobre nuestra Política de Cookies, puede contactarnos a través de los medios disponibles en nuestro sitio web.
        </p>
      </div>
    </div>
    )
}