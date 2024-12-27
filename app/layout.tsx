import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Welth',
  description: 'One Stop Finance Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        {/*HEADER*/}
        {children}
        {/*FOOTER*/}
        <footer className='bg-blue-50 py-12'>
          <div className='container mx-auto px-4 text-center text-gray-600'>
            {/*CHANGE THIS*/}
            <p>Made with ♥ by M</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
