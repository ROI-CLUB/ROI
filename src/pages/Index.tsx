import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Objectives from '@/components/Objectives';
import Committees from '@/components/Committees';
import Events from '@/components/Events';
import Team from '@/components/Team';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Objectives />
        <Committees />
        <Events />
        <Team />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
