import { Zap, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-surface/50 border-t border-card-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Zap className="h-6 w-6 text-background" />
              </div>
              <span className="text-xl font-bold text-gradient-primary">ROI Tech Club</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Official AI Club of ROI Tech, innovating with intelligence and exploring the future of artificial intelligence together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                About Us
              </button>
              <button
                onClick={() => document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Events
              </button>
              <button
                onClick={() => document.querySelector('#team')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Our Team
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end mb-2">
              <span className="text-muted-foreground text-sm mr-1">Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span className="text-muted-foreground text-sm ml-1">by ROI Tech Club</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} ROI Tech Club. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-card-border text-center">
          <p className="text-muted-foreground text-xs">
            Innovating with Intelligence • Exploring the Future of AI Together
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;