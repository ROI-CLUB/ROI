import { MapPin, Mail, Phone, Linkedin, Instagram, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "ROI Tech Campus, Innovation Hub",
      subtitle: "Room 204, Computer Science Building"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@roitechclub.edu",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 (555) 123-4567",
      subtitle: "Mon-Fri 9:00 AM - 6:00 PM"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-400"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "#",
      color: "hover:text-white"
    }
  ];

  const handleJoinClick = () => {
    // In a real application, this would open a Google Form
    window.open('https://forms.google.com/roi-tech-club-signup', '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 neural-bg opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-gradient-primary">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join the future of AI? Get in touch with us and become part of our innovative community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient-primary mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're interested in joining our club, collaborating on projects, or just want to learn more about AI, 
                we'd love to hear from you. Our team is always excited to connect with fellow AI enthusiasts.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 rounded-xl bg-card border border-card-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    <p className="text-primary font-medium">{info.content}</p>
                    <p className="text-muted-foreground text-sm">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center transition-all duration-300 hover:scale-110 hover:glow-primary ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Join Club Section */}
          <div className="lg:sticky lg:top-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gradient-primary mb-4">
                  Join ROI Tech Club
                </h3>
                <p className="text-muted-foreground">
                  Ready to embark on an exciting journey in artificial intelligence? 
                  Join our community of innovators and shape the future together.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span className="text-foreground">Access to workshops and bootcamps</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span className="text-foreground">Networking with industry professionals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span className="text-foreground">Hands-on project experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span className="text-foreground">Research opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span className="text-foreground">Career guidance and mentorship</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <a 
                  href="/register"
                  className="inline-flex items-center justify-center w-full bg-gradient-primary hover:glow-primary transition-all duration-300 transform hover:scale-105 text-lg py-6 rounded-md"
                >
                  Join Our Club
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Office Hours removed per request */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;