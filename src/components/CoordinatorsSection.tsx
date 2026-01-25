import { Phone, Mail } from 'lucide-react';
import keerthiImage from '../assets/keerthiimg.jpeg';
import sakthiImage from '../assets/Sakthi Sabareesh.jpeg';
import raghulImage from '../assets/raghulimg.jpeg';

type Coordinator = {
  name: string;
  role: string;
  image?: string;
};

const CoordinatorsSection = () => {
  const coordinators: Coordinator[] = [
    {
      name: "",
      role: "Chairman",
      image: sakthiImage,
    },
    {
      name: "Keerthivarshini R",
      role: "vice secretary",
      image: keerthiImage,
    },
    {
      name: "Raghul K",
      role: "Secretary",
      image: raghulImage,
    }
  ];

  return (
    <section id="coordinators" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-[0.3em] mb-2">&lt; TEAM /&gt;</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet the <span className="text-gradient">Coordinators</span>
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team is here to guide you through HackSphere
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 max-w-5xl mx-auto">
          {coordinators.map((coordinator, index) => (
            <div 
              key={index}
              className="group relative glass-effect-dark rounded-2xl overflow-hidden hover-lift w-full sm:w-80 animate-bounce-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image or Number Badge */}
              <div className="flex items-center justify-center py-8">
                {coordinator.image ? (
                  <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-primary group-hover:border-primary/80 transition-all duration-500 shadow-glow-md group-hover:animate-glow-pulse">
                    <img 
                      src={coordinator.image} 
                      alt={coordinator.name}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${coordinator.name === "Rahul K" ? "object-top scale-125" : "object-top"}`}
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="font-orbitron text-3xl font-bold text-primary">{index + 1}</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6 pt-0 text-center">
                <h3 className="font-orbitron text-lg font-bold text-foreground mb-1">
                  {coordinator.name}
                </h3>
                <p className="font-mono text-sm text-primary">{coordinator.role}</p>
                <div className="mt-4 flex items-center justify-center gap-3 text-muted-foreground text-xs font-mono">
                  <span>Contact details will be provided separately.</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;