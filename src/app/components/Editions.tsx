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
  {
    id: "2012",
    year: "2012",
    title: "Narrativas Emergentes",
    curatorialAxis: "Nuevas voces y perspectivas en el teatro iberoamericano",
    plays: [
      "El Principio de Arquímedes (España)",
      "Los Últimos Días (Argentina)",
      "El Burlador de Sevilla (México)",
      "La Vida es Sueño (Colombia)",
      "Las Troyanas (Chile)",
      "Hamlet (Brasil)",
      "Antígona (Uruguay)",
    ],
    image: "/gallery/festival (10).jpg",
  },
  {
    id: "2013",
    year: "2013",
    title: "Teatro y Realidad",
    curatorialAxis: "Obras que reflejan la realidad social y política",
    plays: [
      "El Diccionario (España)",
      "La Gaviota (Brasil)",
      "El Gesticulador (México)",
      "El Jardín de los Cerezos (Argentina)",
      "Doña Rosita la Soltera (Colombia)",
      "Esperando a Godot (Venezuela)",
      "Fuenteovejuna (Chile)",
    ],
    image: "/gallery/festival (11).jpg",
  },
  {
    id: "2014",
    year: "2014",
    title: "Voces Femeninas",
    curatorialAxis: "El papel de la mujer en la escena teatral",
    plays: [
      "Antígona (México)",
      "La Casa de Bernarda Alba (España)",
      "Yerma (Argentina)",
      "Medea (Colombia)",
      "Las Criadas (Chile)",
      "Bodas de Sangre (Uruguay)",
      "Doña Rosita la Soltera (Brasil)",
    ],
    image: "/gallery/festival (12).jpg",
  },
  {
    id: "2015",
    year: "2015",
    title: "Horizontes Compartidos",
    curatorialAxis: "Colaboración y coproducción entre países",
    plays: [
      "Ricardo III (Argentina/Chile)",
      "Otelo (España/Colombia)",
      "El Avaro (México)",
      "Hamlet (Brasil)",
      "Las Troyanas (Perú)",
      "El Quijote (Uruguay)",
      "La Celestina (Venezuela)",
    ],
    image: "/gallery/festival (13).jpg",
  },
  {
    id: "2016",
    year: "2016",
    title: "El Teatro como Espacio de Encuentro",
    curatorialAxis: "El teatro como lugar para el diálogo y la convivencia",
    plays: [
      "La Vida es Sueño (España)",
      "Crimen y Castigo (Argentina)",
      "Medea (Colombia)",
      "El Principio de Arquímedes (México)",
      "La Casa de Bernarda Alba (Chile)",
      "Antígona (Brasil)",
      "Hamlet (Uruguay)",
    ],
    image: "/gallery/festival (14).jpg",
  },
  {
    id: "2017",
    year: "2017",
    title: "La Escena Global",
    curatorialAxis: "Influencias globales en el teatro iberoamericano",
    plays: [
      "Hamlet (Brasil)",
      "Las Criadas (Uruguay)",
      "El Gesticulador (México)",
      "Moisés o de cómo me ahogué en el mar de mis deseos (Argentina)",
      "Oda a la miseria (Argentina)",
    ],
    image: "/gallery/festival (15).jpg",
  },
  {
    id: "2018",
    year: "2018",
    title: "Diálogos en Escena",
    curatorialAxis:
      "Intercambio de perspectivas y experiencias en la creación teatral",
    plays: [
      "La Tempestad (España)",
      "La Casa de Bernarda Alba (Argentina)",
      "El Burlador de Sevilla (México)",
      "Yerma (Colombia)",
      "Antígona (Chile)",
      "El Principio de Arquímedes (Brasil)",
      "Don Juan Tenorio (Uruguay)",
    ],
    image: "/gallery/festival (1).jpg",
  },
  {
    id: "2019",
    year: "2019",
    title: "La Memoria del Cuerpo",
    curatorialAxis:
      "La corporeidad como herramienta para narrar historias y construir memorias",
    plays: [
      "La Celestina (España)",
      "El Jardín de los Cerezos (Argentina)",
      "Medea (México)",
      "La Casa de los Espíritus (Chile)",
      "El Avaro (Brasil)",
      "Las Troyanas (Colombia)",
      "Doña Rosita la Soltera (Uruguay)",
    ],
    image: "/gallery/festival (2).jpg",
  },
  {
    id: "2020",
    year: "2020",
    title: "Resiliencia y Creación",
    curatorialAxis:
      "Resistencia y creatividad frente a las adversidades globales",
    plays: [
      "Bodas de Sangre (España)",
      "El Retablo de Maese Pedro (México)",
      "La Tempestad (Argentina)",
      "El Rey Lear (Chile)",
    ],
    image: "/gallery/festival (10).jpg",
  },
  {
    id: "2021",
    year: "2021",
    title: "Miradas Futuras",
    curatorialAxis: "El teatro como exploración de futuros posibles",
    plays: [
      "Ricardo III (España)",
      "El Hombre Elefante (Argentina)",
      "Las Criadas (México)",
      "Medea (Colombia)",
    ],
    image: "/gallery/festival (15).jpg",
  },
  {
    id: "2022",
    year: "2022",
    title: "Expresiones del Alma",
    curatorialAxis: "Teatro como vehículo de las emociones y la espiritualidad",
    plays: [
      "El Avaro (España)",
      "La Casa de Bernarda Alba (Argentina)",
      "El Principio de Arquímedes (México)",
      "El Jardín de los Cerezos (Colombia)",
      "La Vida es Sueño (Chile)",
      "Hamlet (Brasil)",
      "Don Juan Tenorio (Uruguay)",
    ],
    image: "/gallery/festival (16).jpg",
  },
  {
    id: "2023",
    year: "2023",
    title: "Horizontes Imaginados",
    curatorialAxis:
      "Exploración de utopías y realidades alternativas en la escena teatral",
    plays: [
      "Las Troyanas (España)",
      "El Quijote (Argentina)",
      "Bodas de Sangre (México)",
      "Medea (Colombia)",
      "El Rey Lear (Chile)",
      "Macbeth (Brasil)",
      "La Celestina (Uruguay)",
    ],
    image: "/gallery/festival (17).jpg",
  },
  {
    id: "2024",
    year: "2024",
    title: "Próximamente en Octubre (17 al 20)",
    curatorialAxis: "Nuevas dramaturgias y arte emergente",
    plays: [
      "Cómo hacer absolutamente infeliz a un hombre (Alicante, España)",
      "Hamlet Petates – El viaje de Rosencrantz (México)",
      "3er Cordón del Conurbano (Argentina)",
      "Ostinato (Argentina)",
      "Rifar el Corazón (Paysandú, Uruguay)",
      "La Edad del Sol (Ecuador)",
      "Cuestión de Principios (Argentina)",
      "Subte o las 0 horas (Chile)",
    ],
    image: "/gallery/festival (18).jpg",
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
