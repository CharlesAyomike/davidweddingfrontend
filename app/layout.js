import { Toaster } from "react-hot-toast";
import "./globals.css";

import { Raleway, Dancing_Script } from 'next/font/google';

// Load fonts and assign CSS variables
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-raleway', // Set a CSS variable
});

const dancing_script = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-dancing_script',
});

 

export const metadata = {
  title: "Goodness wed David",
  description: "Celebration of love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable} ${dancing_script.variable} antialiased`}>
      <body className="font-raleway text-sm">
      <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
