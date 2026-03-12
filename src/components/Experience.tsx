import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-2">04.</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Experience & <span className="text-primary">Education</span>
          </h2>
        </motion.div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="font-mono text-primary text-sm mb-6 tracking-wider flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> WORK EXPERIENCE
          </h3>
          <div className="space-y-6 border-l-2 border-border pl-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              <h4 className="font-heading font-semibold text-lg">Software Developer</h4>
              <p className="text-primary font-mono text-sm">IIG Technology, Bhubaneswar</p>
              <p className="text-muted-foreground text-sm">October 2024 – Present</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
              <h4 className="font-heading font-semibold text-lg">Software Intern</h4>
              <p className="text-primary font-mono text-sm">Rixosys Pvt. Solution, Bhubaneswar</p>
              <p className="text-muted-foreground text-sm">January 2024 – June 2024</p>
            </motion.div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="font-mono text-primary text-sm mb-6 tracking-wider flex items-center gap-2">
            <GraduationCap className="w-4 h-4" /> EDUCATION
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { degree: "MCA", institution: "Gandhi Institute For Technology", year: "2024", grade: "1st" },
              { degree: "BSc", institution: "Utkal University", year: "2020", grade: "1st" },
            ].map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-5"
              >
                <h4 className="font-heading font-semibold">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                <div className="flex justify-between mt-2">
                  <span className="text-xs font-mono text-primary">{edu.year}</span>
                  <span className="text-xs font-mono text-muted-foreground">{edu.grade} Division</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
