import React from "react";

export default function Testimonial() {
  return (
    <section className="bg-base-100 text-neutral py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">What Our Users Say</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-lg text-neutral-content">"Cardify has transformed the way I study. It's super easy to use and very effective."</p>
            <h5 className="mt-4 text-xl font-bold text-secondary">- Jane Doe</h5>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-lg text-neutral-content">"The best flashcard app I've used! The design is sleek, and the features are perfect for any student."</p>
            <h5 className="mt-4 text-xl font-bold text-secondary">- John Smith</h5>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-lg text-neutral-content">"A game-changer for learning. The tracking feature helps me stay on top of my studies."</p>
            <h5 className="mt-4 text-xl font-bold text-secondary">- Alice Johnson</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
