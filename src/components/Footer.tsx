import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative perspective overflow-hidden bg-gradient-to-b from-background to-background/90 border-t border-border/50 py-16">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] animate-float-3d" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] animate-pulse-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Social CTA (removed external social links) */}
        <div className="mb-12 p-6 glass-effect-dark rounded-xl hover-lift shadow-glow-md animate-slide-in-left">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono text-sm text-muted-foreground">
            <span>Stay tuned for updates on official channels.</span>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-orbitron text-2xl font-bold text-foreground mb-4 text-glow">
              HACK<span className="text-gradient-animated">SPHERE</span>
            </h3>
            <p className="font-mono text-muted-foreground mb-6 max-w-md">
              The ultimate hackathon experience where innovation meets opportunity. 
              Join us and shape the future of technology.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
              <span>Social media links are not available.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-orbitron font-bold text-foreground mb-4 text-glow">Quick Links</h4>
            <ul className="space-y-3 font-mono text-sm">
              {['About', 'Timeline', 'Theme', 'Resources', 'Team'].map((link, idx) => (
                <li key={link} className="hover-lift transition-all duration-300" style={{ animationDelay: `${0.05 * idx}s` }}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover-glow hover:text-primary transition-all duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (no direct personal details) */}
          <div className="glass-effect rounded-lg p-4 animate-slide-in-right shadow-glow-sm" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-orbitron font-bold text-foreground mb-4 text-glow">Contact</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary animate-glow-pulse" />
                <span className="text-muted-foreground">Contact details will be shared during the event.</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1 animate-glow-pulse" style={{ animationDelay: '0.1s' }} />
                <div>
                  <div>Sri Krishna Arts and Science College</div>
                  <div>Coimbatore, Tamil Nadu</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
          <p className="font-mono text-sm text-muted-foreground">
            © 2026 HackSphere. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-mono text-sm">
            <a href="#" className="text-muted-foreground hover-glow hover:text-primary transition-all duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover-glow hover:text-primary transition-all duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
