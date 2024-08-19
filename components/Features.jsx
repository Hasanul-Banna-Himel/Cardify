export default function Feature() {
    return (
        <>
            <section className="py-16 bg-base-100">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-primary">Why Choose Cardify?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card shadow-lg p-6 bg-secondary text-secondary-content transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Custom Flashcards</h3>
              <p>Create personalized flashcards for any subject with ease. Tailor your learning to suit your needs.</p>
            </div>
            <div className="card shadow-lg p-6 bg-accent text-accent-content transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Smart Reviews</h3>
              <p>Cardify's AI-powered review system helps you remember better by intelligently scheduling reviews.</p>
            </div>
            <div className="card shadow-lg p-6 bg-info text-info-content transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Track Your Progress</h3>
              <p>Monitor your progress with detailed analytics and see how far you've come with your learning.</p>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}
