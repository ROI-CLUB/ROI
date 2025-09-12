import { Mail, Linkedin, Github } from 'lucide-react';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';
import team4 from '@/assets/team-4.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "President",
      image: team1,
      bio: "AI researcher passionate about machine learning and neural networks. Leading the club towards innovative AI solutions.",
      email: "alex.chen@roitech.edu",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Sarah Johnson",
      role: "Vice President",
      image: team2,
      bio: "Computer Vision specialist with expertise in deep learning and computer graphics. Driving technical excellence.",
      email: "sarah.johnson@roitech.edu",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Raj Patel",
      role: "AI Research Lead",
      image: team3,
      bio: "NLP researcher and published author. Focused on advancing natural language processing and conversational AI.",
      email: "raj.patel@roitech.edu",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "Design Head",
      image: team4,
      bio: "UX/UI designer specializing in AI-powered interfaces. Creating beautiful and intuitive user experiences.",
      email: "emily.rodriguez@roitech.edu",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Michael Kim",
      role: "Technical Lead",
      image: team1,
      bio: "Full-stack developer with expertise in MLOps and AI deployment. Building scalable AI applications.",
      email: "michael.kim@roitech.edu",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Priya Sharma",
      role: "Events Coordinator",
      image: team2,
      bio: "Event management specialist organizing impactful workshops, hackathons, and AI community events.",
      email: "priya.sharma@roitech.edu",
      linkedin: "#",
      github: "#"
    },
    {
      name: "David Wilson",
      role: "Outreach Lead",
      image: team3,
      bio: "Building industry partnerships and connecting students with AI professionals and opportunities.",
      email: "david.wilson@roitech.edu",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Lisa Zhang",
      role: "Research Coordinator",
      image: team4,
      bio: "Coordinating research projects and collaborations with industry partners and academic institutions.",
      email: "lisa.zhang@roitech.edu",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <section id="team" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 neural-bg opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-primary">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate individuals driving innovation and excellence in artificial intelligence at ROI Tech Club
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-card-border hover:border-primary/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:glow-primary text-center"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-gradient-primary transition-colors duration-300">
                  {member.name}
                </h3>
                
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  {member.role}
                </div>

                {/* Bio */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.github}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for passionate individuals to join our leadership team and drive innovation
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
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;