import React from 'react';
import { Cpu } from 'lucide-react';

type Variant = 'dark' | 'light';

interface AIBannerProps {
  title?: string;
  description?: string;
  cta?: { label: string; href: string };
  variant?: Variant;
}

const AIBanner: React.FC<AIBannerProps> = ({
  title = 'How AI is Enhancing the Future',
  description = 'Discover workshops, research sprints, and hands-on projects with ROI Tech Club.',
  cta = { label: 'Learn More', href: '#about' },
  variant = 'dark',
}) => {
  const isDark = variant === 'dark';

  return (
    <section className={`relative overflow-hidden ${isDark ? 'ai-grid-dark' : 'neural-bg'}`}>
      <div className="absolute inset-0 ai-gradient-hero opacity-60 pointer-events-none" />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-xl border border-card-border/60 bg-card/40 backdrop-blur-sm p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg p-3 bg-primary/15 ring-1 ring-primary/30 ring-glow">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold" style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}>
                {title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mt-1">{description}</p>
            </div>
          </div>
          {cta && (
            <a
              href={cta.href}
              className="inline-flex items-center px-5 py-3 rounded-md bg-primary text-primary-foreground hover-glow transition-smooth shadow-glow-primary"
            >
              {cta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIBanner;


