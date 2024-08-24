'use client';

import { useState, useEffect } from 'react';

export default function Generate() {
    const [flashcards, setFlashcards] = useState([]);
    const [flipped, setFlipped] = useState({});
    const [text, setText] = useState('');

    const defaultFlashcards = [
        { front: 'What is a class in Java?', back: 'A class is a blueprint for creating objects.' },
        { front: 'What is inheritance in Java?', back: 'Inheritance allows a new class to inherit from an existing class.' },
        { front: 'What is polymorphism in Java?', back: 'Polymorphism lets objects be treated as instances of their parent class.' },
    ];

    useEffect(() => {
        setFlashcards(ensureEvenNumberOfFlashcards(defaultFlashcards));
    }, []);

    const ensureEvenNumberOfFlashcards = (cards) => {
        if (cards.length % 2 !== 0) {
            return [...cards, { front: '', back: '' }];
        }
        return cards;
    };

    const handleCardClick = (index) => {
        setFlipped(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const handleAddCard = () => {
        setFlashcards(prevCards => [
            ...prevCards,
            { front: 'New Card Front', back: 'New Card Back' }
        ]);
    };

    const handleRemoveCard = (index) => {
        setFlashcards(prevCards => prevCards.filter((_, i) => i !== index));
    };

    const handleSubmit = async () => {
        if (!text.trim()) return;

        const newCard = { front: text, back: 'Generated back content' };
        setFlashcards(prevCards => [...prevCards, newCard]);
        setText('');
    };

    return (
        <div className="min-h-screen bg-neutral text-neutral-content p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-center">Generate Flashcards</h1>
                <div className="bg-neutral-focus p-6 rounded-lg shadow-lg mb-8">
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text to generate a card..."
                        className="textarea textarea-bordered w-full mb-4 bg-neutral-content text-neutral p-4 rounded"
                    />
                    <button
                        onClick={handleSubmit}
                        className="btn btn-primary w-full mb-4"
                    >
                        Add Flashcard
                    </button>
                    <button
                        onClick={handleAddCard}
                        className="btn btn-secondary w-full mb-4"
                    >
                        Add Blank Flashcard
                    </button>
                </div>

                {flashcards.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {flashcards.map((flashcard, index) => (
                            <div key={index} className="relative">
                                <div
                                    className={`transform transition-transform duration-500 perspective cursor-pointer ${flipped[index] ? 'rotate-y-180' : ''
                                        }`}
                                    onClick={() => handleCardClick(index)}
                                >
                                    <div className="card-front bg-primary text-primary-content p-4 rounded-lg shadow-lg absolute w-full h-full backface-hidden">
                                        <h2 className="text-xl font-bold text-center">{flashcard.front}</h2>
                                    </div>
                                    <div className="card-back bg-secondary text-secondary-content p-4 rounded-lg shadow-lg absolute w-full h-full rotate-y-180 backface-hidden">
                                        <h2 className="text-xl font-bold text-center">{flashcard.back}</h2>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemoveCard(index)}
                                    className="btn btn-error absolute top-2 right-2"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <style jsx>{`
                .perspective {
                    perspective: 1000px;
                }

                .backface-hidden {
                    backface-visibility: hidden;
                }

                .rotate-y-180 {
                    transform: rotateY(180deg);
                }

                .card-front, .card-back {
                    width: 100%;
                    height: 250px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 1rem;
                    transition: all 0.6s ease-in-out;
                }

                .rotate-y-180 {
                    transition: transform 0.6s ease-in-out;
                }

                .card-front {
                    transform: rotateY(0deg);
                }

                .card-back {
                    transform: rotateY(180deg);
                }
            `}</style>
        </div>
    );
}
