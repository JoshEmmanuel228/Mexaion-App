'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface QuantumButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function QuantumButton({ href, children, className }: QuantumButtonProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 0px 20px rgba(74, 222, 222, 0.6)",
        textShadow: "0px 0px 8px rgba(74, 222, 222, 0.8)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`rounded-full ${className}`}
    >
      <Link href={href} className="block w-full h-full">
        {children}
      </Link>
    </motion.div>
  );
}
