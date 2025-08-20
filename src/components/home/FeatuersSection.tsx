// src/components/home/FeaturesSection.tsx
import { FiLock, FiSearch, FiUsers, FiUploadCloud } from 'react-icons/fi';
import { motion, Variants, Transition } from 'framer-motion';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <FiUploadCloud className="text-corporate-red text-2xl md:text-3xl" />,
      title: "Easy Upload",
      description: "Drag and drop your documents or select files from your device."
    },
    {
      icon: <FiSearch className="text-corporate-red text-2xl md:text-3xl" />,
      title: "Smart Search",
      description: "Find any document instantly with our powerful search technology."
    },
    {
      icon: <FiUsers className="text-corporate-red text-2xl md:text-3xl" />,
      title: "Team Collaboration",
      description: "Work together on documents with real-time editing and comments."
    },
    {
      icon: <FiLock className="text-corporate-red text-2xl md:text-3xl" />,
      title: "Secure Storage",
      description: "Your documents are encrypted and protected with enterprise-grade security."
    }
  ];

  // Smooth tween transition for soft finish
  const smoothTween: Transition = {
    type: "tween",
    duration: 0.8,
    ease: "easeOut"
  };

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.16 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: smoothTween }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -top-24 -left-24 w-60 h-60 bg-corporate-red opacity-10 rounded-full blur-3xl animate-floatSlow"></div>
      <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-golden-beige opacity-10 rounded-full blur-3xl animate-floatSlow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Powerful Features
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your documents efficiently and securely.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl text-center transition transform hover:scale-105 hover:shadow-2xl ring-1 ring-gray-200 relative"
            >
              {/* Icon badge */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-corporate-red bg-opacity-10 rounded-full shadow-sm">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
