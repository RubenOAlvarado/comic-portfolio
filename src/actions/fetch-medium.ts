import { Post } from "@/types/post";
import { parseStringPromise } from "xml2js";

type MediumItem = {
    title: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    description: string;
};

export async function fetchMediumPosts(): Promise<Post[]> {
    const res = await fetch('https://medium.com/feed/@rubenosmaralvarado');
    const data = await res.json();
    const parsed = await parseStringPromise(data);
    console.log(res);

    return parsed.slice(0, 5).map((item: MediumItem) => ({
        title: item.title,
        url: item.link,
        date: item.pubDate,
        source: 'Medium',
        thumbnail: item.thumbnail,
        description: item.description,
    }));
}