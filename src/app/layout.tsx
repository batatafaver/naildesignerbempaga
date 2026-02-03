import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Poppins } from 'next/font/google';
import { Pixel } from '@/components/Pixel';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Manicure - Bem Paga',
  description: 'Descubra como cobrar mais como Manicure, mesmo tendo medo de perder clientes, sem brigar por preço e sem depender de indicação.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${poppins.variable}`}>
      <body className="font-body antialiased">
        <Header />
        {children}
        <Footer />
        <Toaster />
        <Pixel />
      </body>
    </html>
  );
}
