import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-primary mb-4 text-sm tracking-wider"
        >
          &lt;hello world /&gt;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-bold mb-4 tracking-tight"
        >
          Shashikanta{" "}
          <span className="text-primary text-glow">Das</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground font-light mb-8"
        >
          Software Developer — PHP, Laravel & Full-Stack Web
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          1.5+ years building scalable web applications with PHP, Laravel, and MySQL.
          Passionate about clean architecture, RESTful APIs, and delivering production-ready solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-5"
        >
          <a href="https://github.com/shashi458" target="_blank" rel="noopener noreferrer"
            className="p-3 glass rounded-lg hover:border-primary/50 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/shashi458" target="_blank" rel="noopener noreferrer"
            className="p-3 glass rounded-lg hover:border-primary/50 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:shashikantadas632@gmail.com"
            className="p-3 glass rounded-lg hover:border-primary/50 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="tel:+918594942756"
            className="p-3 glass rounded-lg hover:border-primary/50 transition-colors">
            <Phone className="w-5 h-5" />
          </a>
        </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <img
            src={profileImg}
            alt="Shashikanta Das"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/30 shadow-lg shadow-primary/10"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
