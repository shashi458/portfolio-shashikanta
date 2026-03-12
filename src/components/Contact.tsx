import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-2">05.</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            I'm open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:shashikantadas632@gmail.com"
            className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:border-primary/50 transition-colors w-full sm:w-auto"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-sm">shashikantadas632@gmail.com</span>
          </a>
          <a
            href="tel:+918594942756"
            className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:border-primary/50 transition-colors w-full sm:w-auto"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-sm">+91 8594942756</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 mt-8"
        >
          <a href="https://github.com/shashi458" target="_blank" rel="noopener noreferrer"
            className="p-3 glass rounded-lg hover:border-primary/50 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/shashi458" target="_blank" rel="noopener noreferrer"
            className="p-3 glass rounded-lg hover:border-primary/50 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>

        <p className="text-muted-foreground text-xs mt-16 font-mono">
          © 2026 Shashikanta Das. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
