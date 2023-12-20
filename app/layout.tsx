import './globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Yuasa Piano Studio',
  description:
    'Welcome to the Yuasa Piano Studio: Private piano instruction in the comfort and convenience of your own home. Serving areas in Queens, Brooklyn and Manhattan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
