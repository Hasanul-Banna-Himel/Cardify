import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import './globals.css';

export const metadata = {
  title: 'Cardify - The Ultimate Flashcard App',
  description: 'The best app to create, manage, and study flashcards effectively.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-base-100 text-base-content">
        {children}
      </body>
    </html>
  );
}
