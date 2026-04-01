import { motion } from "framer-motion";
import { Github, Linkedin, GraduationCap, ChevronDown } from "lucide-react";
import profileImage from "@/assets/sagnik-profile.png";

const HeroSection = () => {
  const skills = [
    "Neuroengineering",
    "Ubiquitous Computing",
    "Computational Neuroscience",
    "Brain–Computer Interface",
    "Deep Learning",
    "Healthcare Informatics",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Sagnik De<span className="text-gradient-primary">.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-muted-foreground mb-6"
            >
              Aspiring PhD Researcher
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg mb-8 max-w-lg"
            >
              I completed my B.Tech in Electronics and Communication Engineering 
              in 2025, from Institute of Radio Physics and Electronics (IRPE), 
              University of Calcutta, India. I also completed my Minors in 
              Business Administration from Indian Institute of Technology (IIT), Patna.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.a
                href="#contact"
                className="px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#publications"
                className="px-8 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Research
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <motion.a
                href="https://scholar.google.com/citations?user=foOv3C0AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                whileHover={{ y: -4 }}
              >
                <GraduationCap size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sagnik08/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                whileHover={{ y: -4 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/sagnikde03/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                whileHover={{ y: -4 }}
              >
                <Github size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-110 animate-pulse-slow" />
              <div className="absolute inset-0 rounded-full border border-secondary/20 scale-125" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-glow">
                <img
                  src={profileImage}
                  alt="Sagnik De"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 py-6 border-y border-border overflow-hidden"
        >
          <div className="flex gap-12 animate-marquee">
            {[...skills, ...skills].map((skill, index) => (
              <span
                key={index}
                className="text-muted-foreground whitespace-nowrap flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
