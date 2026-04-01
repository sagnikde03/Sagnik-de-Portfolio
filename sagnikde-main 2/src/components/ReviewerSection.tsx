import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen } from "lucide-react";

const journals = [
  "IEEE Access",
  "Biomedical Signal Processing & Control",
  "Artificial Intelligence In Medicine",
  "Food Chemistry",
  "Scientific Reports",
  "Biological Psychology",
];

const ReviewerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviewer" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Reviewer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Serving as a peer reviewer for leading journals
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {journals.map((journal, index) => (
            <motion.div
              key={journal}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-5 rounded-xl bg-gradient-card border border-border card-hover flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">{journal}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewerSection;
