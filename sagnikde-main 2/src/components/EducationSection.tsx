import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics and Communication Engineering",
    institution: "University of Calcutta",
    location: "Kolkata, India",
    period: "2021 - 2025",
    description: "Undergraduate Research Assistant at AI & Robotics (AIR) Lab. B.Tech Thesis: A Fuzzy Relation induced Causal Brain Connectivity Network decoding using metaheuristically optimized Hybrid Graph Convolution Network. Minors in Business Administration from IIT Patna.",
  },
  {
    degree: "Indian School Certificate (ISC)",
    field: "Class XII - Science Stream",
    institution: "Don Bosco School",
    location: "Liluah, India",
    period: "2021",
    description: "Completed higher secondary education with distinction in Science subjects.",
  },
  {
    degree: "Indian Certificate of Secondary Education (ICSE)",
    field: "Class X",
    institution: "Don Bosco School",
    location: "Liluah, India",
    period: "2019",
    description: "Strong foundation in Mathematics and Science.",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey in electronics and research
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          

          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot - removed */}

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                <div className="p-6 rounded-xl bg-gradient-card border border-border card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{edu.degree}</h3>
                      <p className="text-primary text-sm">{edu.field}</p>
                    </div>
                  </div>

                  <h4 className="font-medium mb-2">{edu.institution}</h4>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
