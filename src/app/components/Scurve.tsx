import React from "react";
import { bebasNeue } from "./Hero";

function Scurve() {
  return (
    <div className="flex text-white shadow-lg rounded-lg max-w-5xl mx-auto pb-[6rem]">
      <div className="w-1/3">
        <img
          src="/gallery/director.jpg"
          alt="Hugo Kogan"
          className="rounded w-full"
        />
      </div>
      <div className="w-2/3 pl-6">
        <h2
          className={`text-3xl md:text-4xl font-bold mx-auto mb-8 ${bebasNeue.className}`}
        >
          Hugo Kogan - Director del Festival Iberoamericano de Teatro Mar del
          Plata "Cumbre de las Américas"
        </h2>
        <p className="mt-4">
          Hugo Kogan es un destacado director y gestor cultural argentino con
          más de 30 años de experiencia en las artes escénicas. Nacido en Buenos
          Aires, Kogan ha dirigido y producido numerosas obras aclamadas
          internacionalmente. Como director del Festival Iberoamericano de
          Teatro "Cumbre de las Américas", ha consolidado este evento como un
          referente en el teatro iberoamericano, promoviendo el intercambio
          cultural y la innovación artística. Reconocido por su visión
          estratégica y su liderazgo, Kogan también es un defensor de la
          educación artística, dedicando su carrera a impulsar nuevas
          generaciones de artistas.
        </p>
      </div>
    </div>
  );
}

export default Scurve;
