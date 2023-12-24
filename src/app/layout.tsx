import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import OuterContainer from '@/components/OuterContainer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chinh D. Le',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-platinum`}>
        <OuterContainer>
          {children}
        </OuterContainer>
        <Analytics />
      </body>
    </html>
  );
}
