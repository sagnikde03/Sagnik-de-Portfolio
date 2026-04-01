import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Calendar, Lightbulb, Globe } from "lucide-react";

const positions = [
  {
    title: "Secretary",
    organization: "IEEE Calcutta University Student Branch (CUSB)",
    period: "Nov 2023 – Apr 2025",
    icon: Users,
  },
  {
    title: "President",
    organization: "AI & Robotics Club, IEEE CUSB",
    period: "Nov 2023 – Apr 2025",
    icon: Lightbulb,
  },
  {
    title: "Founding Secretary",
    organization: "AI & Robotics Club, IEEE CUSB",
    period: "May 2023 – Oct 2023",
    icon: Lightbulb,
  },
  {
    title: "Media Coordinator",
    organization: "Hult Prize, University of Calcutta Chapter '23",
    period: "Sep 2022 – Jan 2023",
    icon: Globe,
  },
  {
    title: "Outreach Coordinator",
    organization: "Hult Prize, University of Calcutta Chapter '22",
    period: "Jan 2022 – Mar 2022",
    icon: Globe,
  },
];

const patent = {
  title: "An Innovative Method for Estimating Blood Pressure and Classifying Hypertension Levels Using PPG",
  inventors: "Sagnik De, Prithwijit Mukherjee, Anisha Halder Roy",
  applicationNo: "202431068453 A",
  journal: "Indian Patent Journal",
  date: "Published on 20/09/2024",
};

const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership & <span className="text-gradient-primary">Patents</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Positions of responsibility and intellectual property contributions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Leadership Positions */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Users className="text-primary" />
              Leadership & Outreach
            </h3>
            <div className="space-y-4">
              {positions.map((pos, index) => (
                <motion.div
                  key={pos.title + pos.organization}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-gradient-card border border-border card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <pos.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">{pos.title}</h4>
                      <p className="text-primary text-sm">{pos.organization}</p>
                      <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                        <Calendar size={14} />
                        {pos.period}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Patent */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Lightbulb className="text-primary" />
              Patent
            </h3>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-xl bg-gradient-card border border-primary/30 glow-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{patent.title}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{patent.inventors}</p>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-primary">Application No:</span> {patent.applicationNo}</p>
                    <p><span className="text-primary">Journal:</span> {patent.journal}</p>
                    <p><span className="text-primary">Status:</span> {patent.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
