export type Post = {
    title: string;
    url: string;
    date: string;
    source: 'Medium' | 'Dev.to';
    thumbnail?: string;
    description?: string;
};