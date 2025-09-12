import { Brain, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Research",
      description: "Cutting-edge research in artificial intelligence"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a strong network of AI enthusiasts and innovators"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering creative solutions to real-world problems"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Pursuing excellence in all AI-related endeavors"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 neural-bg opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient-primary">ROI Tech Club</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gradient-accent">
              Pioneering the Future of Artificial Intelligence
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              ROI Tech Club is a dynamic student-driven initiative focused on Artificial Intelligence, 
              Data Science, and cutting-edge technologies. We are committed to 
              creating an ecosystem where students can explore, learn, and innovate in the rapidly 
              evolving field of AI.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our club serves as a bridge between academic knowledge and industry applications, 
              providing hands-on experience through workshops, hackathons, research projects, 
              and collaboration with leading tech companies and research institutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join us in our mission to democratize AI education and build the next generation 
              of AI innovators who will shape the future of technology and society.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-card border border-card-border hover:border-primary/50 transition-all duration-300 hover:glow-primary group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-background" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;