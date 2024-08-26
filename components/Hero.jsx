import React from "react";

export default function Hero({onButtonClick}) {
  return (
    <section
      className="hero min-h-screen bg-neutral text-neutral-content"
      style={{
        backgroundImage: "url('https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp')",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center animate-slideIn">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Cardify</h1>
          <p className="mb-5">
            Your ultimate tool for creating, organizing, and mastering flashcards. Start learning more efficiently today.
          </p>
          <button onClick={onButtonClick} className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
}
