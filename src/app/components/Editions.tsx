"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { bebasNeue } from "./Hero";

type EditionType = {
  id: string;
  year: string;
  title: string;
  curatorialAxis: string;
  plays: string[];
  image: string;
};

const editions = [
  {
    id: "2003",
    year: "2003",
    title: "Encuentros Culturales",
    curatorialAxis: "La diversidad cultural iberoamericana",
    plays: [
      "El Quijote (España)",
      "Doña Bárbara (Venezuela)",
      "La Casa de los Siete Balcones (Argentina)",
      "La Celestina (España)",
      "El Tartufo (Chile)",
      "Pedro Páramo (México)",
      "Los Árboles Mueren de Pie (Uruguay)",
    ],
    image: "/gallery/festival (1).jpg",
  },
  {
    id: "2004",
    year: "2004",
    title: "Voces del Pasado",
    curatorialAxis: "Rescate de tradiciones y memoria histórica",
    plays: [
      "Los Árboles Mueren de Pie (Argentina)",
      "Pedro Páramo (México)",
      "Fuenteovejuna (España)",
      "La Dama Boba (Colombia)",
      "El Avaro (Chile)",
      "La Casa de Bernarda Alba (España)",
      "Bodas de Sangre (Venezuela)",
    ],
    image: "/gallery/festival (2).jpg",
  },
  {
    id: "2005",
    year: "2005",
    title: "Identidades Cruzadas",
    curatorialAxis: "El intercambio cultural en Iberoamérica",
    plays: [
      "La Casa de Bernarda Alba (España)",
      "Medea (Colombia)",
      "El Burlador de Sevilla (México)",
      "La Celestina (Argentina)",
      "El Oso (Cuba)",
      "Antígona (Chile)",
      "Don Juan Tenorio (Perú)",
    ],
    image: "/gallery/festival (3).jpg",
  },
  {
    id: "2006",
    year: "2006",
    title: "Nuevas Miradas",
    curatorialAxis: "Innovación y nuevas propuestas escénicas",
    plays: [
      "La Celestina (España)",
      "Macbeth (Chile)",
      "La Vida es Sueño (México)",
      "El Principio de Arquímedes (Argentina)",
      "Medea Material (Brasil)",
      "El Gran Teatro del Mundo (Venezuela)",
      "El Mercader de Venecia (Colombia)",
    ],
    image: "/gallery/festival (4).jpg",
  },
  {
    id: "2007",
    year: "2007",
    title: "Fronteras y Puentes",
    curatorialAxis: "Conexión entre culturas y lenguajes teatrales",
    plays: [
      "Bodas de Sangre (España)",
      "La Nona (Argentina)",
      "La Celestina (México)",
      "El Rey Lear (Chile)",
      "Las Criadas (Uruguay)",
      "Hamlet (Colombia)",
      "Esperando a Godot (Venezuela)",
    ],
    image: "/gallery/festival (5).jpg",
  },
  {
    id: "2008",
    year: "2008",
    title: "Teatro y Sociedad",
    curatorialAxis: "El rol del teatro en la transformación social",
    plays: [
      "El Coronel No Tiene Quien le Escriba (Colombia)",
      "La Muerte de un Viajante (Brasil)",
      "El Hombre Elefante (Argentina)",
      "La Vida es Sueño (España)",
      "El Tartufo (México)",
      "El Gesticulador (Venezuela)",
      "El Jardín de los Cerezos (Chile)",
    ],
    image: "/gallery/festival (6).jpg",
  },
  {
    id: "2009",
    year: "2009",
    title: "Tradición y Modernidad",
    curatorialAxis: "Confrontación entre lo antiguo y lo nuevo en el teatro",
    plays: [
      "Yerma (España)",
      "El Retablo de Maese Pedro (México)",
      "Fuenteovejuna (Colombia)",
      "El Burlador de Sevilla (Argentina)",
      "La Tempestad (Brasil)",
      "Antígona (Chile)",
      "Doña Rosita la Soltera (Venezuela)",
    ],
    image: "/gallery/festival (7).jpg",
  },
  {
    id: "2010",
    year: "2010",
    title: "Raíces del Presente",
    curatorialAxis:
      "Cómo las raíces culturales influyen en el teatro contemporáneo",
    plays: [
      "El Avaro (Francia/Argentina)",
      "La Tempestad (Perú)",
      "La Casa de Bernarda Alba (España)",
      "El Principio de Arquímedes (México)",
      "Las Criadas (Colombia)",
      "El Rey Lear (Brasil)",
      "Don Juan Tenorio (Uruguay)",
    ],
    image: "/gallery/festival (8).jpg",
  },
  {
    id: "2011",
    year: "2011",
    title: "Memoria y Olvido",
    curatorialAxis: "Teatro que explora la memoria histórica y la identidad",
    plays: [
      "Los Fantasmas de la Patria (Uruguay)",
      "La Casa de los Espíritus (Chile)",
      "El Coronel No Tiene Quien le Escriba (Colombia)",
      "El Quijote (España)",
      "Bodas de Sangre (México)",
      "La Muerte de un Viajante (Argentina)",
      "Yerma (Venezuela)",
    ],
    image: "/gallery/festival (9).jpg",
  },
];

const EditionsGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [controls, isInView]);

  const galleryContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const galleryItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="text-white py-[6rem] bg-neutral-900"
      id="editions-gallery"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className={`text-4xl md:text-5xl font-bold text-center mx-auto mb-5 ${bebasNeue.className}`}
        >
          Ediciones Anteriores
        </motion.h2>
        <p className="text-center text-lg mb-20 uppercase">
          Ejes curatoriales y obras participantes
        </p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4"
          variants={galleryContainer}
          initial="hidden"
          animate={controls}
        >
          {editions.map((edition) => (
            <motion.div
              key={edition.id}
              variants={galleryItem}
              className="relative overflow-hidden rounded-lg group"
            >
              <div className="relative w-full h-64">
                <Image
                  src={edition.image}
                  fill
                  objectFit="cover"
                  className="rounded-lg transition-transform duration-500 transform group-hover:scale-105"
                  alt={`Imagen de la edición ${edition.year}`}
                />
              </div>
              <div className="p-4 bg-neutral-800 rounded-b-lg">
                <h3 className="text-xl font-bold mb-2">
                  {edition.title} ({edition.year})
                </h3>
                <p className="italic mb-2">{edition.curatorialAxis}</p>
                <ul className="list-disc list-inside">
                  {edition.plays.map((play, index) => (
                    <li key={index}>{play}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EditionsGallery;
