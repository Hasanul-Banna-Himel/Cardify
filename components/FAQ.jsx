import React from "react";

export default function FAQ() {
  return (
    <section className="bg-neutral text-neutral-content py-10">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Column for FAQ Title */}
        <div className="md:w-1/3 flex flex-col justify-center items-center text-center md:text-left md:items-start mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>

        {/* Right Column for FAQ Items */}
        <div className="md:w-2/3 space-y-4">
          <div className="bg-base-200 collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-black transition-colors">
              What is Cardify?
            </div>
            <div className="collapse-content bg-accent text-black peer-checked:bg-accent peer-checked:text-black transition-colors animate-fadeIn">
              <p>Cardify is a tool designed to help users create, organize, and study flashcards for efficient learning.</p>
            </div>
          </div>
          <div className="bg-base-200 collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-black transition-colors">
              How do I create a flashcard?
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-black transition-colors animate-fadeIn">
              <p>Simply click the &apos;Create&apos; button, fill out the information, and save your flashcard to a deck.</p>
            </div>
          </div>
          <div className="bg-base-200 collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-black transition-colors">
              Can I import flashcards from other platforms?
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-black transition-colors animate-fadeIn">
              <p>Yes, you can import flashcards from CSV files to easily transfer your existing decks.</p>
            </div>
          </div>
          <div className="bg-base-200 collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-black transition-colors">
              Is there a mobile app for Cardify?
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-black transition-colors animate-fadeIn">
              <p>Currently, Cardify is available as a web application, but we are working on a mobile app for future release.</p>
            </div>
          </div>
          {/* Add more FAQs here */}
        </div>
      </div>
    </section>
  );
}
