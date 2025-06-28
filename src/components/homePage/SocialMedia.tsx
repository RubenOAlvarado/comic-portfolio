import { socialLinks } from "@/data/socialMedia";

export default function SocialMedia() {
    return (
        <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social) => (
                    <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group relative p-4 bg-neutral-800 
                      rounded-lg transition-all duration-300 transform hover:scale-110 
                      hover:shadow-lg hover:shadow-yellow-400/50 ${social.color}
                      social-comic-button
                    `}
                    aria-label={`Seguir en ${social.name}`}
                  >
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POW!
                      </div>
                    </div>
                    
                    <div className="text-white group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-100 rounded-lg">
                      <span className="text-white font-bold text-sm">{social.name}</span>
                    </div>
                  </a>
                ))}
            </div>
        </div>
    );
}