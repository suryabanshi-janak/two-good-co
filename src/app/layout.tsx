import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const futura = localFont({
  src: '../../public/fonts/Futura-Bold.woff2',
  display: 'swap',
  variable: '--font-futura',
});

const helvetica = localFont({
  src: '../../public/fonts/HelveticaNowText-Regular.woff2',
  display: 'swap',
  variable: '--font-helvetica',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${futura.variable} ${helvetica.variable} font-futura`}>
        {children}
      </body>
    </html>
  );
}
