import { techBadges } from "@/data/techBadges";
import { motion } from 'framer-motion';

type TechnologiesProps = {
    techs: string[];
    index?: number;
    isTimeline?: boolean;
};

export default function Technologies({ techs, index = 0, isTimeline = false }: TechnologiesProps) {
    return(
        <div className={`flex flex-wrap gap-2 ${isTimeline ? 'items-center justify-center mt-4' : 'justify-start'}`}>
            {techs.map((tech, techIdx) => {
                const badge = techBadges[tech];
                if (!badge) return null;
                      
                return (
                    <motion.img
                        key={badge.name}
                        src={badge.badgeUrl}
                        alt={`${badge.name} badge`}
                        className="h-6 rounded-full border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] bg-white hover:shadow-[3px_3px_0_rgba(0,0,0,1)] transition-all duration-200"
                        loading="lazy"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + techIdx * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                    />
                );
            })}
        </div>
    );
}