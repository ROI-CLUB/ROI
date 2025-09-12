import React from 'react';

type Variant = 'dark' | 'light';

interface AIHeroProps {
  heading?: string;
  subheading?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  imageSrc?: string;
  variant?: Variant;
}

const AIHero: React.FC<AIHeroProps> = ({
  heading = 'Innovate with AI',
  subheading = 'Join ROI Tech Club to explore artificial intelligence through projects, workshops, and real-world impact.',
  ctaPrimary = { label: 'Join the Club', href: '#contact' },
  ctaSecondary = { label: 'Explore AI Projects', href: '#events' },
  imageSrc = '/robot-hand.svg',
  variant = 'dark',
}) => {
  const isDark = variant === 'dark';

  return (
    <section id="ai-hero" className={`relative overflow-hidden ${isDark ? 'ai-grid-dark' : 'neural-bg'}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://i.postimg.cc/NGSPzwQ0/Screenshot-2025-09-12-120739.png), url(/ai-hero.png)`,
          backgroundSize: 'contain, contain',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'right center, right center',
        }}
      />
      <div className="absolute inset-0 ai-gradient-hero opacity-60 pointer-events-none" />
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-[fade-in-up_0.6s_ease-out]">
            <div className="inline-flex items-center gap-2 rounded-full border border-card-border/60 bg-card/30 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.7)]" />
              <span>Official AI Student Club</span>
            </div>
            <h1
              className={`text-4xl md:text-6xl font-extrabold leading-tight tracking-tight ${isDark ? 'text-neon-blue' : 'text-gradient-primary'}`}
              style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}
            >
              {heading}
            </h1>
            <p className="text-lg text-muted-foreground max-w-prose">{subheading}</p>
            <div className="flex flex-wrap gap-4">
              {ctaPrimary && (
                <a
                  href={ctaPrimary.href === '#contact' ? '/register' : ctaPrimary.href}
                  className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover-glow transition-smooth shadow-glow-primary"
                >
                  {ctaPrimary.label}
                </a>
              )}
              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className="inline-flex items-center px-6 py-3 rounded-md border border-input hover:bg-secondary/60 transition-smooth"
                >
                  {ctaSecondary.label}
                </a>
              )}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden image-glow">
              <img src={imageSrc} alt="AI visual" className="w-full h-auto object-cover float-animation" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
            </div>
            <div className="absolute -z-10 -inset-10 blur-3xl opacity-40 bg-gradient-to-tr from-sky-500/30 via-indigo-500/30 to-fuchsia-500/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHero;


