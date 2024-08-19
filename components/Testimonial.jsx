export default function Testimonial() {
  return (
    <>
      <section className="py-16 bg-neutral text-neutral-content">
        <div className="container mx-auto text-center animate-slide-up">
          <h2 className="text-4xl font-bold mb-8 text-primary">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card shadow-lg p-6 bg-base-100 text-base-content transition transform hover:scale-105">
              <p className="mb-4">"Cardify has completely changed the way I study. It's so much easier to remember important concepts."</p>
              <h4 className="text-xl font-semibold">- Alex R.</h4>
            </div>
            <div className="card shadow-lg p-6 bg-base-100 text-base-content transition transform hover:scale-105">
              <p className="mb-4">"The smart review system is a game changer. I feel more confident heading into exams."</p>
              <h4 className="text-xl font-semibold">- Sarah P.</h4>
            </div>
            <div className="card shadow-lg p-6 bg-base-100 text-base-content transition transform hover:scale-105">
              <p className="mb-4">"I love the simplicity and effectiveness of Cardify. It's the best tool for exam prep."</p>
              <h4 className="text-xl font-semibold">- Michael W.</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
