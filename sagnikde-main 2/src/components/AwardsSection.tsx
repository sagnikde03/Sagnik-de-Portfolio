import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Medal, Star } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "INSA-IASc-NASI Summer Research Fellowship",
    year: "2024",
    description: "Prestigious national fellowship for research at IISc Bengaluru",
  },
  {
    icon: Medal,
    title: "Satyendra Nath Bose Summer Research Internship",
    year: "2024",
    description: "Selected for summer research program at NIT Silchar",
  },
  {
    icon: Award,
    title: "Best Paper Award",
    year: "2024",
    description: "Received at IEEE ICCCCM 2024 and IEEE IACIS 2024",
  },
  {
    icon: Star,
    title: "3rd Runners Up - TELECAST 2024",
    year: "2024",
    description: "University of Calcutta in collaboration with CTiF (Denmark), India",
  },
  {
    icon: Star,
    title: "Outstanding Volunteer 2023-24",
    year: "2024",
    description: "Awarded by IEEE Calcutta University Student Branch",
  },
  {
    icon: Trophy,
    title: "1st Prize - COGNITECH 2023",
    year: "2023",
    description: "AI & Robotics Club in collaboration with IEEE Calcutta University Student Branch",
  },
  {
    icon: Medal,
    title: "1st Prize - Research Work Presentation",
    year: "2023",
    description: "IEEE Photonics Society & IEEE APS Kolkata Chapter & IEEE CUSB",
  },
];

const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="text-gradient-primary">Honours</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence and research contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-card border border-border card-hover text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <award.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm">{award.year}</span>
              <h3 className="font-bold mt-2 mb-2">{award.title}</h3>
              <p className="text-sm text-muted-foreground">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
