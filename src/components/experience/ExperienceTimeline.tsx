'use client';
import { experiences } from '@/data/experience';
import { motion } from 'framer-motion';
import Technologies from '../Technologies';
  
  const ExperienceTimeline = () => {
    return (
      <section className="py-16 px-4 bg-gradient-to-b from-yellow-50 via-white to-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-black comic-title mb-12 text-center text-black"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experiencia Profesional
          </motion.h2>
  
          {/* Timeline Container */}
          <div className="relative">
            {/* Línea central vertical */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-black transform md:-translate-x-1/2" />
            
            {/* Círculo inicial */}
            <motion.div 
              className="absolute left-2 md:left-1/2 top-0 w-5 h-5 bg-yellow-400 border-2 border-black rounded-full transform md:-translate-x-1/2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
  
            {/* Timeline Items */}
            <div className="space-y-12 pt-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 
                      ? 'md:flex-row flex-col ml-12 md:ml-0' 
                      : 'md:flex-row-reverse flex-col ml-12 md:ml-0'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Punto de conexión */}
                  <motion.div 
                    className={`absolute w-6 h-6 bg-yellow-400 border-4 border-black rounded-full z-10 ${
                      index % 2 === 0 
                        ? 'left-[-37px] md:left-auto md:right-[-12px]' 
                        : 'left-[-37px] md:left-[-12px]'
                    } top-6`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  />
  
                  {/* Tarjeta de experiencia */}
                  <motion.div
                    className={`bg-white border-4 border-black p-6 rounded-2xl shadow-[6px_6px_0_rgba(0,0,0,1)] w-full md:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    } hover:shadow-[8px_8px_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="text-sm font-bold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full border-2 border-black inline-block mb-2">
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-black text-black mb-1 group-hover:text-yellow-700 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-lg font-bold text-gray-700">
                        {exp.company}
                      </div>
                    </div>
  
                    {/* Descripción */}
                    <div className="mb-4">
                      <ul className="space-y-2 text-sm text-gray-700">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-yellow-400 border border-black rounded-full mr-3 mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
  
                    {/* Tecnologías */}
                    <Technologies 
                        techs={exp.techs} 
                        index={index}
                        isTimeline={true} 
                    />
  
                    {/* Flecha decorativa */}
                    <div className={`hidden md:block absolute top-8 ${
                      index % 2 === 0 ? 'right-[-20px]' : 'left-[-20px]'
                    }`}>
                      <div className={`w-0 h-0 border-t-[10px] border-b-[10px] border-t-transparent border-b-transparent ${
                        index % 2 === 0 
                          ? 'border-l-[20px] border-l-black' 
                          : 'border-r-[20px] border-r-black'
                      }`} />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
  
            {/* Círculo final */}
            <motion.div 
              className="absolute left-2 md:left-1/2 bottom-0 w-5 h-5 bg-yellow-400 border-2 border-black rounded-full transform md:-translate-x-1/2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            />
          </div>
  
          {/* Indicador de scroll */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="inline-flex items-center text-sm text-gray-500 bg-white border-2 border-black px-4 py-2 rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)]">
              <span className="mr-2">✨</span>
              Mi viaje profesional
              <span className="ml-2">✨</span>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default ExperienceTimeline;