import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-8xl font-bold text-gradient-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! This page doesn't exist.
        </p>
        <Link to="/">
          <motion.button
            className="px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home size={20} />
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
