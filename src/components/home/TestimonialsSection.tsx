// src/components/home/TestimonialsSection.tsx
import { motion } from "framer-motion";
import { TeamMemberCard } from "./TeamMemberCard";

export const TestimonialsSection = () => {
  const teamMembers = [
    {
      name: "Salma Tammari",
      role: "Frontend Developer",
      image: "/assets/team/salma.jpg",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Bouita Yassir",
      role: "Frontend Developer",
      image: "team/yassirb.png",
      linkedin: "https://www.linkedin.com/in/yassir-bouita-50173828a/",
      github: "https://github.com/YassirB808?tab=repositories"
    },
    {
      name: "Nessrine Lafhal",
      role: "Project Manager",
      image: "/assets/team/nessrine.jpg",
      linkedin: "#",
      github: "#",
      isLead: true
    },
    {
      name: "Yassir Nadifi",
      role: "Full Stack Developer",
      image: "/assets/team/yassir.jpg",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Khalid Abouelfaraj ",
      role: "Backend Developer",
      image: "/assets/team/khalid.jpg",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-3">
            Meet Our Team
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            The talented professionals behind Archix-Base
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          // TS-safe: inline variants as 'any'
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
          } as any}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
              } as any}
            >
              <TeamMemberCard {...member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
