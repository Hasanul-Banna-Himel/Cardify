// components/FAQ.jsx
export default function FAQ() {
  return (
    <section className="bg-base-200 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="w-full md:w-3/4 space-y-4">
            <div className="bg-base-100 collapse">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                What is Cardify?
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>Cardify is an advanced flashcard app designed to help you learn and memorize information effectively.</p>
              </div>
            </div>
            <div className="bg-base-100 collapse">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                How do I create a flashcard?
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>You can create flashcards by using the 'Create New Card' button on your dashboard and filling out the details.</p>
              </div>
            </div>
            {/* Add more FAQs as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}
