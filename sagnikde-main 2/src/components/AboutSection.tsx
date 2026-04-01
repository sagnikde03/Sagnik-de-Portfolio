import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Activity, Cpu, Microscope, Stethoscope, HeartPulse, Waves } from "lucide-react";

const researchAreas = [
  {
    icon: Waves,
    title: "Biomedical Signal Processing",
    description: "Electroencephalography / Intracranial Electroencephalography (EEG / iEEG), Surface Electromyography (sEMG), Functional Near-Infrared Spectroscopy (fNIRS), Photoplethysmography (PPG), Electrocardiography (ECG), Force Myography (FMG)",
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    description: "Graph-Based Neural Networks, Generative Adversarial Networks, Vision Transformers, Transformer Architectures, Convolutional Neural Networks, Long Short-Term Memory Networks, Quantum deep learning models",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Informatics",
    description: "Internet of Medical Things (IoMT)-based Major Depressive Disorder Diagnosis, PPG-based Non-Invasive Blood Pressure Estimation",
  },
  {
    icon: HeartPulse,
    title: "Affective Computing",
    description: "Major Depressive Disorder Analysis, Anxiety State Detection, Heat Stress Recognition",
  },
  {
    icon: Activity,
    title: "Biomechanics",
    description: "Motion Capture & Kinematic Analysis, Joint Reaction Force Estimation, Gait & Posture Analysis",
  },
  {
    icon: Brain,
    title: "Computational Neuroscience",
    description: "Transcranial Alternating Current Stimulation (tACS)-Mediated Modulation of Brain Oscillations for Speech Perception Enhancement, Mean-Field Dynamic Mean-Field (MDMF) Modeling",
  },
  {
    icon: Microscope,
    title: "Brain–Computer Interfaces (BCI)",
    description: "Cognitive Task Decoding, Motor Imagery Classification, Brain-Controlled Exoskeleton Systems",
  },
  {
    icon: Stethoscope,
    title: "LLMs in Healthcare",
    description: "Clinical Decision Support and Medical Reasoning using Large Language Models",
  },
];

const stats = [
  { value: "200+", label: "Citations" },
  { value: "15+", label: "Publications" },
  { value: "6", label: "Research Internships" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aspiring researcher passionate about bridging the gap between neuroscience and artificial intelligence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I completed my B.Tech in Electronics and Communication Engineering in 2025, 
              from Institute of Radio Physics and Electronics (IRPE), University of Calcutta, 
              India. I also completed my Minors in Business Administration from IIT Patna.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I was a Winter Research Intern at the Indian Institute of Technology Delhi under Prof. Tapan Kumar Gandhi, where I worked on a graph-based deep learning framework for anxiety state detection using neural signals and analyzed intracranial EEG (iEEG) data for real-time epileptic seizure prediction. I also served as a Research Intern at Maulana Azad National Institute of Technology Bhopal under Dr. Varun Bajaj, focusing on EEG-based identification of dementia subtypes and developing cross-modal deep learning models for cognitive task decoding using EEG–fNIRS data.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At the Indian Institute of Information Technology Naya Raipur, under Dr. Anurag Singh, I developed IoMT-based multimodal deep learning models for Major Depressive Disorder diagnosis. Earlier, at the Centre for Development of Advanced Computing (CDAC) Pune with Dr. Anil Kumar Gupta, I worked on EEG-based early detection of Parkinson's Disease. At the University of Calcutta, under Dr. Anisha Halder Roy, my work involved EEG–sEMG fusion for chronic lower back pain assessment, along with neuropathic pain analysis and studying brain activity patterns during olfactory and gustatory perception.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My primary research interests span Artificial Intelligence & IoT in Healthcare, 
              Biomedical Signal Processing, Brain-Computer Interface (BCI), Neural Engineering, 
              Computational Neuroscience and Medical Image Analysis.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research Areas */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground text-left">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
