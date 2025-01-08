import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { RootLayout } from '@/components/layout/root-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KiwiQ Mission Control',
  description: 'AI-powered marketing intelligence platform',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  );
}