import Link from 'next/link';
import { NailPolish } from '@/components/icons';

export function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center gap-2" aria-label="Manicure Elevation Home">
      <NailPolish className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline text-foreground">
        Manicure Elevation
      </span>
    </Link>
  );
}
