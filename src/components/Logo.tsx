import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center" aria-label="Nail Designer - Bem Paga Home">
      <Image
        src="https://i.postimg.cc/wxmtgGRP/Chat-GPT-Image-31-01-2026-18-20-20.png"
        alt="Nail Designer - Bem Paga Logo"
        width={125}
        height={36}
        priority
      />
    </Link>
  );
}
