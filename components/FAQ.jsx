import React from "react";

export default function FAQ() {
  return (
    <section className="p-10 bg-base-100 text-base-content">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <details className="group">
          <summary className="font-semibold bg-neutral text-neutral-content px-4 py-2 cursor-pointer">
            What is Cardify?
          </summary>
          <p className="text-base-content bg-neutral-content group-open:animate-fadeIn p-4">
            Cardify is an AI-powered flashcard app designed to make learning simple and effective.
          </p>
        </details>
        <details className="group">
          <summary className="font-semibold bg-neutral text-neutral-content px-4 py-2 cursor-pointer">
            How does Cardify use AI?
          </summary>
          <p className="text-base-content bg-neutral-content group-open:animate-fadeIn p-4">
            Cardify uses AI to personalize your learning experience by adapting to your progress and highlighting key areas for improvement.
          </p>
        </details>
        <details className="group">
          <summary className="font-semibold bg-neutral text-neutral-content px-4 py-2 cursor-pointer">
            Can I use Cardify for free?
          </summary>
          <p className="text-base-content bg-neutral-content group-open:animate-fadeIn p-4">
            Yes, Cardify offers a free tier with essential features. Premium plans are available for advanced functionalities.
          </p>
        </details>
        <details className="group">
          <summary className="font-semibold bg-neutral text-neutral-content px-4 py-2 cursor-pointer">
            Is Cardify available on mobile devices?
          </summary>
          <p className="text-base-content bg-neutral-content group-open:animate-fadeIn p-4">
            Yes, Cardify is available as a mobile app for both iOS and Android platforms.
          </p>
        </details>
        <details className="group">
          <summary className="font-semibold bg-neutral text-neutral-content px-4 py-2 cursor-pointer">
            How can I track my progress on Cardify?
          </summary>
          <p className="text-base-content bg-neutral-content group-open:animate-fadeIn p-4">
            Cardify provides detailed progress reports and analytics to help you track your learning journey.
          </p>
        </details>
        <details className="group">
          <summary className="font-semibold bg-neutral text-neutral-content px-4 py-2 cursor-pointer">
            Can I share my flashcards with others?
          </summary>
          <p className="text-base-content bg-neutral-content group-open:animate-fadeIn p-4">
            Yes, Cardify allows you to share your flashcards with friends or the community for collaborative learning.
          </p>
        </details>
      </div>
    </section>
  );
}
