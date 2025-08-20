import { motion } from "framer-motion";

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  isLead?: boolean;
};

export const TeamMemberCard = ({
  name,
  role,
  image,
  linkedin,
  github,
  isLead,
}: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 relative"
    >
      {/* Avatar */}
      <div className="relative mb-5">
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-corporate-red shadow-sm">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = "/assets/team/placeholder.jpg";
            }}
          />
        </div>

        {isLead && (
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-corporate-red text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            Team Lead
          </div>
        )}
      </div>

      {/* Name & Role */}
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600 mb-4">{role}</p>

      {/* Social links */}
      <div className="flex space-x-3">
        {linkedin && (
          <motion.a
            whileHover={{ scale: 1.15 }}
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-corporate-red hover:text-white transition-colors duration-300 border border-gray-200"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.5S3.88 7.5 4.98 7.5 6.96 6.62 6.96 5.5 6.08 3.5 4.98 3.5zM3.5 8.98h3V21h-3v-12.02zm7.5 0h2.88v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.76c0-1.38-.03-3.16-1.92-3.16-1.92 0-2.22 1.5-2.22 3.04V21h-3v-12.02z" />
            </svg>
          </motion.a>
        )}

        {github && (
          <motion.a
            whileHover={{ scale: 1.15 }}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-corporate-red hover:text-white transition-colors duration-300 border border-gray-200"
          >
            <span className="sr-only">GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 
                2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 
                0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 
                1.003.07 1.531 1.032 1.531 1.032.892 
                1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 
                0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 
                0 0 .84-.27 2.75 1.026A9.564 
                9.564 0 0112 6.844c.85.004 1.705.115 
                2.504.337 1.909-1.296 2.747-1.027 
                2.747-1.027.546 1.379.202 2.398.1 
                2.651.64.7 1.028 1.595 1.028 2.688 
                0 3.848-2.339 4.695-4.566 
                4.943.359.309.678.92.678 1.855 
                0 1.338-.012 2.419-.012 2.747 
                0 .268.18.58.688.482A10.019 
                10.019 0 0022 12.017C22 6.484 
                17.522 2 12 2z"
              />
            </svg>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};
