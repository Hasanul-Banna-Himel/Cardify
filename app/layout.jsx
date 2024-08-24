import './globals.css';

export const metadata = {
  title: 'Cardify - The Ultimate Flashcard App',
  description: 'The best app to create, manage, and study flashcards effectively.',
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body>{children}</body>
      </html>
  );
}

