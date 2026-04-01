import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github, Linkedin, GraduationCap, Send, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9432341459",
      href: "tel:+919432341459",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sagnikde2003@gmail.com",
      href: "mailto:sagnikde2003@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kolkata, West Bengal, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: GraduationCap,
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=foOv3C0AAAAJ&hl=en",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sagnik08/",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sagnikde03/",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, research discussions, or just to say hello!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <h4 className="font-bold mb-4">Connect with me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                  whileHover={{ y: -4 }}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-medium flex items-center justify-center gap-2 shadow-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
