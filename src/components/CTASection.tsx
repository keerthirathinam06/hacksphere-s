import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import CountdownClock from '@/components/CountdownClock';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden perspective">
      {/* Background Effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[100px] animate-float-3d" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-6 animate-slide-in-left shadow-glow-sm">
            <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
            <span className="font-mono text-destructive text-sm text-glow">Registration Closed</span>
          </div>

          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-foreground mb-6 text-gradient-animated animate-bounce-in">
            Ready to <span>Innovate</span>?
          </h2>

          <p className="font-mono text-muted-foreground text-lg mb-12 max-w-2xl mx-auto animate-slide-in-right">
            Join hundreds of innovators and build something extraordinary.
            Registration for this edition is now closed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in" style={{ animationDelay: '0.2s' }}>
            <Button
              variant="outline"
              size="xl"
              className="group cursor-not-allowed opacity-70"
              disabled
            >
              Registration Closed
            </Button>
          </div>
          <p className="font-mono text-muted-foreground text-sm mt-2">
            For any query, contact information will be provided during the event.
          </p>

          {/* Prize Highlight */}
          <div className="mt-16 max-w-xl mx-auto animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="glass-effect-dark border-t-2 border-t-primary rounded-2xl p-8 relative overflow-hidden hover-lift shadow-glow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="relative z-10">
                <p className="font-mono text-primary text-sm tracking-widest mb-2 text-glow">WIN BIG</p>
                <p className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4 text-gradient-animated">
                  Exciting <span>Cash Prizes</span>
                </p>
                <p className="font-mono text-muted-foreground">
                  Showcase your innovation and compete for amazing rewards!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
