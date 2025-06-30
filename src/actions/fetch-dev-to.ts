import { Post } from "@/types/post";

interface DevToArticle {
    title: string;
    url: string;
    published_at: string;
    social_image: string;
    description: string;
}

export async function fetchDevtoPosts(): Promise<Post[]> {
    const res = await fetch('https://dev.to/api/articles?username=rubenoalvarado&per_page=5');
    const data = await res.json();

    return (data as DevToArticle[]).map((d) => ({
        title: d.title,
        url: d.url,
        date: d.published_at,
        source: 'Dev.to',
        thumbnail: d.social_image,
        description: d.description,
    }));
  }