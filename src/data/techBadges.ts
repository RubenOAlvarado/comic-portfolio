export interface TechBadge {
    name: string;
    badgeUrl: string;
}

export const techBadges: Record<string, TechBadge> = {
    React: {
        name: 'React',
        badgeUrl: 'https://img.shields.io/badge/Code-React-informational?style=flat&logo=react',
    },
    Svelte: {
        name: 'Svelte',
        badgeUrl: 'https://img.shields.io/badge/Code-Svelte-informational?style=flat&logo=svelte',
    },
    TypeScript: {
        name: 'TypeScript',
        badgeUrl: 'https://img.shields.io/badge/Code-TypeScript-blue?style=flat&logo=typescript',
    },
    Vite: {
        name: 'Vite',
        badgeUrl: 'https://img.shields.io/badge/Build-Vite-yellow?style=flat&logo=vite',
    },
    Tailwind: {
        name: 'Tailwind CSS',
        badgeUrl: 'https://img.shields.io/badge/Style-Tailwind_CSS-0ea5e9?style=flat&logo=tailwind-css',
    },
    'Framer Motion': {
        name: 'Framer Motion',
        badgeUrl: 'https://img.shields.io/badge/Animate-Framer_Motion-black?style=flat&logo=framer',
    },
    Node: {
        name: 'Node.js',
        badgeUrl: 'https://img.shields.io/badge/Backend-Node.js-339933?style=flat&logo=node.js',
    },
    Nest: {
        name: 'NestJS',
        badgeUrl: 'https://img.shields.io/badge/API-NestJS-E0234E?style=flat&logo=nestjs',
    },
    MongoDB: {
        name: 'MongoDB',
        badgeUrl: 'https://img.shields.io/badge/Database-MongoDB-47A248?style=flat&logo=mongodb',
    },
    PostgresQL: {
        name: 'PostgreSQL',
        badgeUrl: 'https://img.shields.io/badge/Database-PostgreSQL-336791?style=flat&logo=postgresql',
    },
};
export const techBadgesList: TechBadge[] = Object.values(techBadges);  