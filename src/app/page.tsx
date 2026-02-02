import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Gift, MessageSquare, ShieldCheck, TrendingUp, Wallet, XCircle, BookOpen, Sparkles, Sheet, ClipboardCopy, ClipboardCheck, Clock, Heart, DollarSign, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  const guideCoverImage = PlaceHolderImages.find(p => p.id === 'guide-cover');
  const kellyImage = PlaceHolderImages.find(p => p.id === 'kelly-martins');

  return (
    <main className="flex flex-col items-center overflow-hidden">
      
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
                      Trabalhe como Nail Designer e <em>pare de ganhar pouco</em> pelo esforço que você faz
                  </h1>
                  <p className="mt-4 md:mt-6 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-foreground/80 font-headline">
                      Descubra como cobrar mais como Nail Designer, <em>mesmo tendo medo de perder clientes</em>, <strong>sem brigar por preço</strong> e <strong>sem depender de indicação</strong>.
                  </p>
                  <Button asChild size="lg" className="mt-6 md:mt-8 group animate-pulse">
                      <Link href="#pricing">
                          NAIL DESIGNER BEM PAGA <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                  </Button>
              </div>
          </div>
        </div>
      </section>

      {/* Identification Block */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-center mb-8">Se você é Nail Designer e sente que:</h2>
              <ul className="space-y-4 text-lg text-foreground/90">
                <CheckListItem>Trabalha <em>muito</em> e o dinheiro <strong>nunca sobra</strong></CheckListItem>
                <CheckListItem>Cobra <strong>menos do que deveria</strong></CheckListItem>
                <CheckListItem>Aceita cliente que <strong>não respeita seu horário</strong></CheckListItem>
                <CheckListItem>Fica desconfortável quando precisa <strong>falar de preço</strong></CheckListItem>
                <CheckListItem>Tem <strong>medo de reajustar</strong> e perder clientes</CheckListItem>
              </ul>
              <p className="mt-8 text-center font-bold text-lg text-primary">... <strong>então esse material é pra você.</strong></p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Elas aplicaram o método e hoje são <span className="text-primary">Bem Pagas</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex text-primary mb-2">
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                </div>
                <p className="italic text-foreground/90 flex-grow">"Eu não tinha coragem de cobrar o valor justo. Depois do guia, meu faturamento dobrou em menos de 30 dias. Incrível!"</p>
                <div className="mt-4 text-right">
                  <p className="font-bold">Ana Silva</p>
                  <p className="text-sm text-primary font-semibold">De R$2.500 &rarr; R$5.000/mês</p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex text-primary mb-2">
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                </div>
                <p className="italic text-foreground/90 flex-grow">"Finalmente consegui organizar minhas finanças e impor minhas regras. As clientes-problema sumiram e as boas pagam o novo valor sorrindo."</p>
                <div className="mt-4 text-right">
                  <p className="font-bold">Juliana Costa</p>
                  <p className="text-sm text-primary font-semibold">De R$3.000 &rarr; R$6.200/mês</p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex text-primary mb-2">
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                </div>
                <p className="italic text-foreground/90 flex-grow">"Achei que ia perder clientes com o reajuste, mas aconteceu o contrário! Minha agenda continua cheia e eu trabalho menos, ganhando mais."</p>
                <div className="mt-4 text-right">
                  <p className="font-bold">Carla Lima</p>
                  <p className="text-sm text-primary font-semibold">De R$1.800 &rarr; R$4.000/mês</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">O <strong>Problema Real</strong> (sem romantizar)</h2>
          <p className="mt-6 text-lg md:text-xl">
            A maioria das Nail Designers não ganha pouco porque trabalha mal. <em>Ganha pouco porque:</em>
          </p>
          <div className="mt-8 space-y-4 text-left mx-auto max-w-md">
            <p className="flex items-center gap-3"><XCircle className="text-destructive w-6 h-6 shrink-0"/> Não sabe se <strong>posicionar</strong></p>
            <p className="flex items-center gap-3"><XCircle className="text-destructive w-6 h-6 shrink-0"/> Não tem <strong>regras claras</strong></p>
            <p className="flex items-center gap-3"><XCircle className="text-destructive w-6 h-6 shrink-0"/> Não sabe como <strong>falar de preço</strong></p>
            <p className="flex items-center gap-3"><XCircle className="text-destructive w-6 h-6 shrink-0"/> Aceita tudo por <strong>medo</strong> de ficar sem cliente</p>
          </div>
          <div className="mt-8 bg-card p-6 rounded-lg shadow-md inline-block">
            <p className="text-xl font-bold"><strong>Resultado? 👉 Agenda cheia, corpo cansado, bolso vazio.</strong></p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="w-full py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-last md:order-first">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary">A transformação da Kelly</h2>
            <p className="mt-4 text-lg md:text-xl">
              Antes do método, Kelly vivia com a agenda lotada e a conta vazia. O cansaço era constante e o tempo com a família, quase nulo.
            </p>
            <p className="mt-4 text-lg md:text-xl">
              Depois de aplicar as mesmas técnicas que estão neste guia, ela conquistou:
            </p>
            <ul className="mt-6 space-y-4 text-lg">
                <li className="flex items-center gap-3"><Clock className="w-6 h-6 text-primary"/> Mais <strong>tempo com a família</strong></li>
                <li className="flex items-center gap-3"><Heart className="w-6 h-6 text-primary"/> Mais <strong>qualidade de vida</strong></li>
                <li className="flex items-center gap-3"><DollarSign className="w-6 h-6 text-primary"/> <strong>Faturamento mais alto</strong>, trabalhando menos</li>
            </ul>
            <p className="mt-6 text-lg font-semibold">Essa transformação também pode ser a sua.</p>
            <Button asChild size="lg" className="mt-8 group">
              <Link href="#pricing">
                EU QUERO ESSA TRANSFORMAÇÃO <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="text-center md:text-left">
            {guideCoverImage && (
              <Image
                src={guideCoverImage.imageUrl}
                alt={guideCoverImage.description}
                width={400}
                height={500}
                data-ai-hint={guideCoverImage.imageHint}
                className="rounded-lg shadow-2xl mx-auto"
              />
            )}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Com o Nail Designer Bem Paga, você vai <strong>aprender</strong>:</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg"><Wallet className="w-6 h-6 text-primary" /></div>
              <div>
                <h3 className="font-bold text-lg">Definir um <em>preço justo</em></h3>
                <p className="text-foreground/80">Sem copiar o valor da concorrência e <strong>com confiança</strong>.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg"><Sparkles className="w-6 h-6 text-primary" /></div>
              <div>
                <h3 className="font-bold text-lg">Parar de se sentir <em>culpada</em></h3>
                <p className="text-foreground/80">Entenda o <strong>valor do seu trabalho</strong> e cobre sem culpa.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg"><MessageSquare className="w-6 h-6 text-primary" /></div>
              <div>
                <h3 className="font-bold text-lg">Responder ao "tá caro"</h3>
                <p className="text-foreground/80"><em>Técnicas e mensagens prontas</em> para contornar objeções.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg"><TrendingUp className="w-6 h-6 text-primary" /></div>
              <div>
                <h3 className="font-bold text-lg">Anunciar <em>reajuste</em></h3>
                <p className="text-foreground/80">A forma <strong>correta</strong> de comunicar aumentos <em>sem criar conflito</em>.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg"><BookOpen className="w-6 h-6 text-primary" /></div>
              <div>
                <h3 className="font-bold text-lg">Criar <em>regras simples</em></h3>
                <p className="text-foreground/80">Para <strong>filtrar clientes-problema</strong> e ter mais tranquilidade.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg"><NailPolish className="w-6 h-6 text-primary" /></div>
              <div>
                <h3 className="font-bold text-lg">Ganhar <em>mais</em>, trabalhando <em>menos</em></h3>
                <p className="text-foreground/80">Otimize sua agenda e sua precificação para ser <strong>mais lucrativa</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="w-full py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">O que tem <strong>dentro</strong> do material</h2>
          <Card>
            <CardContent className="p-8 grid sm:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <CheckListItem>Guia digital em PDF (<strong>leitura rápida</strong>)</CheckListItem>
                <CheckListItem>Checklists <strong>simples e práticos</strong></CheckListItem>
                <CheckListItem><strong>Mensagens prontas</strong> para WhatsApp</CheckListItem>
                <CheckListItem>Linguagem <strong>fácil</strong>, <em>sem termos difíceis</em></CheckListItem>
              </ul>
              <div className="text-center bg-card p-6 rounded-lg">
                <p className="font-bold text-lg">Pode ser consumido em <em>1 a 2 horas</em></p>
                <p className="text-primary font-semibold text-xl mt-2">Aplicação <strong>imediata!</strong></p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Before & After */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Sua <strong>transformação</strong></h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-destructive/50 border-2">
              <CardContent className="p-8">
                <h3 className="font-headline text-2xl font-bold mb-4 text-destructive flex items-center gap-2"><XCircle/> Antes</h3>
                <ul className="space-y-3">
                  <XListItem><strong>Medo</strong> de cobrar</XListItem>
                  <XListItem><strong>Insegurança</strong> para se posicionar</XListItem>
                  <XListItem>Clientes <strong>desvalorizando</strong> seu trabalho</XListItem>
                  <XListItem>Muito trabalho, <strong>pouco retorno</strong></XListItem>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/50 border-2">
              <CardContent className="p-8">
                <h3 className="font-headline text-2xl font-bold mb-4 text-primary flex items-center gap-2"><CheckCircle/> Depois</h3>
                <ul className="space-y-3">
                  <CheckListItem><strong>Clareza</strong> no preço e <em>confiança</em></CheckListItem>
                  <CheckListItem>Postura profissional que <strong>impõe respeito</strong></CheckListItem>
                  <CheckListItem>Clientes que <strong>respeitam e valorizam</strong></CheckListItem>
                  <CheckListItem><strong>Mais dinheiro</strong> no fim do mês</CheckListItem>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Whom It's Not */}
       <section className="w-full py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Para quem <strong>NÃO</strong> é este material</h2>
           <Card className="mt-8 text-left">
            <CardContent className="p-8">
                <ul className="space-y-3 text-lg">
                  <XListItem>Você não atende como Nail Designer</XListItem>
                  <XListItem>Você acha que <em>preço baixo</em> é a <strong>única</strong> estratégia</XListItem>
                  <XListItem>Você <strong>não quer</strong> mudar sua postura profissional</XListItem>
                  <XListItem>Você espera um <strong>milagre</strong> sem aplicar o conteúdo</XListItem>
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
              <h2 className="font-headline text-3xl md:text-4xl font-bold">De <span className="font-normal text-muted-foreground line-through">R$67</span> por apenas:</h2>
              <div className="my-4">
                <span className="text-7xl md:text-9xl font-extrabold text-primary">R$27</span>
                <span className="text-xl font-bold text-muted-foreground">,00</span>
              </div>
              <p className="text-lg">Menos do que o valor de <em>uma esmaltação</em>.</p>
              <p className="font-bold text-lg">Mas pode mudar <strong>completamente</strong> quanto você ganha por mês.</p>
              <Button asChild size="lg" className="mt-8 w-full md:w-auto text-lg py-7 px-10 animate-pulse">
                <Link href="https://pay.kiwify.com.br/TdOc13P">
                  NAIL DESIGNER BEM PAGA
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
              <h3 className="font-headline text-2xl font-bold">Sua Compra é <strong>100% Segura</strong></h3>
              <p className="mt-2">
                <em>Você tem 7 dias de garantia incondicional.</em> Se por qualquer motivo você achar que o material não é para você, basta pedir o reembolso. <strong>Sem perguntas, sem complicação. O risco é todo meu.</strong>
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Final Warning */}
      <section className="w-full py-16 lg:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">A decisão é <strong>sua</strong>.</h2>
          <p className="mt-6 text-lg md:text-xl">
            Quanto mais tempo você cobra pouco, <em>mais difícil</em> fica sair desse lugar. Você pode continuar trabalhando muito ou pode começar a trabalhar <strong>com valor</strong>.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 group text-lg">
            <Link href="#pricing">
              NAIL DESIGNER BEM PAGA <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

    </main>
  );
}
