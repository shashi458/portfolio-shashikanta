import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["PHP", "HTML", "CSS", "JavaScript", "WordPress"] },
  { category: "Frameworks", items: ["Laravel 9/10/11/12", "Bootstrap"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL"] },
  { category: "Tools & DevOps", items: ["Git", "GitHub", "Composer", "Artisan", "Postman", "VS Code", "cPanel", "Vercel"] },
  { category: "Architecture", items: ["MVC", "RESTful APIs", "OOP", "Dependency Injection"] },
  { category: "Servers", items: ["Apache"] },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-2">02.</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-mono text-primary text-sm mb-4 tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary rounded-md text-sm text-secondary-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
