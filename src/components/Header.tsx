import Link from 'next/link';
import { Button } from './ui/button';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="py-4 px-6 bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <Button asChild size="sm">
          <Link href="#pricing">MANICURE BEM PAGA</Link>
        </Button>
      </div>
    </header>
  );
}
