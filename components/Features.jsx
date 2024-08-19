import React from "react";

export default function Features() {
  return (
    <section className="bg-accent py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">Key Features</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="card bg-base-100 shadow-md hover:bg-primary hover:text-primary-content transition-colors">
            <div className="card-body">
              <h3 className="text-xl font-bold">Create Flashcards</h3>
              <p>
                Easily create flashcards with text, images, and custom formatting to make learning efficient.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md hover:bg-primary hover:text-primary-content transition-colors">
            <div className="card-body">
              <h3 className="text-xl font-bold">Organize Decks</h3>
              <p>
                Organize flashcards into decks by topic, subject, or category for easy retrieval and study.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md hover:bg-primary hover:text-primary-content transition-colors">
            <div className="card-body">
              <h3 className="text-xl font-bold">Track Progress</h3>
              <p>
                Track your learning progress and get insights into your strengths and weaknesses over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
