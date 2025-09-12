import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg-light.jpg';

const Hero = () => {
  const handleJoinClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://i.postimg.cc/NGSPzwQ0/Screenshot-2025-09-12-120739.png), url(/ai-hero.png), url(${heroBg})`,
          backgroundSize: '50% auto, 50% auto, cover',
          backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
          backgroundPosition: 'right center, right center, center'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-surface/80" />
      
      {/* Neural Network Pattern Overlay */}
      <div className="absolute inset-0 neural-bg" />
      
      {/* Floating Elements (subtle, avoid overlapping stats) */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full pulse-glow opacity-50" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full pulse-glow animation-delay-1000 opacity-40" />
      <div className="hidden md:block absolute bottom-48 left-1/4 w-3 h-3 bg-accent rounded-full pulse-glow animation-delay-2000 opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          <span className="text-gradient-primary">Innovate</span>{' '}
          <span className="text-foreground">With</span>{' '}
          <span className="text-gradient-accent">Intelligence</span>
        </h1>
        
        {/* Supporting Text */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Exploring the Future of AI Together through cutting-edge research, 
          innovative projects, and collaborative learning
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/register"
            className="inline-flex items-center bg-gradient-primary hover:glow-primary transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 rounded-md"
          >
            Join the Club
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          
          <Button 
            variant="outline"
            size="lg"
            onClick={() => {
              const aboutSection = document.querySelector('#about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6"
          >
            Learn More
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Events Organized</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Awards Won</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;