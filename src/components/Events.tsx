import { useState } from 'react';
import { Calendar, MapPin, Users, Trophy, BookOpen, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "AI Hackathon 2024",
      type: "Hackathon",
      icon: Trophy,
      date: "March 15-17, 2024",
      location: "ROI Tech Campus",
      participants: "50+ teams",
      description: "48-hour intensive hackathon focused on building AI solutions for social good. Teams will work on real-world problems using machine learning, computer vision, and NLP.",
      highlights: ["₹50,000 prize pool", "Industry mentors", "Job opportunities", "Certificate for all participants"],
      status: "upcoming"
    },
    {
      id: 2,
      title: "Machine Learning Bootcamp",
      type: "Workshop",
      icon: BookOpen,
      date: "February 20-22, 2024",
      location: "Online & Campus",
      participants: "100+ attendees",
      description: "Comprehensive 3-day bootcamp covering machine learning fundamentals, practical implementations, and industry best practices.",
      highlights: ["Hands-on projects", "Industry experts", "Certificate of completion", "Career guidance"],
      status: "upcoming"
    },
    {
      id: 3,
      title: "Guest Lecture: Future of AI",
      type: "Lecture",
      icon: Users,
      date: "January 25, 2024",
      location: "Main Auditorium",
      participants: "200+ attendees",
      description: "Distinguished guest speaker from Google AI will discuss the latest trends, challenges, and opportunities in artificial intelligence.",
      highlights: ["Q&A session", "Networking opportunity", "Career insights", "Free attendance"],
      status: "upcoming"
    },
    {
      id: 4,
      title: "AI for Social Good Challenge",
      type: "Competition",
      icon: Heart,
      date: "December 10-12, 2023",
      location: "ROI Tech Campus",
      participants: "75+ participants",
      description: "Competition focused on developing AI solutions for social impact, addressing problems in healthcare, education, and environment.",
      highlights: ["Social impact focus", "NGO partnerships", "Implementation support", "Media coverage"],
      status: "completed"
    },
    {
      id: 5,
      title: "Project Showcase 2023",
      type: "Showcase",
      icon: Eye,
      date: "November 18, 2023",
      location: "Innovation Hub",
      participants: "30+ projects",
      description: "Annual showcase of outstanding AI projects developed by club members, featuring live demos and presentations.",
      highlights: ["Live demonstrations", "Industry judges", "Best project awards", "Networking session"],
      status: "completed"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'upcoming' ? 'text-accent' : 'text-muted-foreground';
  };

  const getStatusBg = (status: string) => {
    return status === 'upcoming' ? 'bg-accent/20 border-accent/30' : 'bg-muted/20 border-muted/30';
  };

  return (
    <section id="events" className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-primary">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us in exciting events that foster learning, innovation, and collaboration in the AI community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group p-6 rounded-2xl bg-card border border-card-border hover:border-primary/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:glow-primary"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <event.icon className="h-6 w-6 text-background" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBg(event.status)} ${getStatusColor(event.status)}`}>
                  {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-gradient-primary transition-colors duration-300">
                {event.title}
              </h3>
              
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  {event.date}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  {event.location}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-primary" />
                  {event.participants}
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                {event.description}
              </p>

              {/* Action Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-card border-card-border">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-gradient-primary">{event.title}</DialogTitle>
                    <DialogDescription className="text-lg text-muted-foreground">
                      {event.type} Event
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    {/* Event Info */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {event.participants}
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="font-semibold mb-2">Description</h4>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold mb-3">Event Highlights</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {event.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    {event.status === 'upcoming' && (
                      <Button className="w-full bg-gradient-primary hover:glow-primary transition-all duration-300">
                        Register Now
                      </Button>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>

        {/* Upcoming Events CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                Don't Miss Our Events!
              </h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with our latest events and be part of the AI revolution
              </p>
              <Button className="bg-gradient-primary hover:glow-primary transition-all duration-300 transform hover:scale-105">
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;