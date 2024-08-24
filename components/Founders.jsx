import React from "react";

export default function Founders() {
  return (
    <section className="bg-base-100 text-accent py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">Meet Our Founders</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="card glass w-96 mx-auto transition-transform duration-500 transform hover:scale-105 hover:shadow-xl">
            <figure>
              <img
                src="obidur.png"
                alt="Obidur Rahman"
                className="transition-opacity duration-500 hover:opacity-80"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Obidur</h2>
              <p>Obidur Rahman is an expert in design and user experience.</p>
            </div>
          </div>

          <div className="card glass w-96 mx-auto transition-transform duration-500 transform hover:scale-105 hover:shadow-xl">
            <figure>
              <img
                src="himel.png"
                alt="Himel"
                className="transition-opacity duration-500 hover:opacity-80"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Himel</h2>
              <p>Himel specializes in software engineering and development.</p>
            </div>
          </div>

          <div className="card glass w-96 mx-auto transition-transform duration-500 transform hover:scale-105 hover:shadow-xl">
            <figure>
              <img
                src="fiona.png"
                alt="Mehreen"
                className="transition-opacity duration-500 hover:opacity-80"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Mehreen</h2>
              <p>Mehreen is passionate about marketing and business strategy.</p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
