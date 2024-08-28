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

  return (
    <section className="text-white py-[8rem] px-4" id="gallery">
      <div className="max-w-3xl mx-auto" ref={ref}>
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
        <p className="mb-20 text-lg">
          {`Consolidarse como un referente global en la promoción y difusión de las artes escénicas, destacando la diversidad cultural de Iberoamérica y fomentando el diálogo intercultural, la innovación artística y la transformación social.`}
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
        <p className="mb-10 text-lg">
          {`Impulsar el desarrollo y proyección internacional del teatro iberoamericano, proporcionando una plataforma de encuentro y colaboración para artistas y creadores, promoviendo el intercambio de conocimientos, la diversidad y la inclusión en el escenario teatral.`}
        </p>
      </div>
    </section>
  );
};

export default Mission;
