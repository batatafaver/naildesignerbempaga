import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center">
          <Logo />
        </div>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} Nail Designer - Bem Paga. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2 text-muted-foreground">
          Transformando Nail Designers em empreendedoras de sucesso.
        </p>
      </div>
    </footer>
  );
}
