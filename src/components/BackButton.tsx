'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function BackButton() {
  const pathname = usePathname();

  // No mostrar en la página de inicio
  if (pathname === '/') {
    return null;
  }

  const lastSlashIndex = pathname.lastIndexOf('/');
  const parentPath = lastSlashIndex > 0 ? pathname.substring(0, lastSlashIndex) : '/';
  const buttonText = parentPath === '/' ? 'Volver al Inicio' : 'Volver';

  return (
    <div className="px-4 pt-8 md:px-8">
        <Link 
            href={parentPath} 
            className="group text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
        >
            <span className="text-2xl transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {buttonText}
            </span>
        </Link>
    </div>
  );
}