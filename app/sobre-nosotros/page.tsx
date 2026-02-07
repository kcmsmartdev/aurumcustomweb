import Image from "next/image"

export default function NosotrosPage(){
    return(
        <div>
            <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Imagen */}
        <div className="relative">
          <div className="relative w-full h-112.5 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/equipo-aduanas.jpg"
              alt="Equipo de Aurum Customs SAC gestionando operaciones aduaneras"
              fill
              className="object-cover"
            />
          </div>

          {/* Detalle decorativo */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-400 rounded-2xl -z-10"></div>
        </div>

        {/* Texto */}
        <div>
          <span className="text-cyan-600 font-semibold uppercase tracking-wide text-sm">
            Sobre Nosotros
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
            Más que una agencia, somos tu socio estratégico en comercio exterior
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            <strong>Aurum Customs SAC</strong> es una agencia de aduanas en el Callao 
            especializada en importación, exportación y agenciamiento de aduanas. 
            Brindamos asesoría y consultoría en comercio exterior, garantizando 
            cumplimiento normativo SUNAT y operaciones seguras.
          </p>

          {/* Beneficios */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 bg-cyan-500 rounded-full mt-1"></div>
              <p className="text-gray-700">Cumplimiento normativo y prevención de riesgos</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-4 h-4 bg-cyan-500 rounded-full mt-1"></div>
              <p className="text-gray-700">Optimización de tiempos y costos operativos</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-4 h-4 bg-cyan-500 rounded-full mt-1"></div>
              <p className="text-gray-700">Acompañamiento estratégico personalizado</p>
            </div>
          </div>

          <a
            href="/nosotros"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-medium transition shadow-md"
          >
            Conoce más sobre nosotros
          </a>
        </div>

      </div>
    </section>
        </div>
    )
}