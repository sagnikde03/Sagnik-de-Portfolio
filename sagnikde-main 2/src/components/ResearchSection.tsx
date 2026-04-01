import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Winter Research Intern",
    organization: "IIT Delhi - Neurocomputing Lab",
    period: "Dec 2024 – May 2025",
    location: "Delhi, India",
    type: "Research",
    description: [
      "Graph-based deep learning methods with explainable AI for anxiety state detection using brain signals",
      "Working on graph-based deep learning models for real-time seizure prediction in humans using iEEG",
    ],
  },
  {
    title: "Research Intern",
    organization: "MANIT Bhopal - Biomedical Signal Processing Lab",
    period: "Aug 2024 – Nov 2025",
    location: "Bhopal, India",
    type: "Research",
    description: [
      "Deep learning solutions for identification of Alzheimer's Disease and Frontotemporal Dementia from EEG signals",
      "Deep learning framework utilizing cross-modal interactions for cognitive task decoding using EEG–fNIRS signals",
    ],
  },
  {
    title: "IASc-INSA-NASI Summer Research Fellow",
    organization: "IISc Bengaluru - SPIRE Lab",
    period: "May 2024 – July 2024",
    location: "Bengaluru, India",
    type: "Fellowship",
    description: [
      "Data-driven approach to predict acoustic field in a rectangular domain at an arbitrary frequency",
      "Dysarthric Speech processing and analysis for identification of Parkinson's Disease",
    ],
  },
  {
    title: "Winter Research Intern",
    organization: "IIIT Naya Raipur - Biomedical & Speech Processing Lab",
    period: "Dec 2023 – May 2024",
    location: "Naya Raipur, India",
    type: "Research",
    description: [
      "Multimodal deep learning based IoMT framework for Major Depressive Disorder (MDD) diagnosis using EEG and Speech",
      "Unimodal deep learning approach for objective detection and monitoring of MDD using EEG signals",
    ],
  },
  {
    title: "Summer Research Intern",
    organization: "CDAC Pune - High Performance Computing I&E Group",
    period: "Apr 2023 – Oct 2023",
    location: "Pune, India",
    type: "Research",
    description: [
      "EEG-based early detection of Parkinson's Disease using advanced signal decomposition and deep learning",
      "Quantum deep learning algorithms for analyzing alert and drowsy brain states using multimodal sensor data",
      "Real-time ECG data acquisition system using STM32 microcontroller with mobile app for atrial fibrillation detection",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    organization: "University of Calcutta - AI & Robotics (AIR) Lab",
    period: "Oct 2022 – Apr 2025",
    location: "Kolkata, India",
    type: "Research",
    description: [
      "Multimodal deep learning approach using EEG and sEMG signals for Lower Back Pain assessment",
      "Brain activity patterns associated with Basic Taste perception using deep learning methods",
      "B.Tech Thesis: Fuzzy Relation induced Causal Brain Connectivity Network decoding using Hybrid GCN",
    ],
  },
];

const skills = [
  { name: "Python", level: 95 },
  { name: "PyTorch / TensorFlow", level: 92 },
  { name: "MATLAB", level: 90 },
  { name: "Biomedical Signal Processing", level: 90 },
  { name: "Deep Learning", level: 92 },
  { name: "Graph Neural Networks", level: 85 },
];

const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Research <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Research internships at premier institutions across India
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.organization}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-card border border-border card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">{exp.title}</h4>
                      <p className="text-primary text-sm">{exp.organization}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    {exp.type}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Tools & Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "PyTorch",
                  "TensorFlow",
                  "Keras",
                  "Scikit-learn",
                  "MNE-Python",
                  "EEGLab",
                  "Freesurfer",
                  "Nilearn",
                  "FSL",
                  "OpenCV",
                  "Django",
                  "React",
                  "Git",
                  "Docker",
                  "NumPy",
                  "Pandas",
                ].map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.03 }}
                    className="px-4 py-2 rounded-lg bg-muted text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Coursework */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Relevant Coursework</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "AI & Machine Learning",
                  "Data Structures & Algorithms",
                  "Digital Signal Processing",
                  "Signals and Systems",
                  "Computer Architecture",
                ].map((course, index) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                    className="px-4 py-2 rounded-lg border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
