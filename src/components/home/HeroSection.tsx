// src/components/home/HeroSection.tsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import documentImage from '../../assets/archix_logo.png';

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-professional-black to-gray-800 text-cream-white py-20 overflow-hidden">
      
      {/* Abstract Background Shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-corporate-red opacity-10 rounded-full blur-3xl animate-floatSlow"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-golden-beige opacity-10 rounded-full blur-3xl animate-floatSlow"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-500 opacity-5 rounded-full blur-3xl animate-floatSlow"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-center relative z-10">

        {/* Text Content */}
        <motion.div 
          className="md:w-1/2 mb-12 md:mb-0 md:mr-12"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 18 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 leading-tight">
            Modern Document Management <span className="text-corporate-red">Simplified</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl">
            Secure, collaborative document handling for organizations of all sizes. 
            Streamline your workflow and keep everything organized effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('/home')}
              className="bg-corporate-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
            >
              Get Started
            </button>
            <button className="border-2 border-golden-beige text-golden-beige hover:bg-golden-beige hover:text-professional-black font-bold py-3 px-8 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.3 }}
        >
          <div className="relative">
            <img
              src={documentImage}
              alt="Archix logo"
              className="w-80 h-80 object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};