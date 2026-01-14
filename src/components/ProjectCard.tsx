'use client';

import React from 'react';

export const ProjectPlaceholderIcon = () => (
    <div className="w-full h-48 bg-black/20 rounded-t-lg flex items-center justify-center border-b border-blue-400/30">
        <svg className="w-12 h-12 text-blue-400/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    </div>
);

export const ProjectCard = ({ name, description, tech, link, imageUrl, target }) => (
    <a href={link || '#'} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className="block glass-pane overflow-hidden h-full flex flex-col hover:border-cyan-400/50 transition-colors">
        {imageUrl ? (
            <img src={imageUrl} alt={`Portada de ${name}`} className="w-full h-48 object-cover" />
        ) : (
            <ProjectPlaceholderIcon />
        )}
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-left text-blue-300">{name}</h3>
            <p className="text-blue-200/80 text-left mb-4 flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {tech.map(t => <span key={t} className="bg-blue-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>)}
            </div>
        </div>
    </a>
);
