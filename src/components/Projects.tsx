import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "HRMS",
    subtitle: "Human Resource Management System",
    tech: ["PHP", "MySQL", "RESTful APIs", "OOP"],
    period: "Dec 2025 – Present",
    description: "Web-based HRMS managing employee lifecycle including payroll, attendance, leave tracking with RBAC.",
  },
  {
    title: "Hospital Management System",
    subtitle: "Patient & Billing Platform",
    tech: ["PHP", "Laravel 11", "MySQL"],
    period: "Mar 2025 – Aug 2025",
    description: "Streamlined patient registration, billing, and reporting processes with optimized database operations.",
  },
  {
    title: "Visitor Management System",
    subtitle: "QR-Based Entry Tracking",
    tech: ["Laravel 10", "MySQL", "RESTful APIs"],
    period: "Jan 2025 – Feb 2025",
    description: "QR-based visitor entry system with real-time tracking, logging, and secure role management.",
  },
  {
    title: "Audio Book Management",
    subtitle: "Admin Panel & Media System",
    tech: ["Laravel 11", "MySQL", "Bootstrap"],
    period: "Oct 2024 – Mar 2025",
    description: "Web-based system with admin panel for managing audio book categories, uploads, and user access.",
  },
  {
    title: "Centralized Admin Portal",
    subtitle: "Multi-Website CMS",
    tech: ["Laravel 12", "MySQL", "RBAC"],
    period: "Oct 2024 – Dec 2025",
    description: "Centralized dashboard managing Blogs, Newsletters, Events, Magazines, and Job Openings across multiple websites.",
  },
  {
    title: "OpenEMR Customization",
    subtitle: "Healthcare Module Enhancement",
    tech: ["PHP", "PWA"],
    period: "Oct 2024 – Dec 2025",
    description: "Customized healthcare modules and implemented PWA features for improved accessibility and workflow.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-2">03.</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-secondary rounded text-xs font-mono text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground font-mono whitespace-nowrap ml-2">{project.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
