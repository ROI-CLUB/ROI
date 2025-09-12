import { Code, Palette, Calendar, Megaphone, Search } from 'lucide-react';

const Committees = () => {
  const committees = [
    {
      icon: Search,
      title: "Technical Research",
      description: "Leading cutting-edge AI research, publishing papers, and exploring new algorithms and methodologies in machine learning.",
      color: "primary"
    },
    {
      icon: Code,
      title: "Project Development",
      description: "Building innovative AI applications, contributing to open-source projects, and developing practical solutions for real-world problems.",
      color: "secondary"
    },
    {
      icon: Palette,
      title: "Design & Media",
      description: "Creating visual content, managing social media presence, and designing user interfaces for AI applications and club materials.",
      color: "accent"
    },
    {
      icon: Calendar,
      title: "Events & Logistics",
      description: "Organizing workshops, hackathons, conferences, and managing logistics for all club events and activities.",
      color: "primary"
    },
    {
      icon: Megaphone,
      title: "Outreach & PR",
      description: "Building industry partnerships, managing public relations, and expanding the club's network within the AI community.",
      color: "secondary"
    }
  ];

  return (
    <section id="committees" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 neural-bg opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-primary">Committees</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized teams working together to drive innovation and excellence in every aspect of our club
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committees.map((committee, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-card-border hover:border-primary/50 transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${committee.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-${committee.color === 'primary' ? 'primary' : committee.color === 'secondary' ? 'primary' : 'accent'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <committee.icon className="h-8 w-8 text-background" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-gradient-primary transition-colors duration-300">
                  {committee.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {committee.description}
                </p>

                {/* Join Button */}
                <button className="w-full py-3 px-4 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 text-sm font-medium">
                  Join This Committee
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-primary/10 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-accent/10 rounded-full blur-lg" />
            </div>
          ))}
        </div>

        {/* Committee Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-card/50 border border-card-border">
            <div className="text-3xl font-bold text-gradient-primary mb-2">Leadership</div>
            <p className="text-muted-foreground">Develop leadership skills and lead impactful projects</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 border border-card-border">
            <div className="text-3xl font-bold text-gradient-primary mb-2">Networking</div>
            <p className="text-muted-foreground">Connect with industry professionals and peers</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 border border-card-border">
            <div className="text-3xl font-bold text-gradient-primary mb-2">Growth</div>
            <p className="text-muted-foreground">Accelerate your career in AI and technology</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committees;