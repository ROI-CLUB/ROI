import { useState } from 'react';
import { Trophy, Medal, Award, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Achievements = () => {
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [filterType, setFilterType] = useState('all');

  const achievements = [
    {
      date: "2023-12-15",
      event: "National AI Hackathon",
      participation: "Team of 4",
      achievement: "1st Place Winner",
      type: "Hackathon",
      prize: "₹1,00,000",
      icon: Trophy
    },
    {
      date: "2023-11-20",
      event: "IEEE AI Research Paper",
      participation: "3 Co-authors",
      achievement: "Published Research",
      type: "Research",
      prize: "Publication",
      icon: Award
    },
    {
      date: "2023-10-08",
      event: "Google AI Competition",
      participation: "Individual",
      achievement: "Top 10 Finalist",
      type: "Competition",
      prize: "Recognition",
      icon: Medal
    },
    {
      date: "2023-09-25",
      event: "Microsoft Imagine Cup",
      participation: "Team of 5",
      achievement: "Regional Winner",
      type: "Competition",
      prize: "₹50,000",
      icon: Trophy
    },
    {
      date: "2023-08-14",
      event: "Industry Collaboration",
      participation: "Full Club",
      achievement: "Partnership with TechCorp",
      type: "Collaboration",
      prize: "Mentorship",
      icon: Users
    },
    {
      date: "2023-07-30",
      event: "AI Ethics Conference",
      participation: "2 Representatives",
      achievement: "Best Presentation",
      type: "Conference",
      prize: "Certificate",
      icon: Award
    },
    {
      date: "2023-06-18",
      event: "Smart City Hackathon",
      participation: "Team of 6",
      achievement: "2nd Place",
      type: "Hackathon",
      prize: "₹25,000",
      icon: Medal
    },
    {
      date: "2023-05-12",
      event: "Open Source Contribution",
      participation: "3 Members",
      achievement: "Major Contribution to TensorFlow",
      type: "Open Source",
      prize: "Recognition",
      icon: Award
    }
  ];

  const sortedAndFilteredAchievements = achievements
    .filter(achievement => filterType === 'all' || achievement.type.toLowerCase() === filterType)
    .sort((a, b) => {
      if (sortConfig.key) {
        const aValue = a[sortConfig.key as keyof typeof a];
        const bValue = b[sortConfig.key as keyof typeof b];
        
        if (sortConfig.direction === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      }
      return 0;
    });

  const handleSort = (key: string) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const getSortIcon = (column: string) => {
    if (sortConfig.key === column) {
      return sortConfig.direction === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />;
    }
    return <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-50" />;
  };

  const achievementTypes = ['all', 'hackathon', 'competition', 'research', 'collaboration', 'conference', 'open source'];

  return (
    <section id="achievements" className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-primary">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating our milestones, victories, and contributions to the AI community
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 rounded-xl bg-card border border-card-border hover:border-primary/50 transition-all duration-300">
            <Trophy className="h-8 w-8 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-gradient-primary mb-2">8</div>
            <div className="text-muted-foreground">Total Achievements</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-card-border hover:border-primary/50 transition-all duration-300">
            <Medal className="h-8 w-8 text-secondary mx-auto mb-4" />
            <div className="text-3xl font-bold text-gradient-primary mb-2">₹1.75L</div>
            <div className="text-muted-foreground">Prize Money Won</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-card-border hover:border-primary/50 transition-all duration-300">
            <Award className="h-8 w-8 text-accent mx-auto mb-4" />
            <div className="text-3xl font-bold text-gradient-primary mb-2">3</div>
            <div className="text-muted-foreground">Research Papers</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-card-border hover:border-primary/50 transition-all duration-300">
            <Users className="h-8 w-8 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-gradient-primary mb-2">50+</div>
            <div className="text-muted-foreground">Participants</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {achievementTypes.map(type => (
            <Button
              key={type}
              variant={filterType === type ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType(type)}
              className={filterType === type 
                ? "bg-gradient-primary hover:glow-primary" 
                : "border-primary/30 text-primary hover:bg-primary/10"
              }
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </div>

        {/* Achievements Table */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full bg-card rounded-2xl border border-card-border overflow-hidden">
            {/* Table Header */}
            <div className="bg-muted/30 border-b border-card-border">
              <div className="grid grid-cols-4 md:grid-cols-5 gap-4 p-4">
                <button
                  onClick={() => handleSort('date')}
                  className="flex items-center text-left font-semibold text-foreground hover:text-primary transition-colors group"
                >
                  Date {getSortIcon('date')}
                </button>
                <button
                  onClick={() => handleSort('event')}
                  className="flex items-center text-left font-semibold text-foreground hover:text-primary transition-colors group"
                >
                  Event {getSortIcon('event')}
                </button>
                <div className="font-semibold text-foreground hidden md:block">Participation</div>
                <button
                  onClick={() => handleSort('achievement')}
                  className="flex items-center text-left font-semibold text-foreground hover:text-primary transition-colors group"
                >
                  Achievement {getSortIcon('achievement')}
                </button>
                <div className="font-semibold text-foreground text-center">Prize</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-card-border">
              {sortedAndFilteredAchievements.map((achievement, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 md:grid-cols-5 gap-4 p-4 hover:bg-primary/5 transition-colors group"
                >
                  <div className="text-muted-foreground text-sm">
                    {new Date(achievement.date).toLocaleDateString()}
                  </div>
                  
                  <div className="flex items-center">
                    <achievement.icon className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium text-foreground">{achievement.event}</div>
                      <div className="text-xs text-muted-foreground">{achievement.type}</div>
                    </div>
                  </div>
                  
                  <div className="text-muted-foreground text-sm hidden md:block">
                    {achievement.participation}
                  </div>
                  
                  <div className="font-medium text-foreground">
                    {achievement.achievement}
                  </div>
                  
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                      {achievement.prize}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recognition CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                Be Part of Our Success Story
              </h3>
              <p className="text-muted-foreground mb-6">
                Join us and contribute to groundbreaking achievements in artificial intelligence
              </p>
              <Button className="bg-gradient-primary hover:glow-primary transition-all duration-300 transform hover:scale-105">
                Join ROI Tech Club
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;