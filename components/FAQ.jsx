export default function FAQ() {
    return (
      <section className="bg-info text-info-content p-10">
        <div className="container mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4">
              Here are some of the most common questions about our app.
            </p>
          </div>
          <div className="lg:w-1/2 space-y-4">
            <div className="collapse bg-base-200">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                What is Cardify?
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>Cardify is a flashcard app designed to help you learn faster and more efficiently by creating and managing custom flashcards.</p>
              </div>
            </div>
            <div className="collapse bg-base-200">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                How does Cardify work?
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>Simply create decks of flashcards, review them, and track your progress with our interactive and easy-to-use interface.</p>
              </div>
            </div>
            <div className="collapse bg-base-200">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Is Cardify free?
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>Yes, Cardify offers a free version with basic features, as well as premium plans for advanced users.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  