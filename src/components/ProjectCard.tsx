'use client';
import { motion } from 'framer-motion';
import Technologies from './Technologies';

interface ProjectCardProps {
  title: string;
  description: string;
  demoUrl?: string;
  codeUrl?: string;
  techs?: string[];
}

const ProjectCard = ({
    title,
    description,
    demoUrl,
    codeUrl,
    techs = [],
  }: ProjectCardProps) => {
    return (
      <motion.article 
        className="group relative bg-white border-4 border-black rounded-2xl shadow-[6px_6px_0_rgba(0,0,0,1)] overflow-hidden hover:shadow-[8px_8px_0_rgba(0,0,0,1)] transition-all duration-300 h-fit"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.2 }
        }}
      >
        {/* Decorative header accent */}
        <div className="h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
        
        <div className="p-6 flex flex-col h-full">
          {/* Header Section */}
          <div className="mb-4">
            <motion.h3 
              className="text-2xl font-black text-black mb-3 group-hover:text-yellow-700 transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-700 leading-relaxed text-sm line-clamp-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.p>
          </div>
  
          {/* Technologies Section */}
          {techs && techs.length > 0 && (
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wide">
                Tecnologías
              </h4>
              <Technologies techs={techs} />
            </motion.div>
          )}
  
          {/* Separator */}
          <div className="border-t-2 border-dashed border-gray-200 my-4"></div>
  
          {/* Actions Section */}
          <motion.div 
            className="mt-auto flex gap-3 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {demoUrl && (
              <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex-1 min-w-[100px] px-4 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-sm rounded-xl border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-200 text-center uppercase tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Demo
                </span>
              </motion.a>
            )}
            
            {codeUrl && (
              <motion.a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex-1 min-w-[100px] px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-black text-sm rounded-xl border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-200 text-center uppercase tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Código
                </span>
              </motion.a>
            )}
          </motion.div>
        </div>
  
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-yellow-400 opacity-20"></div>
      </motion.article>
    );
  };

export default ProjectCard;