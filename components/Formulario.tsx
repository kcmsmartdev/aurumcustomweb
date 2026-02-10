"use client"
import { useState } from "react";

export default function Formulario() {
     const [estado, setEstado] = useState("idle"); 
    
     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEstado("enviando");

    try {
      const res = await fetch("/enviar-contacto.php", {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
      });

      const data = await res.json();

      if (data.success) {
        setEstado("exito");
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error();
      }
    } catch {
      setEstado("error");
    }

    setTimeout(() => {
      setEstado("idle");
    }, 3000);
  };
  



  return (
    <form
      id="contactForm"
      method="POST"
      className="mx-auto flex flex-col gap-5 font-montserrat font-medium text-negro mt-5"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="nombre">Nombre completo</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingresa tu nombre"
          required
          className="w-full px-4 py-3 border border-negroClaro rounded-xl focus:outline-none focus:ring-2 focus:ring-acento"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="correo">Correo electrónico</label>
        <input
          type="email"
          id="correo"
          name="email"
          placeholder="correo@ejemplo.com"
          required
          className="w-full px-4 py-3 border border-negroClaro rounded-xl focus:outline-none focus:ring-2 focus:ring-acento"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="telefono">Teléfono</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="+51 999 999 999"
          required
          className="w-full px-4 py-3 border border-negroClaro rounded-xl focus:outline-none focus:ring-2 focus:ring-acento"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          placeholder="Escribe tu mensaje aquí..."
          required
          className="w-full px-4 py-3 border border-negroClaro rounded-xl 
                      text-base leading-normal align-top resize-none
                      focus:outline-none focus:ring-2 focus:ring-acento"
        ></textarea>
      </div>
      <label className="flex items-center gap-2 text-sm mt-2">
        <input type="checkbox" required />
        <>
          He leído y acepto la{" "}
          <a
            href="/politica-de-privacidad-de-datos"
            className="text-negro font-bold hover:text-primario"
          >
            política de protección de datos personales
          </a>
        </>
      </label>
      <button
        type="submit"
        disabled={estado === "enviando"}
        className={`font-bold py-4 rounded-full  hover:scale-105 transition-transform duration-200 ease-in-out
        ${
            estado === "idle"
            ? "bg-acento text-negro hover:bg-secundario hover:text-blanco"
            : estado === "enviando"
            ? "bg-gray-400 text-white"
            : estado === "exito"
            ? "bg-green-600 text-white"
            : "bg-red-600 text-white"
        }`}
        >
        {estado === "idle" && "Enviar mensaje"}
        {estado === "enviando" && "Enviando..."}
        {estado === "exito" && "Mensaje enviado ✓"}
        {estado === "error" && "Error al enviar ✕"}
    </button>

    </form>
  );
}
