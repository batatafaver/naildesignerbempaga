
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Pixel } from '@/components/Pixel';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const BelowTheFold = dynamic(() => import('@/components/BelowTheFold'), {
  loading: () => (
    <div className="w-full container space-y-8 py-16 lg:py-24">
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-96 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  ),
});


export default function Home() {
  const kellyImage = PlaceHolderImages.find(p => p.id === 'kelly-martins');

  return (
    <main className="flex flex-col items-center overflow-hidden">
      <Pixel />
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-background to-secondary py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative md:order-last flex justify-center">
                  {kellyImage && (
                      <div className="relative">
                          <Image
                              src={kellyImage.imageUrl}
                              alt={kellyImage.description}
                              width={400}
                              height={400}
                              className="w-48 h-48 md:w-96 md:h-96 rounded-full aspect-square object-cover object-center shadow-2xl mx-auto"
                              priority
                              data-ai-hint={kellyImage.imageHint}
                          />
                           <div className="absolute bottom-0 right-0 left-0 mx-auto w-fit bg-card/80 backdrop-blur-sm p-3 rounded-lg shadow-lg text-center">
                              <p className="font-bold text-card-foreground">Kelly Martins</p>
                              <p className="text-sm text-muted-foreground">Criadora do Método</p>
                          </div>
                      </div>
                  )}
              </div>
              <div className="text-center md:text-left">
                  <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
                      Você trabalha como Manicure, se dedica todos os dias… mas no fim do mês sente que ganha pouco demais por tudo o que faz
                  </h1>
                  <p className="mt-4 md:mt-6 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-foreground/80 font-headline">
                      Aprenda a cobrar mais como Manicure — <em>mesmo tendo medo de perder clientes</em> — <strong>sem brigar por preço</strong>, <strong>sem depender de indicação</strong> e <strong>sem se sentir culpada</strong>.
                  </p>
                  <Button asChild size="lg" className="mt-6 md:mt-8 group animate-pulse">
                      <Link href="#pricing">
                          MANICURE BEM PAGA <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                  </Button>
              </div>
          </div>
        </div>
      </section>

      <BelowTheFold />
    </main>
  );
}
