import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Gift, MessageSquare, ShieldCheck, TrendingUp, Wallet, XCircle, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { NailPolish } from '@/components/icons';

const CheckListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
    <span className="flex-1">{children}</span>
  </li>
);

const XListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <XCircle className="w-5 h-5 text-muted-foreground mt-1 shrink-0" />
    <span className="flex-1">{children}</span>
  </li>
);


export default function Home() {
  const guideImage = PlaceHolderImages.find(p => p.id === 'guide-cover');

  return (
    <main className="flex flex-col items-center overflow-hidden">
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-background to-secondary py-20 sm:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            Trabalhe como manicure e pare de ganhar pouco pelo esforço que você faz
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 font-headline">
            Descubra como cobrar mais como manicure, mesmo tendo medo de perder clientes, sem brigar por preço e sem depender de indicação.
          </p>
          <Button asChild size="lg" className="mt-8 group animate-pulse">
            <Link href="#pricing">
              Quero ser uma manicure bem paga <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Identification Block */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-center mb-8">Se você é manicure e sente que:</h2>
              <ul className="space-y-4 text-lg text-foreground/90">
                <CheckListItem>Trabalha muito e o dinheiro nunca sobra</CheckListItem>
                <CheckListItem>Cobra menos do que deveria</CheckListItem>
                <CheckListItem>Aceita cliente que não respeita seu horário</CheckListItem>
                <CheckListItem>Fica desconfortável quando precisa falar de preço</CheckListItem>
                <CheckListItem>Tem medo de reajustar e perder clientes</CheckListItem>
              </ul>
              <p className="mt-8 text-center font-bold text-lg text-primary">... então esse material é pra você.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="w-full py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">O Problema Real (sem romantizar)</h2>
          <p className="mt-6 text-lg md:text-xl">
            A maioria das manicures não ganha pouco porque trabalha mal. Ganha pouco porque:
          </p>
          <div className="mt-8 space-y-4 text-left mx-auto max-w-md">
            <p className="flex items-center gap-3"><XCircle className="text-destructive w-6 h-6 shrink-0"/> Não sabe se posicionar</p>
            <p className="flex items-center gap-3"><XCircle className="text-destructive w-6 h-6 shrink-0"/> Não tem regras claras</p>
            <p className="flex items-center gap-3"><XCircle className="text-destructive w-6 h-6 shrink-0"/> Não sabe como falar de preço</p>
            <p className="flex items-center gap-3"><XCircle className="text-destructive w-6 h-6 shrink-0"/> Aceita tudo por medo de ficar sem cliente</p>
          </div>
          <div className="mt-8 bg-card p-6 rounded-lg shadow-md inline-block">
            <p className="text-xl font-bold">Resultado? 👉 Agenda cheia, corpo cansado, bolso vazio.</p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            {guideImage && (
              <Image
                src={guideImage.imageUrl}
                alt={guideImage.description}
                width={400}
                height={500}
                data-ai-hint={guideImage.imageHint}
                className="rounded-lg shadow-2xl mx-auto"
              />
            )}
          </div>
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary">Manicure Bem Paga</h2>
            <p className="mt-4 text-lg md:text-xl">
              Um guia prático que te mostra como se posicionar, cobrar melhor e ser respeitada, sem precisar virar influencer e sem depender de sorte.
            </p>
            <p className="mt-4 text-lg font-semibold">Nada técnico. Nada complicado. Só o que funciona na vida real.</p>
             <Button asChild size="lg" className="mt-8 group">
              <Link href="#pricing">
                Ver Preço e Garantia <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="w-full py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Com o Manicure Bem Paga, você vai aprender:</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg"><Wallet className="w-6 h-6 text-primary" /></div>
              <div>
                <h3 className="font-bold text-lg">Definir um preço justo</h3>
                <p className="text-foreground/80">Sem copiar o valor da concorrência e com confiança.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg"><Sparkles className="w-6 h-6 text-primary" /></div>
              <div>
                <h3 className="font-bold text-lg">Parar de se sentir culpada</h3>
                <p className="text-foreground/80">Entenda o valor do seu trabalho e cobre sem culpa.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg"><MessageSquare className="w-6 h-6 text-primary" /></div>
              <div>
                <h3 className="font-bold text-lg">Responder ao "tá caro"</h3>
                <p className="text-foreground/80">Técnicas e mensagens prontas para contornar objeções.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg"><TrendingUp className="w-6 h-6 text-primary" /></div>
              <div>
                <h3 className="font-bold text-lg">Anunciar reajuste</h3>
                <p className="text-foreground/80">A forma correta de comunicar aumentos sem criar conflito.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg"><BookOpen className="w-6 h-6 text-primary" /></div>
              <div>
                <h3 className="font-bold text-lg">Criar regras simples</h3>
                <p className="text-foreground/80">Para filtrar clientes-problema e ter mais tranquilidade.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg"><NailPolish className="w-6 h-6 text-primary" /></div>
              <div>
                <h3 className="font-bold text-lg">Ganhar mais, trabalhando menos</h3>
                <p className="text-foreground/80">Otimize sua agenda e sua precificação para ser mais lucrativa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">O que tem dentro do material</h2>
          <Card>
            <CardContent className="p-8 grid sm:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <CheckListItem>Guia digital em PDF (leitura rápida)</CheckListItem>
                <CheckListItem>Checklists simples e práticos</CheckListItem>
                <CheckListItem>Mensagens prontas para WhatsApp</CheckListItem>
                <CheckListItem>Linguagem fácil, sem termos difíceis</CheckListItem>
              </ul>
              <div className="text-center bg-secondary p-6 rounded-lg">
                <p className="font-bold text-lg">Pode ser consumido em 1 a 2 horas</p>
                <p className="text-primary font-semibold text-xl mt-2">Aplicação imediata!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="w-full py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-accent text-accent-foreground shadow-2xl relative overflow-hidden">
             <div className="absolute -top-8 -right-8 text-primary/10">
                <Gift size={150} />
            </div>
            <CardContent className="p-8 md:p-12 relative">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">🎁 BÔNUS DE VALOR</h2>
              <p className="text-xl font-semibold mb-6">Mensagens prontas para WhatsApp</p>
              <p>Copie e cole mensagens para:</p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Nova cliente</li>
                <li>Reajuste de preço</li>
                <li>Resposta para “tá caro”</li>
                <li>Cliente que tenta negociar</li>
                <li>Regras de atraso e cancelamento</li>
              </ul>
              <p className="mt-6 text-lg font-bold bg-black/20 p-3 rounded-md inline-block">👉 Isso sozinho já vale o investimento.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Before & After */}
      <section className="w-full py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Sua transformação</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-destructive/50 border-2">
              <CardContent className="p-8">
                <h3 className="font-headline text-2xl font-bold mb-4 text-destructive flex items-center gap-2"><XCircle/> Antes</h3>
                <ul className="space-y-3">
                  <XListItem>Medo de cobrar</XListItem>
                  <XListItem>Insegurança para se posicionar</XListItem>
                  <XListItem>Clientes desvalorizando seu trabalho</XListItem>
                  <XListItem>Muito trabalho, pouco retorno</XListItem>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/50 border-2">
              <CardContent className="p-8">
                <h3 className="font-headline text-2xl font-bold mb-4 text-primary flex items-center gap-2"><CheckCircle/> Depois</h3>
                <ul className="space-y-3">
                  <CheckListItem>Clareza no preço e confiança</CheckListItem>
                  <CheckListItem>Postura profissional que impõe respeito</CheckListItem>
                  <CheckListItem>Clientes que respeitam e valorizam</CheckListItem>
                  <CheckListItem>Mais dinheiro no fim do mês</CheckListItem>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Whom It's Not */}
       <section className="w-full py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Para quem NÃO é este material</h2>
           <Card className="mt-8 text-left">
            <CardContent className="p-8">
                <ul className="space-y-3 text-lg">
                  <XListItem>Você não atende como manicure</XListItem>
                  <XListItem>Você acha que preço baixo é a única estratégia</XListItem>
                  <XListItem>Você não quer mudar sua postura profissional</XListItem>
                  <XListItem>Você espera um milagre sem aplicar o conteúdo</XListItem>
                </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="w-full py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="text-center shadow-2xl border-primary border-2 bg-gradient-to-br from-secondary/50 to-background">
            <CardContent className="p-8 md:p-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Tenha acesso a tudo isso por apenas:</h2>
              <div className="my-6">
                <span className="text-6xl md:text-8xl font-extrabold text-primary">R$27</span>
                <span className="text-lg text-muted-foreground">,00</span>
              </div>
              <p className="text-lg">Menos do que o valor de uma esmaltação.</p>
              <p className="font-bold text-lg">Mas pode mudar completamente quanto você ganha por mês.</p>
              <Button asChild size="lg" className="mt-8 w-full md:w-auto text-lg py-7 px-10 animate-pulse">
                <Link href="#">
                  Quero ser uma manicure bem paga AGORA
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guarantee */}
      <section className="w-full pb-16 lg:pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="flex flex-col md:flex-row items-center gap-6 p-8 bg-secondary">
            <ShieldCheck className="w-20 h-20 text-primary shrink-0"/>
            <div>
              <h3 className="font-headline text-2xl font-bold">Sua Compra é 100% Segura</h3>
              <p className="mt-2">
                Você tem 7 dias de garantia incondicional. Se por qualquer motivo você achar que o material não é para você, basta pedir o reembolso. Sem perguntas, sem complicação. O risco é todo meu.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Final Warning */}
      <section className="w-full py-16 lg:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">A decisão é sua.</h2>
          <p className="mt-6 text-lg md:text-xl">
            Quanto mais tempo você cobra pouco, mais difícil fica sair desse lugar. Você pode continuar trabalhando muito ou pode começar a trabalhar com valor.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 group text-lg">
            <Link href="#pricing">
              Escolho trabalhar com valor <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

    </main>
  );
}
