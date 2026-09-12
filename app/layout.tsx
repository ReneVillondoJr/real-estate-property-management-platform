import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Morrow & Co. | Real estate, thoughtfully managed',
  description:
    'A considered collection of homes, spaces, and the people who care for them.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
