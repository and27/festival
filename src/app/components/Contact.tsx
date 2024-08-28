import React from "react";

function ContactSection() {
  return (
    <div className="bg-neutral-950 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold  mb-4">Contacto</h2>
        <p className="text-lg ">
          Para más información, no dudes en contactarnos:
        </p>
        <div className="mt-6">
          <p className="text-xl ">
            Email:{" "}
            <a href="mailto:soloteatromar@gmail.com" className="text-blue-500">
              soloteatromar@gmail.com
            </a>
          </p>
          <p className="text-xl  mt-2">
            Teléfono:{" "}
            <a href="tel:+5492235628551" className="text-blue-500">
              +54 9 223 562-8551
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
