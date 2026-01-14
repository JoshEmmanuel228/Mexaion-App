'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TopicCardProps {
  topicNumber: number;
  title: string;
  concept: string;
  children: React.ReactNode;
}

const PlusMinusIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div className="w-6 h-6 relative">
        <div className={`absolute w-full h-0.5 bg-cyan-400 top-1/2 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-90'}`}></div>
        <div className="absolute w-full h-0.5 bg-cyan-400 top-1/2"></div>
    </div>
);

export const TopicCard = ({ topicNumber, title, concept, children }: TopicCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
        className="glass-pane p-6 rounded-lg border border-blue-400/20 transition-all duration-300 hover:border-cyan-400/80 hover:shadow-cyan-500/20 hover:shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
    >
      <div className="cursor-pointer">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-cyan-300">
            <span className="text-blue-400 mr-3 font-mono">{topicNumber.toString().padStart(2, '0')}</span>
            {title}
          </h3>
          <PlusMinusIcon isOpen={isOpen} />
        </div>
        <p className="text-blue-200/80 mt-2 text-base pl-10">{concept}</p>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: '24px', paddingTop: '24px' }}
            exit={{ height: 0, opacity: 0, marginTop: '0px', paddingTop: '0px' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-blue-400/20"
          >
            <div className="prose prose-invert prose-base max-w-none">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
