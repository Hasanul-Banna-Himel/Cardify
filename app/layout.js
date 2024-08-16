import { ChakraProvider } from '@chakra-ui/react';
import { FlashcardProvider } from '../context/FlashcardContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <FlashcardProvider>{children}</FlashcardProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
