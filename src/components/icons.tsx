import type { SVGProps } from 'react';

export function NailPolish(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8.5 2.5a2.5 2.5 0 0 1 5 0V6h-5V2.5Z" />
      <path d="M7 6h10" />
      <path d="M12 6v1" />
      <path d="M12 11v8" />
      <path d="M12 11a5 5 0 0 0-5 5v3h10v-3a5 5 0 0 0-5-5Z" />
    </svg>
  );
}
