'use client';

import { useContext } from 'react';
import { Flex, Stack } from '@chakra-ui/react';
import Flashcard from './Flashcard';
import { FlashcardContext } from '../context/FlashcardContext';

const FlashcardList = () => {
  const { flashcards, currentIndex, nextFlashcard } = useContext(FlashcardContext);
  const { word, definition } = flashcards[currentIndex];

  return (
    <Flex justify="center" align="center" minHeight="100vh" bg="gray.100" p="6">
      <Stack spacing={4} align="center">
        <Flashcard word={word} definition={definition} nextFlashcard={nextFlashcard} />
      </Stack>
    </Flex>
  );
};

export default FlashcardList;
