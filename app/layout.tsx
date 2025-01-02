import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import { ClerkProvider } from '@clerk/nextjs';

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
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} antialiased`}>
          {/*HEADER*/}
          <Header />
          <main className='min-h-screen'>{children}</main>
          {/*FOOTER*/}
          <footer className='bg-blue-50 py-12'>
            <div className='container mx-auto px-4 text-center text-gray-600'>
              {/*CHANGE THIS*/}
              <p>Made with ♥ by M</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
