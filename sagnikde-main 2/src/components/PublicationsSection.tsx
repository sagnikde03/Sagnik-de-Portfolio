import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FileText, ExternalLink, Quote, BookOpen, FileCheck } from "lucide-react";

const journalArticles = [
  {
    title: "A Novel Vision Transformer based Multimodal Fusion Approach for Clinical MDD Diagnosis Using EEG and Audio Signals",
    authors: "S. De, A. Singh and A.K. Bhandari",
    venue: "IEEE Transactions on Computational Biology and Bioinformatics, 2025",
    status: "Published",
    link: "https://ieeexplore.ieee.org/document/11218801",
  },
  {
    title: "Identification of patients with de novo Parkinson's Disease from chemosensory EEG signals using ICEEMDAN domain Entropy Features",
    authors: "S. De, S. Pavuluri, and A. K. Gupta",
    venue: "IEEE Sensors Letters, 2025",
    status: "Published",
    link: "https://doi.org/10.1109/LSENS.2025.3565312",
  },
  {
    title: "GLEAM: A Multimodal Deep Learning Framework for Chronic Lower Back Pain Detection using EEG and sEMG Signals",
    authors: "S. De, P. Mukherjee, and A. H. Roy",
    venue: "Computers in Biology & Medicine, Elsevier, 2025",
    status: "Published",
    link: "https://doi.org/10.1016/j.compbiomed.2025.109928",
  },
  {
    title: "TasteNet: A Novel Deep Learning Approach for EEG-Based Basic Taste Perception Recognition Using CEEMDAN Domain Entropy Features",
    authors: "S. De, P. Mukherjee, and A. H. Roy",
    venue: "Journal of Neuroscience Methods, Elsevier, 2025",
    status: "Published",
    link: "https://doi.org/10.1016/j.jneumeth.2025.110463",
  },
  {
    title: "Quantifying the Impact of Speaker and Content Features on ASR Systems Using Unsupervised Distance Metrics",
    authors: "S. Pavuluri, S. De, A. K. Gupta",
    venue: "IEEE Sensors Reviews, 2025",
    status: "Published",
    link: "https://doi.org/10.1109/SR.2025.3569785",
  },
  {
    title: "SLiTRANet: An EEG-based Automated Diagnosis Framework for Major Depressive Disorder Monitoring using LGCN and Transformer",
    authors: "S. De, A. Singh, V. Tiwari, H. Patel, GN Vivekananda, and D.S Rajput",
    venue: "IEEE Access, 2024",
    status: "Published",
    link: "https://doi.org/10.1109/ACCESS.2024.3493140",
  },
];

const underReview = [
  {
    title: "HYGRA: A Hybrid Graph Connectivity Framework for EEG-based Human Anxiety State Identification",
    authors: "S. De and T. K. Gandhi",
    venue: "IEEE Signal Processing Letters",
    status: "Under Review",
  },
  {
    title: "KAN-ADViT: A Modified Vision Transformer with Kolmogorov Arnold network for Alzheimer's Disease Detection using EEG signals",
    authors: "S. De, V. Bajaj and A. J. Prakash",
    venue: "IEEE Sensors Journal",
    status: "Under Review",
  },
  {
    title: "A Novel Capsule Network with Explainable AI-driven channel selection for Neuropathic Pain diagnosis from EEG signals",
    authors: "S. De, P. Mukherjee, and A.H. Roy",
    venue: "IEEE Signal Processing Letters",
    status: "Under Review",
  },
];

const conferences = [
  {
    title: "Maestro: A Robust Multi-Head Attention Enhanced CNN Architecture for Heat-Induced Stress Recognition Using EEG Signals",
    authors: "S. De, S. Pavuluri, A. Sayyad and A. K. Gupta",
    venue: "IEEE CSITSS, 2024",
    status: "Published",
    link: "https://doi.org/10.1109/CSITSS64042.2024.10816769",
  },
  {
    title: "ParViT: A modified Vision Transformer architecture for Parkinson's Disease identification using EEG signals",
    authors: "S. De, A. Sayyad, H. Kotian and A.K. Gupta",
    venue: "IEEE ICSSES, 2024",
    status: "Published",
    link: "https://doi.org/10.1109/ICSSES62373.2024.10561266",
  },
  {
    title: "A Quantum Machine Learning framework for Driver Drowsiness Detection using Biopotential Signals and Head Movement Analysis",
    authors: "S. De, and A.K. Gupta",
    venue: "IEEE ICWITE, 2024",
    status: "Published",
    link: "https://doi.org/10.1109/ICWITE59797.2024.10502814",
  },
  {
    title: "A Novel Deep Learning-Based Approach for Hypertension Level Detection Using PPG",
    authors: "S. De, P. Mukherjee, A. H. Roy",
    venue: "IEEE SILCON, 2023",
    status: "Published",
    link: "https://doi.org/10.1109/SILCON59133.2023.10404813",
  },
  {
    title: "A Hybrid Pain Assessment Approach with Stacked Autoencoders and Attention-Based CP-LSTM",
    authors: "S. De, P. Mukherjee, and A. H. Roy",
    venue: "IEEE AIKIIE, 2023",
    status: "Published",
    link: "https://doi.org/10.1109/AIKIIE60097.2023.10390223",
  },
  {
    title: "A Novel Human Stress Level Detection Technique Using EEG",
    authors: "D. Konar, S. De, P. Mukherjee, A. H. Roy",
    venue: "IEEE NMITCON, 2023",
    status: "Published",
    link: "https://doi.org/10.1109/NMITCON58196.2023.10276159",
  },
];

const PublicationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"journals" | "conferences" | "preprints">("journals");

  const getPublications = () => {
    switch (activeTab) {
      case "journals":
        return journalArticles;
      case "conferences":
        return conferences;
      case "preprints":
        return underReview;
      default:
        return journalArticles;
    }
  };

  return (
    <section id="publications" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Publications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
            200+ citations across all publications
          </p>
          <motion.a
            href="https://scholar.google.com/citations?user=foOv3C0AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
            whileHover={{ x: 5 }}
          >
            View all on Google Scholar
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          {[
            { id: "journals", label: "Journal Articles", icon: BookOpen },
            { id: "conferences", label: "Conferences", icon: FileText },
            { id: "preprints", label: "Under Review", icon: FileCheck },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </motion.div>

        <div className="space-y-4">
          {getPublications().map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-card border border-border card-hover group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    {('link' in pub && (pub as any).link) ? (
                      <a href={(pub as any).link} target="_blank" rel="noopener noreferrer" className="font-bold text-lg group-hover:text-primary transition-colors hover:underline flex items-center gap-2">
                        {pub.title}
                        <ExternalLink size={16} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                    )}
                    <span className={`px-3 py-1 text-xs rounded-full flex-shrink-0 ${
                      pub.status === "Published" 
                        ? "bg-green-500/10 text-green-500" 
                        : "bg-yellow-500/10 text-yellow-500"
                    }`}>
                      {pub.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mt-2">{pub.authors}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
                    <span className="text-primary font-medium">{pub.venue}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
