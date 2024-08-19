'use client';

import { Box, Text, Button, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Flashcard = ({ word, definition, imageUrl, nextFlashcard }) => {
  return (
    <MotionBox
      bg="teal.500"
      borderRadius="15px"
      p="6"
      boxShadow="lg"
      textAlign="center"
      maxWidth="400px"
      minHeight="450px"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Image
        src={imageUrl}
        alt={word}
        boxSize="150px"
        objectFit="cover"
        mx="auto"
        mb="4"
        borderRadius="full"
      />
      <Text fontSize="3xl" fontWeight="bold" color="white">
        {word}
      </Text>
      <Text mt="4" fontSize="lg" color="whiteAlpha.800">
        {definition}
      </Text>
      <Button mt="6" colorScheme="teal" onClick={nextFlashcard}>
        Next Word
      </Button>
    </MotionBox>
  );
};

export default Flashcard;
