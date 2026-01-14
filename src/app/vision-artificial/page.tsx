import { TopicCard } from '@/components/TopicCard';
import { topics } from './topics';

// Helper to generate IDs from titles
const generateId = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '-');
};

export default function VisionArtificialPage() {
  return (
    <div className="flex justify-center p-4 sm:p-6 md:p-8 text-white">
      <div className="w-full max-w-7xl">
        <header className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-cyan-300 animate-pulse">VISIÓN ARTIFICIAL: DECODIFICANDO LA REALIDAD</h1>
            <p className="text-lg text-blue-300 mt-4 max-w-4xl mx-auto">
                Un viaje a través de las capacidades que permiten a las máquinas interpretar, comprender y reaccionar al mundo visual, extendiendo nuestros propios sentidos al dominio digital.
            </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <div key={index} id={generateId(topic.title)} className="scroll-mt-24">
              <TopicCard topicNumber={index + 1} title={topic.title} concept={topic.concept}>
                {topic.details}
              </TopicCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}