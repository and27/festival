"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { bebasNeue } from "./Hero";
import { useEffect, useRef } from "react";

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [controls, isInView]);

  const objetivosFestival = [
    {
      titulo: "Fomentar el Intercambio Cultural",
      descripcion:
        "Crear un espacio donde se crucen las distintas culturas de América Latina, el Caribe, España y Portugal, promoviendo el diálogo entre los artistas y las audiencias.",
    },
    {
      titulo: "Impulsar la Innovación Artística",
      descripcion:
        "Estimular la creación de nuevas formas y lenguajes teatrales que reflejen las preocupaciones y aspiraciones contemporáneas de la sociedad iberoamericana.",
    },
    {
      titulo: "Promover la Diversidad y la Inclusión",
      descripcion:
        "Asegurar la representación de voces diversas en el festival, incluyendo a comunidades indígenas, afrodescendientes y otros grupos minoritarios, tanto en la audiencia como en el escenario.",
    },
    {
      titulo: "Fortalecer las Redes de Colaboración",
      descripcion:
        "Facilitar la cooperación entre festivales, teatros, compañías y artistas independientes, para consolidar un circuito escénico iberoamericano que trascienda fronteras nacionales.",
    },
    {
      titulo: "Estimular el Desarrollo Profesional",
      descripcion:
        "Ofrecer talleres, seminarios y encuentros que permitan a los participantes perfeccionar sus habilidades y expandir sus redes de contacto dentro del mundo teatral.",
    },
    {
      titulo: "Contribuir a la Transformación Social",
      descripcion:
        "Utilizar el teatro como herramienta para el cambio social, presentando obras que aborden temas de justicia social, derechos humanos y sostenibilidad, inspirando a las audiencias a reflexionar y actuar.",
    },
    {
      titulo: "Rescatar y Difundir el Patrimonio Cultural",
      descripcion:
        "Promover la recuperación y reinterpretación de las tradiciones escénicas autóctonas de los países participantes, asegurando que estas formas de expresión sigan vigentes y sean valoradas en el contexto contemporáneo.",
    },
  ];

  return (
    <section className="text-white py-[8rem]" id="gallery">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className={`text-4xl md:text-5xl font-bold text-center w-[20rem] mx-auto mb-8 ${bebasNeue.className}`}
        >
          Nuestra visión
        </motion.h2>
        <p className="mb-20">
          {`El Festival Iberoamericano de Teatro "Cumbre de las Américas" se
          propone como un espacio trascendental para la integración cultural y
          artística de las Américas y la Península Ibérica, creando un puente
          entre las diversas manifestaciones escénicas del continente. Su visión
          es consolidarse como un referente global en la promoción y difusión de
          las artes escénicas, destacando la riqueza y diversidad cultural de
          los pueblos iberoamericanos y fomentando el diálogo intercultural, la
          innovación artística y la transformación social a través del teatro.`}
        </p>
        <motion.h2
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className={`text-4xl md:text-5xl font-bold text-center w-[20rem] mx-auto mb-8 ${bebasNeue.className}`}
        >
          Nuestra misión
        </motion.h2>
        <p className="mb-20">
          {`El Festival tiene como misión impulsar el desarrollo y la proyección
          internacional del teatro iberoamericano, proporcionando una plataforma
          de encuentro y colaboración para artistas, creadores, y gestores
          culturales de la región. Busca promover el intercambio de
          conocimientos, técnicas y experiencias, además de fortalecer las redes
          de cooperación entre los países participantes. La "Cumbre de las
          Américas" se dedica a la difusión de propuestas escénicas que desafíen
          las fronteras convencionales del teatro, con un enfoque en la
          diversidad, la inclusión y el respeto a las tradiciones culturales. `}
        </p>
        <motion.h2
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className={`text-4xl md:text-5xl font-bold text-center w-[20rem] mx-auto mb-8 ${bebasNeue.className}`}
        >
          Nuestros objetivos
        </motion.h2>
        <ol className="list-decimal pl-8">
          {objetivosFestival.map((objetivo, index) => (
            <li key={index} className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{objetivo.titulo}</h3>
              <p>{objetivo.descripcion}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Mission;
