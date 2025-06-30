'use client';
import { fetchDevtoPosts } from "@/actions/fetch-dev-to";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Post } from "@/types/post";

export default function BlogPage() {
  const t = useTranslations('BlogPage');
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const mediumPosts: Post[] = [] // await fetchMediumPosts();
      const devPosts = await fetchDevtoPosts();
      const allPosts = [...mediumPosts, ...devPosts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
      setPosts(allPosts);
    }
    loadPosts();
  }, []);

  return (
    <main className="min-h-screen p-6 text-center">
      <motion.h1 className="text-5xl font-black mb-8 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {t('title')}
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.a
            key={`${post.source}-${post.url}`}
            href={post.url}
            target="_blank" rel="noopener noreferrer"
            className="bg-neutral-800 rounded-2xl overflow-hidden shadow-md hover:shadow-yellow-400/50 transition"
            initial={{ opacity: 0, y: 30 * (i % 3) }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {post.thumbnail && (
              <Image
                src={post.thumbnail}
                width={400}
                height={200}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4 text-left">
              <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
              <p className="text-sm text-neutral-400 mb-2">{new Date(post.date).toLocaleDateString()}</p>
              <span className="inline-block px-2 py-1 bg-yellow-500 text-black rounded-full text-xs font-semibold">
                {post.source}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </main>
  );
}
  