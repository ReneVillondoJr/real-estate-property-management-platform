import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Real Estate Property Management Platform',
  description: 'Property management and real estate administration platform.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
