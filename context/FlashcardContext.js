'use client';

import { createContext, useState } from 'react';

// List of flashcards with images
const flashcards = [
  { word: 'Skibidi', definition: 'A meme-based dance popularized on social media.', imageUrl: '/images/skibidi.jpg' },
  { word: 'Fanum Tax', definition: 'A viral term used to jokingly refer to money given to someone for no clear reason.', imageUrl: '/images/fanumtax.jpg' },
  { word: 'Ohio', definition: 'A humorous reference to weird or chaotic things happening in Ohio.', imageUrl: '/images/ohio.jpg' },
  { word: 'Rizz', definition: 'Slang for someone’s ability to attract others, particularly romantically.', imageUrl: '/images/rizz.jpg' },
  { word: 'Sus', definition: 'Short for "suspicious" or "suspect."', imageUrl: '/images/sus.jpg' },
  { word: 'Yeet', definition: 'To throw something with force or excitement.', imageUrl: '/images/yeet.jpg' },
  { word: 'Drip', definition: 'A cool or fashionable style, particularly in clothing.', imageUrl: '/images/drip.jpg' },
  { word: 'No Cap', definition: 'Used to emphasize that someone is telling the truth.', imageUrl: '/images/nocap.jpg' },
  { word: 'Boujee', definition: 'Someone or something that is luxurious or high-end.', imageUrl: '/images/boujee.jpg' },
  { word: 'Hits Different', definition: 'Something that feels special or unique.', imageUrl: '/images/hitsdifferent.jpg' },
  { word: 'Cheugy', definition: 'Used to describe someone who is out of date or trying too hard.', imageUrl: '/images/cheugy.jpg' },
  { word: 'Slaps', definition: 'Refers to something that is really good or enjoyable, particularly music.', imageUrl: '/images/slaps.jpg' },
  { word: 'Snack', definition: 'A person who looks attractive.', imageUrl: '/images/snack.jpg' },
  { word: 'Ghosting', definition: 'Suddenly cutting off communication without explanation.', imageUrl: '/images/ghosting.jpg' },
  { word: 'Periodt', definition: 'An exaggerated way to end a statement for emphasis.', imageUrl: '/images/periodt.jpg' },
  { word: 'Glowed Up', definition: 'A significant transformation for the better, usually in appearance.', imageUrl: '/images/glowup.jpg' },
  { word: 'Bet', definition: 'Used to confirm something, meaning "OK" or "sure."', imageUrl: '/images/bet.jpg' },
  { word: 'Salty', definition: 'Feeling bitter or upset over something minor.', imageUrl: '/images/salty.jpg' },
  { word: 'Karen', definition: 'Refers to an entitled person who demands things beyond the norm.', imageUrl: '/images/karen.jpg' },
  { word: 'Vibe Check', definition: 'A check to see if someone has good energy or attitude.', imageUrl: '/images/vibecheck.jpg' },
];

export const FlashcardContext = createContext();

export const FlashcardProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFlashcard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <FlashcardContext.Provider value={{ flashcards, currentIndex, nextFlashcard }}>
      {children}
    </FlashcardContext.Provider>
  );
};
