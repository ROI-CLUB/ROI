import { BookOpen, Wrench, Users2, Handshake, Award } from 'lucide-react';

const Objectives = () => {
  const objectives = [
    {
      icon: BookOpen,
      title: "Promote AI Learning & Research",
      description: "Foster deep understanding of AI concepts, algorithms, and methodologies through comprehensive learning programs and research initiatives."
    },
    {
      icon: Wrench,
      title: "Organize Workshops & Hackathons",
      description: "Regular hands-on workshops, coding bootcamps, and competitive hackathons to build practical skills and innovative solutions."
    },
    {
      icon: Users2,
      title: "Collaborate on Innovative Projects",
      description: "Facilitate collaborative research projects and startup initiatives that solve real-world problems using AI technologies."
    },
    {
      icon: Handshake,
      title: "Build a Strong AI Community",
      description: "Create a vibrant ecosystem of AI enthusiasts, researchers, and industry professionals for knowledge sharing and networking."
    },
    {
      icon: Award,
      title: "Bridge Industry & Academia",
      description: "Establish strong connections with tech industry leaders and research institutions to provide career opportunities and mentorship."
    }
  ];

  return (
    <section id="objectives" className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-primary">Objectives</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving innovation and excellence in artificial intelligence through collaborative learning, 
            research, and community building
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-card-border hover:border-primary/50 transition-all duration-500 hover:transform hover:scale-105 hover:glow-primary"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <objective.icon className="h-8 w-8 text-background" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-gradient-primary transition-colors duration-300">
                {objective.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {objective.description}
              </p>

              {/* Hover Effect Line */}
              <div className="w-0 h-1 bg-gradient-primary mt-4 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                Ready to Shape the Future?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join us in our mission to advance artificial intelligence and create meaningful impact
              </p>
              <button
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 rounded-lg bg-gradient-primary text-background font-semibold hover:glow-primary transition-all duration-300 transform hover:scale-105"
              >
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;