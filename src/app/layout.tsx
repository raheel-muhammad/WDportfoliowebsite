import { Raleway } from "next/font/google";
import './globals.css';
import { Metadata } from 'next';


const raleway = Raleway({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: 'WD Official-Website',
  icons: {
    icon: '/wdLogo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
