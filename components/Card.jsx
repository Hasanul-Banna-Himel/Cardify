'use client';
import React, { useState } from 'react';
import { FlashCard } from 'react-flashcards';

export default function FlashcardGenerator() {
  const [flashcards, setFlashcards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAddCard = () => {
    if (question && answer) {
      setFlashcards([...flashcards, { front: question, back: answer }]);
      setQuestion('');
      setAnswer('');
    }
  };

  const handleRemoveCard = (indexToRemove) => {
    setFlashcards(flashcards.filter((_, index) => index !== indexToRemove));
  };

  return (
    <section className="p-10 bg-base-100 text-base-content min-h-screen">
      <h2 className="text-3xl font-bold text-center text-neutral-content mb-8">Flashcard Generator</h2>

      {/* Input Section */}
      <div className="w-full max-w-lg p-6 bg-neutral rounded-lg shadow-xl mx-auto mb-6">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter the question"
          className="input input-bordered input-primary w-full mb-4"
        />
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter the answer"
          className="input input-bordered input-primary w-full mb-4"
        />
        <button onClick={handleAddCard} className="btn btn-primary w-full">
          Add Card
        </button>
      </div>

      {/* Flashcards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {flashcards.map((flashcard, index) => (
          <div
            key={index}
            className="relative"
          >
            <FlashCard
              front={
                <div className="w-full h-64 flex items-center justify-center bg-gradient-to-r from-primary to-blue-500 text-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold">{flashcard.front}</h3>
                </div>
              }
              back={
                <div className="w-full h-64 flex items-center justify-center bg-gradient-to-r from-secondary to-purple-500 text-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold">{flashcard.back}</h3>
                </div>
              }
              width="100%"
              height="100%"
              className="transition-transform duration-500"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveCard(index);
              }}
              className="btn btn-error w-full mt-4 hover:scale-105 transition-transform duration-300"
            >
              Remove Card
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
