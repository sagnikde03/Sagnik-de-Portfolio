import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.a
          href="#home"
          className="text-xl font-heading font-bold"
          whileHover={{ scale: 1.05 }}
        >
          Sagnik<span className="text-gradient-primary">.</span>
        </motion.a>

        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Made with <Heart size={14} className="text-primary" /> by Sagnik De
        </p>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
