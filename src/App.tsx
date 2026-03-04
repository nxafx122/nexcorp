import { motion } from 'motion/react';
import { 
  Play, 
  ArrowUpRight, 
  Video, 
  Youtube, 
  Briefcase, 
  Zap, 
  CheckCircle2, 
  Star, 
  Mail, 
  Instagram, 
  Twitter, 
  Linkedin,
  Menu,
  X,
  TrendingUp,
  Layers,
  Send,
  Cpu,
  ExternalLink
} from 'lucide-react';
import React, { useState, useEffect, useCallback } from 'react';

// --- Components ---

const VideoModal = ({ isOpen, onClose, videoUrl }: { isOpen: boolean, onClose: () => void, videoUrl: string }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <iframe 
          src={videoUrl} 
          className="w-full h-full"
          allow="autoplay; fullscreen"
          title="Video Player"
        />
      </motion.div>
    </motion.div>
  );
};

const Navbar = ({ onHomeClick, onContactClick }: { onHomeClick: () => void, onContactClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', onClick: onHomeClick },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-indigo/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={onHomeClick} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center glow-shadow group-hover:scale-110 transition-transform">
            <Play className="text-white fill-white w-5 h-5" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter">nexaedits.co</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.onClick ? (
              <button key={link.name} onClick={link.onClick} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                {link.name}
              </button>
            ) : (
              <a key={link.name} href={link.href} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                {link.name}
              </a>
            )
          ))}
          <button 
            onClick={onContactClick}
            className="bg-gradient-primary px-6 py-2.5 rounded-full text-sm font-bold glow-shadow hover:scale-105 transition-transform"
          >
            Contact Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-dark-indigo border-b border-white/10 p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              link.onClick ? (
                <button 
                  key={link.name} 
                  onClick={() => { link.onClick!(); setIsMobileMenuOpen(false); }} 
                  className="text-lg font-medium text-left"
                >
                  {link.name}
                </button>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            <button 
              onClick={() => { onContactClick(); setIsMobileMenuOpen(false); }}
              className="bg-gradient-primary px-6 py-3 rounded-xl text-center font-bold"
            >
              Contact Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = ({ onPlayShowreel, onContactClick }: { onPlayShowreel: () => void, onContactClick: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-bg">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-violet/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-electric-pink/20 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <TrendingUp className="w-4 h-4 text-glow-blue" />
              <span className="text-xs font-bold uppercase tracking-widest text-glow-blue">High-Impact Video Strategy</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-[1.1] mb-6">
              Gautam Arya <br />
              <span className="text-gradient">Nexa Edits</span>
            </h1>
            <p className="text-lg text-white/70 max-w-lg mb-8 leading-relaxed">
              I help entrepreneurs and brands turn raw footage into high-converting cinematic animations that drive engagement and revenue.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onContactClick}
                className="bg-gradient-primary px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 glow-shadow hover:scale-105 transition-transform"
              >
                Start Your Project <ArrowUpRight className="w-5 h-5" />
              </button>
              <button 
                onClick={onPlayShowreel}
                className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                View Showreel
              </button>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    className="w-10 h-10 rounded-full border-2 border-dark-indigo"
                    alt="Client"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold">50+ Happy Clients</p>
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 glass glow-shadow aspect-video group cursor-pointer">
              <img 
                src="https://i.ibb.co/k6sHBVCW/3c81601b-4b00-43fb-96e7-fe4cb4fec23d.jpg" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                alt="Video Preview"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center glow-shadow group-hover:scale-110 transition-transform">
                  <Play className="text-white fill-white w-8 h-8 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="glass px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-tighter">
                  Latest Showreel 2024
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-green-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase font-bold">Retention Rate</p>
                  <p className="text-xl font-bold">+84%</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass p-4 rounded-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-glow-blue/20 rounded-lg flex items-center justify-center">
                  <Layers className="text-glow-blue w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase font-bold">Project Status</p>
                  <p className="text-sm font-bold">Rendering 4K...</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const logos = [
    "TechFlow", "CreativeCo", "VibeMedia", "GrowthLab", "PulseAgency", "Lumina"
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-8">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo) => (
            <span key={logo} className="text-xl md:text-2xl font-display font-bold hover:text-white transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-neon-violet" />,
      title: "Short-form Content",
      desc: "High-retention Reels, TikToks, and Shorts designed to go viral and build your personal brand."
    },
    {
      icon: <Youtube className="w-8 h-8 text-electric-pink" />,
      title: "YouTube Growth",
      desc: "Full-length video editing with transitions that keep viewers hooked from the first second.",
      link: "https://www.youtube.com/@N3xafx"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-glow-blue" />,
      title: "Corporate Videos",
      desc: "Professional brand animations, interviews, and event recaps that establish authority."
    },
    {
      icon: <Video className="w-8 h-8 text-soft-lavender" />,
      title: "Social Media Ads",
      desc: "Performance-focused video ads optimized for conversion across Meta, Google, and TikTok."
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Services That <span className="text-gradient">Convert</span></h2>
          <p className="text-white/70">I don't just cut clips; I engineer visual experiences that drive specific business outcomes.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={`glass p-8 rounded-3xl hover:border-neon-violet/50 transition-colors group ${service.link ? 'cursor-pointer' : ''}`}
              onClick={() => service.link && window.open(service.link, '_blank')}
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ onPlayVideo }: { onPlayVideo: (url: string) => void }) => {
  const projects = [
    { title: "E-commerce Ad Campaign", category: "Ads", img: "https://picsum.photos/seed/ad1/600/800", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Tech Founder Vlog", category: "YouTube", img: "https://picsum.photos/seed/yt1/600/800", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "SaaS Product Launch", category: "Corporate", img: "https://picsum.photos/seed/corp1/600/800", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Fitness Transformation", category: "Shorts", img: "https://picsum.photos/seed/short1/600/800", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Music Video Edit", category: "Creative", img: "https://picsum.photos/seed/music1/600/800", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Real Estate Tour", category: "Corporate", img: "https://picsum.photos/seed/real1/600/800", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ];

  return (
    <section id="projects" className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Featured <span className="text-gradient">Work</span></h2>
            <p className="text-white/70">A collection of projects that delivered massive results for my clients.</p>
          </div>
          <div className="flex gap-4">
            {['All', 'YouTube', 'Ads', 'Shorts'].map(cat => (
              <button 
                key={cat} 
                onClick={() => cat === 'YouTube' && window.open('https://www.youtube.com/@N3xafx', '_blank')}
                className="px-6 py-2 rounded-full border border-white/10 text-sm font-bold hover:bg-white/5 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => onPlayVideo(project.video)}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img 
                src={project.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={project.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-indigo via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-glow-blue uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark-indigo">
                  <Play className="fill-current w-5 h-5 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white/5 border border-white/10 px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Founder, TechFlow",
      text: "Gautam's editing style is exactly what we needed. Our retention rates jumped by 40% in just one month.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Content Creator",
      text: "I've worked with many editors, but none understand transitions like Gautam. He makes every frame count.",
      rating: 5
    },
    {
      name: "Marcus Thorne",
      role: "Marketing Director",
      text: "The ad creatives delivered were top-notch. Our ROAS increased significantly after switching to these edits.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">Client <span className="text-gradient">Success</span> Stories</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl relative">
              <div className="flex text-yellow-500 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg italic mb-8 text-white/70">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={`https://picsum.photos/seed/${t.name}/100/100`} className="w-12 h-12 rounded-full" alt={t.name} referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 glow-shadow">
              <img src="https://i.ibb.co/GfYzqjF7/ae-image.png" className="w-full h-full object-cover" alt="Editor Portrait" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl">
              <p className="text-4xl font-bold text-gradient">7+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">Years Experience</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Crafting Animation That <span className="text-gradient">Matters</span></h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              I started my journey with a passion for visual transitions. Over the years, I've refined my craft to focus on what truly matters: **results**.
            </p>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              My philosophy is simple: Every cut should serve a purpose. Whether it's building tension, delivering a punchline, or driving a sale, I ensure your message is heard loud and clear.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-glow-blue w-6 h-6" />
                <span className="font-bold">Strategic Editing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-glow-blue w-6 h-6" />
                <span className="font-bold">Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-glow-blue w-6 h-6" />
                <span className="font-bold">4K Mastering</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-glow-blue w-6 h-6" />
                <span className="font-bold">Sound Design</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <p className="text-sm font-bold uppercase tracking-widest text-white/50">Tools of choice:</p>
              <div className="flex gap-4 grayscale opacity-50">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold text-xs">Pr</div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold text-xs">Ae</div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold text-xs">Dr</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Strategy", desc: "We define the goal, audience, and hook of your video.", icon: <Cpu /> },
    { title: "Editing", desc: "I craft the narrative using advanced pacing and visual techniques.", icon: <Layers /> },
    { title: "Refinement", desc: "We polish the sound, color, and graphics to perfection.", icon: <Star /> },
    { title: "Delivery", desc: "You receive high-impact files ready to dominate social media.", icon: <Send /> },
  ];

  return (
    <section className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">The <span className="text-gradient">Workflow</span></h2>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center">
              <div className="w-20 h-20 bg-dark-indigo border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 glow-shadow group hover:border-neon-violet transition-colors">
                <div className="text-neon-violet group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-white/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-primary rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden glow-shadow">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-tight">
              Let’s Turn Your Ideas into High-Impact Videos
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Ready to scale your brand with cinematic transitions? Let's chat about your next project.
            </p>
            <button 
              onClick={onContactClick}
              className="bg-white text-dark-indigo px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl"
            >
              Book a Free Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/nxaedits666@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Get in <span className="text-gradient">Touch</span></h2>
            <p className="text-lg text-white/70 mb-12">
              Have a project in mind? Fill out the form or reach out directly via social media. I usually respond within 24 hours.
            </p>

            <div className="space-y-6">
              <a 
                href="https://mail.google.com/mail/u/1/#inbox" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-glow-blue group-hover:border-neon-violet/50 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/50">Email Me</p>
                  <p className="text-lg font-bold group-hover:text-neon-violet transition-colors">nxaedits666@gmail.com</p>
                </div>
              </a>
              <a 
                href="https://www.instagram.com/n3xafx?igsh=bHphNDBwd25uYjZo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-glow-blue group-hover:border-neon-violet/50 transition-all">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/50">Instagram</p>
                  <p className="text-lg font-bold group-hover:text-neon-violet transition-colors">@n3xafx</p>
                </div>
              </a>
            </div>
          </div>

          <div className="glass p-10 rounded-[32px]">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6 glow-shadow">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-white/60 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-xl transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50">Full Name</label>
                    <input 
                      name="name"
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-violet transition-colors" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50">Email Address</label>
                    <input 
                      name="email"
                      required
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-violet transition-colors" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">Project Type</label>
                  <select 
                    name="projectType"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-violet transition-colors appearance-none"
                  >
                    <option className="bg-dark-indigo">Short-form Content</option>
                    <option className="bg-dark-indigo">YouTube Video</option>
                    <option className="bg-dark-indigo">Ad Creative</option>
                    <option className="bg-dark-indigo">Corporate Project</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">Message</label>
                  <textarea 
                    name="message"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-violet transition-colors h-32" 
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  disabled={status === "submitting"}
                  className="w-full bg-gradient-primary py-4 rounded-xl font-bold text-lg glow-shadow hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">Something went wrong. Please try again later.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded flex items-center justify-center">
              <Play className="text-white fill-white w-4 h-4" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter">nexaedits.co</span>
          </div>

          <p className="text-sm text-white/50">© 2024 Gautam Arya. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="https://www.instagram.com/n3xafx?igsh=bHphNDBwd25uYjZo" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.youtube.com/@N3xafx" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            <a href="#" className="text-white/50 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-white/50 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const ShowreelPage = ({ onBack, driveUrl }: { onBack: () => void, driveUrl: string }) => {
  const showreelVideos = [
    { title: "Main Showreel 2024", category: "Masterpiece", img: "https://i.ibb.co/k6sHBVCW/3c81601b-4b00-43fb-96e7-fe4cb4fec23d.jpg", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Commercial Reel", category: "Ads", img: "https://picsum.photos/seed/show2/800/450", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Social Media Highlights", category: "Shorts", img: "https://picsum.photos/seed/show3/800/450", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Cinematic Transition", category: "Documentary", img: "https://picsum.photos/seed/show4/800/450", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ];

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-32 pb-24 grid-bg"
    >
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-muted-gray hover:text-white mb-12 transition-colors group"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-sm">Back to Home</span>
        </button>

        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-4">The <span className="text-gradient">Showreel</span></h1>
            <p className="text-lg text-white/70 max-w-2xl">
              A curated selection of my best work. All source files and high-quality renders are also available on my Google Drive.
            </p>
          </div>
          <a 
            href={driveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-dark-indigo px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl"
          >
            <ExternalLink className="w-5 h-5" />
            Open Google Drive
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {showreelVideos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setActiveVideo(video.video)}
              className="glass rounded-[32px] overflow-hidden group cursor-pointer border border-white/10 hover:border-neon-violet/50 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={video.img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={video.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center glow-shadow">
                    <Play className="text-white fill-white w-6 h-6 ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-8 flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-glow-blue uppercase tracking-widest mb-1">{video.category}</p>
                  <h3 className="text-2xl font-bold">{video.title}</h3>
                </div>
                <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-white transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <VideoModal 
        isOpen={!!activeVideo} 
        onClose={() => setActiveVideo(null)} 
        videoUrl={activeVideo || ""} 
      />
    </motion.div>
  );
};

const ContactPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-32 pb-24 grid-bg"
    >
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-muted-gray hover:text-white mb-12 transition-colors group"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-sm">Back to Home</span>
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8">Let's <span className="text-gradient">Connect</span></h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Ready to take your videos to the next level? Reach out directly or fill out the form below.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <a 
              href="tel:9950779806" 
              className="glass p-10 rounded-3xl hover:border-neon-violet/50 transition-all group text-center"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Send className="text-glow-blue w-8 h-8" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Call or WhatsApp</p>
              <p className="text-3xl font-bold">+91 9950779806</p>
            </a>

            <a 
              href="https://mail.google.com/mail/u/1/#inbox" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-10 rounded-3xl hover:border-neon-violet/50 transition-all group text-center"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="text-glow-blue w-8 h-8" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Email Me</p>
              <p className="text-2xl font-bold break-all group-hover:text-neon-violet transition-colors">nxaedits666@gmail.com</p>
            </a>

            <div className="glass p-10 rounded-3xl text-center">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Instagram className="text-glow-blue w-8 h-8" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Social Media</p>
              <div className="flex justify-center gap-6">
                <a href="https://www.instagram.com/n3xafx?igsh=bHphNDBwd25uYjZo" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
                <a href="https://www.youtube.com/@N3xafx" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors"><Youtube className="w-6 h-6" /></a>
                <a href="#" className="text-white/50 hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="text-white/50 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Contact />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'showreel' | 'contact'>('home');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const driveUrl = "https://drive.google.com/drive/my-drive";

  const openVideo = useCallback((url: string) => {
    setActiveVideo(url);
  }, []);

  const closeVideo = useCallback(() => {
    setActiveVideo(null);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="bg-dark-indigo min-h-screen selection:bg-neon-violet selection:text-white">
      <Navbar 
        onHomeClick={() => setCurrentPage('home')} 
        onContactClick={() => setCurrentPage('contact')} 
      />
      
      {currentPage === 'home' && (
        <>
          <Hero 
            onPlayShowreel={() => setCurrentPage('showreel')} 
            onContactClick={() => setCurrentPage('contact')}
          />
          <SocialProof />
          <Services />
          <Portfolio onPlayVideo={openVideo} />
          <Testimonials />
          <About />
          <Process />
          <CTA onContactClick={() => setCurrentPage('contact')} />
          <Contact />
          <Footer />
        </>
      )}

      {currentPage === 'showreel' && (
        <ShowreelPage 
          onBack={() => setCurrentPage('home')} 
          driveUrl={driveUrl} 
        />
      )}

      {currentPage === 'contact' && (
        <ContactPage 
          onBack={() => setCurrentPage('home')} 
        />
      )}

      <VideoModal 
        isOpen={!!activeVideo} 
        onClose={closeVideo} 
        videoUrl={activeVideo || ""} 
      />
    </div>
  );
}
