export default function Hero() {
    return (
      <div
        className="hero min-h-screen bg-primary text-primary-content"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Cardify</h1>
            <p className="mb-5">
              Simplify your study sessions with custom flashcards. Learn faster,
              smarter, and more efficiently.
            </p>
            <button className="btn btn-accent">Get Started</button>
          </div>
        </div>
      </div>
    );
  }
  