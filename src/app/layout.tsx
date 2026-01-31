import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SalesNotification } from '@/components/SalesNotification';

export const metadata: Metadata = {
  title: 'Nail Designer - Bem Paga',
  description: 'Descubra como cobrar mais como manicure, mesmo tendo medo de perder clientes, sem brigar por preço e sem depender de indicação.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Header />
        {children}
        <Footer />
        <Toaster />
        <SalesNotification />
      </body>
    </html>
  );
}
