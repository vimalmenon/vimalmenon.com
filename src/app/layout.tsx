import './globals.css';
import { ReactElement } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ReactChildren } from '@types';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vimal Menon',
  description: 'This is Personal Website for Vimal Menon',
};

export default function RootLayout({ children }: ReactChildren): ReactElement {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
